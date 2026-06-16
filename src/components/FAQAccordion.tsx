"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Structured FAQ Schema mapping
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
      {/* FAQ Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className="border border-brand-tint rounded-2xl bg-white overflow-hidden transition-shadow duration-300 hover:shadow-md"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
            >
              <span className="font-semibold text-brand-dark group-hover:text-brand-teal transition-colors text-base">
                {item.question}
              </span>
              <span className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark transition-transform duration-300">
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-brand-teal" : "text-brand-dark"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 13.5L5 8.5L6.4 7.1L10 10.7L13.6 7.1L15 8.5L10 13.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-sm text-brand-gray leading-relaxed border-t border-brand-tint pt-4 bg-brand-cream/10">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
