"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogPage() {
  const allBlogs = [
    {
      title: "Dental myths busted: what your teeth really need for your health",
      desc: "Debunking common myths about hard-bristled brushes, charcoal whitening products, and sugar impact. Learn what clinical endodontists actually recommend.",
      date: "June 14, 2026",
      readTime: "5 min read",
      author: "Dr. Thumu Bharathi, MDS",
      image: "/assets/img/gen_blog-image-1.jpg",
      category: "Oral Health",
    },
    {
      title: "The truth about flossing: why skipping it isn’t an option",
      desc: "Brushing only cleans 60% of your teeth surfaces. Flossing is critical to prevent interdental plaque buildup and gum inflammation.",
      date: "June 10, 2026",
      readTime: "4 min read",
      author: "Dr. Thumu Bharathi, MDS",
      image: "/assets/img/gen_blog-image-2.jpg",
      category: "Hygiene",
    },
    {
      title: "The ultimate guide to brushing: are you doing it right?",
      desc: "Our step-by-step guide to proper brushing duration, circular angling, brush head types, and correct tongue hygiene.",
      date: "May 28, 2026",
      readTime: "6 min read",
      author: "Dr. Thumu Sai Kumar, MDS",
      image: "/assets/img/gen_blog-image-3.jpg",
      category: "Daily Care",
    },
    {
      title: "Foods that secretly harm your teeth, and what to eat instead",
      desc: "It's not just candies—dried fruits, carbonated drinks, and starchy chips erode enamel. Discover tooth-friendly alternatives.",
      date: "May 12, 2026",
      readTime: "5 min read",
      author: "Dr. Thumu Bharathi, MDS",
      image: "/assets/img/gen_blog-image-4.jpg",
      category: "Nutrition",
    },
    {
      title: "How veneers can completely transform your smile",
      desc: "An introduction to porcelain and composite veneers, detailing cost, fitting steps, and life expectancy of cosmetic smile makeovers.",
      date: "May 02, 2026",
      readTime: "7 min read",
      author: "Dr. Thumu Bharathi, MDS",
      image: "/assets/img/gen_blog-image-5.jpg",
      category: "Cosmetics",
    },
    {
      title: "Top 5 daily dental habits to protect your gums for life",
      desc: "Simple daily routines—including salt water rinses, tongue scraping, and proper hydration—to maintain optimal mouth health.",
      date: "April 18, 2026",
      readTime: "4 min read",
      author: "Dr. Thumu Sai Kumar, MDS",
      image: "/assets/img/gen_blog-image-6.jpg",
      category: "Prevention",
    },
  ];

  return (
    <div className="flex flex-col w-full text-brand-dark bg-white">
      {/* Page Hero */}
      <section className="bg-brand-cream py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
            Clinical Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Insights for a Healthier Smile
          </h1>
          <p className="text-brand-gray text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From everyday habits to advanced implant surgery guidance, our dental specialists share expert advice to help you maintain a bright, healthy smile.
          </p>
        </div>
      </section>

      {/* Blog list */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogs.map((blog, i) => (
              <motion.article
                key={blog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-brand-tint rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full group"
              >
                {/* Image */}
                <div className="h-52 overflow-hidden relative bg-brand-cream/30">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4 bg-brand-teal text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {blog.category}
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[10px] text-brand-gray font-semibold">
                      <span>{blog.date}</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="font-bold text-base text-brand-dark leading-snug group-hover:text-brand-teal transition-colors mt-1">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-brand-gray leading-relaxed mt-1">
                      {blog.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-tint/60 mt-auto flex items-center justify-between">
                    <span className="text-[10px] text-brand-dark/50 font-semibold">
                      By {blog.author}
                    </span>
                    <button className="text-xs font-bold text-brand-teal hover:underline inline-flex items-center">
                      Read Article &rarr;
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
