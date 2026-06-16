"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  index?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href = "/service",
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={href} className="block group">
        <div className="glass-card p-6 md:p-8 h-full flex flex-col gap-4 relative overflow-hidden">
          {/* Teal accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal to-brand-teal/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-teal transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-brand-gray leading-relaxed flex-grow">
            {description}
          </p>

          {/* Learn More */}
          <div className="flex items-center gap-2 text-sm font-semibold text-brand-teal opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <span>Learn More</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
