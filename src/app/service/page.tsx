"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

const services = [
  {
    title: "Preventive Dentistry",
    description: "Regular checkups, cleanings, and oral health assessments to catch problems early and keep your smile healthy.",
    image: "/assets/img/gen_service-thumbnail-image.jpg",
    tags: ["Checkups", "Cleanings", "Oral Health", "Whitening"],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with teeth whitening, veneers, bonding, and complete smile makeovers.",
    image: "/assets/img/gen_service-thumbnail-image-2.jpg",
    tags: ["Teeth Whitening", "Veneers", "Smile Makeover", "Bonding"],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Restorative Treatments",
    description: "Fillings, crowns, bridges, and implants to restore the function and beauty of your natural smile.",
    image: "/assets/img/gen_service-thumbnail-image-3.jpg",
    tags: ["Fillings", "Crowns & Bridges", "Dental Implants", "Dentures"],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Orthodontics",
    description: "Straighten your teeth with braces, clear aligners, and orthodontic appliances for a perfect alignment.",
    image: "/assets/img/gen_service-thumbnail-image-4.jpg",
    tags: ["Braces", "Clear Aligners", "Retainers", "Jaw Alignment"],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    title: "Root Canal Treatment",
    description: "Pain-free endodontic procedures using advanced techniques to save your natural teeth effectively.",
    image: "/assets/img/gen_home-value-image.jpg",
    tags: ["Root Canal", "Re-treatment", "Apicoectomy", "Pain Relief"],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: "Emergency & Trauma Care",
    description: "24/7 emergency dental services for urgent situations including trauma, severe pain, and accidents.",
    image: "/assets/img/gen_our-story-image-5.jpg",
    tags: ["Trauma Surgery", "Emergency Care", "Pain Management", "24/7"],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
  },
];

const faqItems = [
  { question: "How often should I visit the dentist?", answer: "We recommend visiting every 6 months for routine checkups and cleanings to maintain optimal oral health and catch any issues early." },
  { question: "Are dental implants safe?", answer: "Yes, dental implants are one of the safest and most predictable dental procedures with a success rate of over 95%. Dr. Sai Kumar uses advanced techniques for minimal discomfort." },
  { question: "How long does a root canal take?", answer: "Most root canal treatments are completed in 1-2 visits, each lasting 60-90 minutes. With modern techniques, the procedure is virtually painless." },
  { question: "Do you accept insurance?", answer: "We work with most major dental insurance providers. Please call our clinic to verify your specific coverage and benefits." },
];

export default function ServicePage() {
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
            <div className="section-tag mx-auto mb-6">Our Services</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Dental Care,{" "}
              <span className="text-brand-teal">Tailored to You</span>
            </h1>
            <p className="text-brand-gray max-w-2xl mx-auto text-lg">
              From routine checkups to advanced treatments, we provide
              personalized dental services designed to keep your smile healthy
              and confident.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>

              <div className={`flex flex-col gap-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 text-brand-teal flex items-center justify-center">
                  {service.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  {service.title}
                </h2>
                <p className="text-brand-gray leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal"
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="https://wa.me/919307512816"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-brand-teal font-semibold text-sm hover:gap-3 transition-all duration-300 w-fit mt-2"
                >
                  Book this service
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="section-tag mx-auto mb-4">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Common <span className="text-brand-teal">Questions</span>
            </h2>
          </motion.div>
          <FAQAccordion items={faqItems} />
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
              Need a Specific Treatment?
            </h2>
            <p className="text-white/60 max-w-lg">
              Contact us to discuss your dental needs and get personalized
              treatment recommendations from our specialists.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="https://wa.me/919307512816"
                target="_blank"
                className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal-hover text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg"
              >
                Book via WhatsApp
              </Link>
              <a
                href="tel:+919307512816"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full border border-white/20 transition-all duration-300"
              >
                Call +91 93075 12816
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
