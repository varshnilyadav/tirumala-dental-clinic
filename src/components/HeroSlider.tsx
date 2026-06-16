"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  {
    src: "/assets/img/gen_dentist-examining-patients-teeth-close-up_1.jpg",
    alt: "Expert dental examination at Tirumala Dental Clinic",
  },
  {
    src: "/assets/img/gen_hero-2.jpg",
    alt: "Modern dental treatment facility",
  },
  {
    src: "/assets/img/gen_hero-3.jpg",
    alt: "Advanced dental care technology",
  },
  {
    src: "/assets/img/gen_hero-4.jpg",
    alt: "Comfortable dental clinic environment",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.08,
      x: dir > 0 ? 60 : -60,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.95,
      x: dir > 0 ? -60 : 60,
    }),
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.img
          key={current}
          src={heroImages[current].src}
          alt={heroImages[current].alt}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/60 to-brand-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? "w-8 h-2.5 bg-brand-teal"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
