"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  rating: number;
  review: string;
  timeAgo: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    review:
      "Dr. Sai Kumar did an amazing job with my dental implant. The entire process was painless and the results are fantastic. Highly recommended for anyone in Adilabad!",
    timeAgo: "2 weeks ago",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    review:
      "Best dental clinic in Adilabad! Dr. Bharathi is very gentle and explained every step of my root canal treatment. The clinic is very clean and modern.",
    timeAgo: "1 month ago",
  },
  {
    name: "Mohammed Irfan",
    rating: 5,
    review:
      "Brought my kids here for the first time and they loved the experience. The staff is so friendly and patient with children. Will definitely come back.",
    timeAgo: "3 weeks ago",
  },
  {
    name: "Lakshmi Devi",
    rating: 5,
    review:
      "Got my smile designed by Dr. Bharathi and I couldn't be happier! The clinic uses latest technology. Very professional and caring team.",
    timeAgo: "1 week ago",
  },
  {
    name: "Suresh Reddy",
    rating: 4,
    review:
      "Had an emergency tooth extraction and they saw me immediately. The doctors are skilled and the recovery was quick. Great emergency dental care.",
    timeAgo: "2 months ago",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400" : "text-gray-200"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const colors = [
    "from-brand-teal to-emerald-400",
    "from-blue-500 to-cyan-400",
    "from-violet-500 to-purple-400",
    "from-orange-500 to-amber-400",
    "from-rose-500 to-pink-400",
  ];

  const colorIndex =
    name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    colors.length;

  return (
    <div
      className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
    >
      {initials}
    </div>
  );
}

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Show 3 testimonials at a time on desktop, 1 on mobile
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(current + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <div ref={ref} className="w-full">
      {/* Desktop — 3-column grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {getVisibleTestimonials().map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${current}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col gap-4"
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-sm text-brand-gray leading-relaxed flex-grow">
                &ldquo;{testimonial.review}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-brand-tint">
                <InitialsAvatar name={testimonial.name} />
                <div>
                  <div className="text-sm font-semibold text-brand-dark">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-brand-gray-light">
                    {testimonial.timeAgo}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Mobile — single card */}
      <div className="md:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            className="glass-card p-6 flex flex-col gap-4"
          >
            <StarRating rating={testimonials[current].rating} />
            <p className="text-sm text-brand-gray leading-relaxed">
              &ldquo;{testimonials[current].review}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-brand-tint">
              <InitialsAvatar name={testimonials[current].name} />
              <div>
                <div className="text-sm font-semibold text-brand-dark">
                  {testimonials[current].name}
                </div>
                <div className="text-xs text-brand-gray-light">
                  {testimonials[current].timeAgo}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? "w-6 h-2 bg-brand-teal"
                : "w-2 h-2 bg-brand-tint hover:bg-brand-gray-light"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
