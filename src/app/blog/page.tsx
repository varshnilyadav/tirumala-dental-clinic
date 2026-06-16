"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    title: "The Ultimate Guide to Brushing: Are You Doing It Right?",
    excerpt: "Discover the proper brushing technique, best toothbrush recommendations, and common mistakes that could be harming your teeth.",
    image: "/assets/img/gen_blog-image-4.jpg",
    category: "Preventive Care",
    date: "April 30, 2026",
    featured: true,
  },
  {
    title: "Dental Myths Busted: What Your Teeth Really Need",
    excerpt: "We separate fact from fiction on common dental beliefs — from sugar causing cavities to whitening damaging enamel.",
    image: "/assets/img/gen_blog-image-6.jpg",
    category: "Oral Health",
    date: "April 22, 2026",
  },
  {
    title: "The Truth About Flossing: Why Skipping It Isn't an Option",
    excerpt: "Learn why flossing is crucial for gum health and how to make it a quick, painless habit.",
    image: "/assets/img/gen_blog-image-5.jpg",
    category: "Preventive Care",
    date: "April 15, 2026",
  },
  {
    title: "Foods That Secretly Harm Your Teeth",
    excerpt: "From citrus fruits to sports drinks — discover which everyday foods and beverages are damaging your enamel.",
    image: "/assets/img/gen_blog-image-3.jpg",
    category: "Nutrition",
    date: "April 8, 2026",
  },
  {
    title: "How Veneers Can Completely Transform Your Smile",
    excerpt: "Everything you need to know about porcelain veneers — procedure, cost, longevity, and who's a good candidate.",
    image: "/assets/img/gen_blog-image-2.jpg",
    category: "Cosmetic Dentistry",
    date: "March 28, 2026",
  },
  {
    title: "5 Daily Dental Habits to Protect Your Smile for Life",
    excerpt: "Simple, science-backed habits that can prevent 90% of dental problems. Start these today for lifelong oral health.",
    image: "/assets/img/gen_blog-image-1.jpg",
    category: "Lifestyle",
    date: "March 20, 2026",
  },
];

export default function BlogPage() {
  const featured = blogPosts[0];
  const remaining = blogPosts.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-surface py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-tag mx-auto mb-6">Our Blog</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights for a{" "}
              <span className="text-brand-teal">Healthier Smile</span>
            </h1>
            <p className="text-brand-gray max-w-2xl mx-auto text-lg">
              From everyday habits to advanced treatments, our dental experts
              share insights to help you maintain optimal oral health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog" className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 glass-card overflow-hidden">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center gap-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal">
                      {featured.category}
                    </span>
                    <span className="text-xs text-brand-gray-light">
                      {featured.date}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold group-hover:text-brand-teal transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-brand-gray leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-brand-teal font-semibold text-sm">
                    Read More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="section-tag mx-auto mb-4">Latest Articles</div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Stories & Tips From{" "}
              <span className="text-brand-teal">Our Experts</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remaining.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link href="/blog" className="group block h-full">
                  <div className="glass-card overflow-hidden h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/90 text-brand-teal">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col gap-3 flex-grow">
                      <span className="text-xs text-brand-gray-light">
                        {post.date}
                      </span>
                      <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-teal transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-brand-gray leading-relaxed line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="inline-flex items-center gap-2 text-brand-teal font-semibold text-sm mt-auto">
                        Read More
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Have Questions About Your Dental Health?
            </h2>
            <p className="text-white/60 max-w-lg">
              Our team is here to help. Book a consultation and get personalized
              advice from our dental experts.
            </p>
            <Link
              href="https://wa.me/919307512816"
              target="_blank"
              className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal-hover text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
