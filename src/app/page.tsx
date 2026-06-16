"use client";

import React from "react";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import StatsCounter from "@/components/StatsCounter";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CallbackForm from "@/components/CallbackForm";
import FAQAccordion from "@/components/FAQAccordion";
import { motion } from "framer-motion";

/* ──────────────────────────────────────────────────────────────
   SERVICE DATA
   ────────────────────────────────────────────────────────────── */
const services = [
  {
    title: "Dental Implants",
    description:
      "Permanent tooth replacement solutions with cutting-edge implant technology for a natural-looking, long-lasting smile.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    title: "Root Canal Treatment",
    description:
      "Pain-free endodontic procedures using advanced techniques to save your natural teeth and relieve discomfort.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: "Zirconia Crowns",
    description:
      "Ultra-durable, premium metal-free zirconia crowns designed to look and function exactly like natural teeth.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747C20.83 13.064 20.217 12 18.732 12h-1.342c-.544 0-1.028-.362-1.185-.884L15.3 8.183c-.156-.522-.64-.884-1.185-.884h-2.23c-.544 0-1.028.362-1.185.884L9.796 11.116c-.156.522-.64.884-1.185.884H7.268c-1.486 0-2.098 1.064-1.984 2.253A9.004 9.004 0 0 0 12 21Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    ),
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional cosmetic bleaching to safely remove stains and brighten your smile in a single visit.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M3 12h2.25m-.386-6.364 1.591 1.591M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" />
      </svg>
    ),
  },
  {
    title: "Braces & Aligners",
    description:
      "Modern orthodontic options including metal braces, ceramic braces, and clear aligners for all ages.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    title: "Wisdom Tooth Removal",
    description:
      "Safe, comfortable surgical extractions of impacted wisdom teeth to prevent pain and crowding.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75 12 12m0 0 2.25 2.25M12 12l2.25-2.25M12 12l-2.25 2.25M12 5.25a.75.75 0 0 0-1.5 0v1.077c-1.282.043-2.502.262-3.61.63L6 6a.75.75 0 0 0-1.5 0v1.543c-.876.54-1.63 1.251-2.203 2.1a.75.75 0 0 0 .148.973l1.109.907c-.033.239-.054.48-.054.727v1.5c0 .247.021.488.054.727l-1.109.907a.75.75 0 0 0-.148.973c.574.849 1.327 1.56 2.203 2.1V21a.75.75 0 0 0 1.5 0l.89-1.05c1.108.368 2.328.587 3.61.63V21.75a.75.75 0 0 0 1.5 0v-1.077c1.282-.043 2.502-.262 3.61-.63l.89 1.05a.75.75 0 0 0 1.5 0v-1.543c.876-.54 1.63-1.251 2.203-2.1a.75.75 0 0 0-.148-.973l-1.109-.907c.033-.239.054-.48.054-.727v-1.5c0-.247-.021-.488-.054-.727l1.109-.907a.75.75 0 0 0 .148-.973c-.574-.849-1.327-1.56-2.203-2.1V5.25a.75.75 0 0 0-1.5 0l-.89 1.05c-1.108-.368-2.328-.587-3.61-.63V5.25Z" />
      </svg>
    ),
  },
  {
    title: "Complete Dentures",
    description:
      "Custom-crafted complete and partial dentures designed for optimal fit, comfort, and natural appearance.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.302m0 0L9 19.5m3.016-4.5V21m3.166-4.682L15 19.5m-6.5-12 1.5 1.5m5-1.5-1.5 1.5M4 12h16M3.75 9H20.25" />
      </svg>
    ),
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Transform your overall smile aesthetic with modern dental veneers, composite bonding, and smile makeovers.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
];

/* ──────────────────────────────────────────────────────────────
   FAQ DATA
   ────────────────────────────────────────────────────────────── */
const faqItems = [
  {
    question: "What services does Tirumala Dental Clinic offer?",
    answer:
      "We offer a comprehensive range of dental services including dental implants, root canal treatment, smile designing, orthodontics (braces & aligners), cosmetic dentistry, pediatric dentistry, emergency dental care, trauma surgery, and hair transplant procedures.",
  },
  {
    question: "Do you offer emergency dental services?",
    answer:
      "Yes, we provide 24/7 emergency dental care. Whether it's severe toothache, a dental accident, or trauma, you can reach us immediately at +91 9307512816 for prompt treatment.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment by filling out the form on our website, calling us at +91 9307512816, or messaging us directly on WhatsApp. Our team will confirm your appointment within minutes.",
  },
  {
    question: "Is dental implant surgery painful?",
    answer:
      "No, dental implant procedures at our clinic are performed under local anesthesia and are virtually painless. Dr. Thumu Sai Kumar uses advanced techniques to ensure maximum comfort during and after the procedure.",
  },
  {
    question: "What are your clinic hours?",
    answer:
      "We are open Monday through Friday from 8:00 AM to 5:00 PM, and Saturday & Sunday from 9:30 AM to 5:30 PM. Emergency services are available 24/7.",
  },
  {
    question: "Do you provide hair transplant services?",
    answer:
      "Yes, Dr. Thumu Sai Kumar is a specialist in FUE and FUT hair transplant techniques. Consultations are available to discuss the best approach for your hair restoration needs.",
  },
];

/* ──────────────────────────────────────────────────────────────
   PAGE COMPONENT
   ────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden -mt-[74px] md:-mt-[84px]">
        <HeroSlider />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pt-[74px] md:pt-[84px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
            {/* Left — Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="section-tag w-fit">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M12 5.45H7.31L10.63 2.14 9.86 1.37 6.55 4.69V0H5.45V4.69L2.14 1.37 1.37 2.14 4.69 5.45H0V6.55H4.69L1.37 9.86 2.14 10.63 5.45 7.31V12H6.55V7.31L9.86 10.63 10.63 9.86 7.31 6.55H12V5.45Z" />
                </svg>
                Trusted Healthcare
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Advanced Dental Care
                <span className="block text-brand-teal mt-2">
                  for Your Entire Family
                </span>
              </h1>

              <p className="text-base md:text-lg text-white/70 max-w-lg leading-relaxed">
                We combine modern technology with compassionate service — from
                dental implants and cosmetic dentistry to trauma care and hair
                transplant, under the expert care of Dr. Thumu Sai Kumar &
                Dr. Thumu Bharathi.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Link
                  href="https://wa.me/919307512816"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal-hover text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Book Appointment
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+919307512816"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </motion.div>

            {/* Right — Callback Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:flex justify-end"
            >
              <CallbackForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STATS COUNTER
          ═══════════════════════════════════════════════════════ */}
      <StatsCounter />

      {/* ═══════════════════════════════════════════════════════
          ABOUT PREVIEW
          ═══════════════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Images */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-card">
                    <img
                      src="/assets/img/gen_our-story-image-1.jpg"
                      alt="Our clinic reception"
                      className="w-full h-48 md:h-56 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-card">
                    <img
                      src="/assets/img/gen_our-story-image-2.jpg"
                      alt="Modern dental equipment"
                      className="w-full h-36 md:h-44 object-cover"
                    />
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-card">
                    <img
                      src="/assets/img/gen_our-story-image-3.jpg"
                      alt="Patient consultation"
                      className="w-full h-36 md:h-44 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-card">
                    <img
                      src="/assets/img/gen_our-story-image-4.jpg"
                      alt="Dental treatment room"
                      className="w-full h-48 md:h-56 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-teal/10 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand-cream rounded-full -z-10" />
            </motion.div>

            {/* Right — Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              <div className="section-tag w-fit">Our Story</div>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Redefining Dental Care with Trust &{" "}
                <span className="text-brand-teal">Innovation</span>
              </h2>

              <p className="text-brand-gray leading-relaxed">
                For over 15 years, Tirumala Dental Clinic has been the trusted name
                for comprehensive dental care in Adilabad. Founded by
                Dr. Thumu Sai Kumar and Dr. Thumu Bharathi, our clinic combines
                advanced technology with a warm, patient-first approach.
              </p>

              <div className="grid grid-cols-2 gap-4 my-2">
                {[
                  "Advanced Technology",
                  "Gentle Care",
                  "Expert Surgeons",
                  "Affordable Pricing",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-brand-dark">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-brand-teal font-semibold text-sm hover:gap-3 transition-all duration-300 w-fit"
              >
                Learn more about us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVICES
          ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="section-tag mx-auto mb-4">Our Services</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Dental &{" "}
              <span className="text-brand-teal">Healthcare Solutions</span>
            </h2>
            <p className="text-brand-gray max-w-2xl mx-auto">
              From routine check-ups to advanced surgical procedures, we provide
              a full spectrum of dental and healthcare services.
            </p>
          </motion.div>

          {/* Desktop grid / Mobile horizontal scroll */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 snap-x snap-mandatory">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="flex-shrink-0 w-[280px] snap-start"
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          DOCTORS
          ═══════════════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="section-tag mx-auto mb-4">Meet the Doctors</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Expert Care from{" "}
              <span className="text-brand-teal">Trusted Specialists</span>
            </h2>
            <p className="text-brand-gray max-w-2xl mx-auto">
              Our doctors bring years of specialized training and a passion for
              patient-centered care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Dr. Sai Kumar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src="/assets/img/gen_team-image-2.jpg"
                  alt="Dr. Thumu Sai Kumar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-xl font-bold text-white">
                    Dr. Thumu Sai Kumar
                  </h3>
                  <p className="text-brand-teal-light text-sm font-medium">
                    MDS — Oral & Maxillofacial Surgeon
                  </p>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Implantologist",
                    "Trauma Specialist",
                    "Hair Transplant",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-brand-gray leading-relaxed">
                  With over 15 years of experience, Dr. Sai Kumar specializes in
                  complex dental implant surgeries, maxillofacial trauma care, and
                  advanced FUE/FUT hair transplant procedures.
                </p>
              </div>
            </motion.div>

            {/* Dr. Bharathi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src="/assets/img/gen_team-image-1.jpg"
                  alt="Dr. Thumu Bharathi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-xl font-bold text-white">
                    Dr. Thumu Bharathi
                  </h3>
                  <p className="text-brand-teal-light text-sm font-medium">
                    MDS — Conservative Dentistry & Endodontics
                  </p>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Endodontist",
                    "Smile Designer",
                    "Cosmetic Specialist",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-brand-gray leading-relaxed">
                  Dr. Bharathi is an expert in pain-free root canal treatments,
                  smile design makeovers, and conservative dental procedures that
                  preserve your natural teeth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          BEFORE/AFTER GALLERY
          ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="section-tag mx-auto mb-4">Success Stories</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transforming Smiles,{" "}
              <span className="text-brand-teal">Changing Lives</span>
            </h2>
            <p className="text-brand-gray max-w-2xl mx-auto">
              See the remarkable results our patients have achieved through our
              advanced treatments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "/assets/img/69e041cad257c10b1176cd81_success-item-image-1.webp",
                label: "Smile Makeover",
              },
              {
                img: "/assets/img/69e041cb0a159b45d163a9ea_success-item-image-2.webp",
                label: "Dental Implant",
              },
              {
                img: "/assets/img/gen_home-value-image.jpg",
                label: "Cosmetic Dentistry",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-card"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block bg-brand-teal text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TESTIMONIALS
          ═══════════════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="section-tag mx-auto mb-4">Patient Reviews</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our{" "}
              <span className="text-brand-teal">Patients Say</span>
            </h2>
            <p className="text-brand-gray max-w-2xl mx-auto">
              Hear from patients who have experienced our exceptional dental
              care firsthand.
            </p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FAQ
          ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="section-tag mx-auto mb-4">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="text-brand-teal">Questions</span>
            </h2>
            <p className="text-brand-gray max-w-2xl mx-auto">
              Find answers to common questions about our services, procedures,
              and clinic.
            </p>
          </motion.div>

          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CONTACT & MAP
          ═══════════════════════════════════════════════════════ */}
      <section id="appointment-section" className="section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="section-tag mx-auto mb-4">Contact Us</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visit Our{" "}
              <span className="text-brand-teal">Clinic Today</span>
            </h2>
            <p className="text-brand-gray max-w-2xl mx-auto">
              We&apos;re conveniently located in Adilabad, Telangana. Stop by or
              reach out — we&apos;re here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left — Contact Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              {/* Contact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">Phone</h4>
                    <a
                      href="tel:+919307512816"
                      className="text-sm text-brand-teal hover:underline"
                    >
                      +91 93075 12816
                    </a>
                  </div>
                </div>

                <div className="glass-card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">Email</h4>
                    <a
                      href="mailto:hello@tirumaladental.com"
                      className="text-sm text-brand-teal hover:underline"
                    >
                      hello@tirumaladental.com
                    </a>
                  </div>
                </div>

                <div className="glass-card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">Hours</h4>
                    <p className="text-sm text-brand-gray">
                      Mon-Fri: 8:00 - 17:00
                    </p>
                    <p className="text-sm text-brand-gray">
                      Sat-Sun: 9:30 - 17:30
                    </p>
                  </div>
                </div>

                <div className="glass-card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">
                      Location
                    </h4>
                    <p className="text-sm text-brand-gray">
                      Adilabad, Telangana 504001
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-card border border-brand-tint h-64 md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.4!2d78.5323493!3d19.6707076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd25dc51d1cde75%3A0xc35945db05d3ea2a!2sTirumala%20dental%2C%20implants%2CTrauma%2Chair%20transplant%20clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tirumala Dental Clinic Location"
                />
              </div>
            </motion.div>

            {/* Right — Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <CallbackForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA BANNER
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center flex flex-col items-center gap-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready for a Healthier Smile?
            </h2>
            <p className="text-white/60 max-w-lg">
              Book your appointment today and experience world-class dental care
              at Tirumala Dental Clinic, Adilabad.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="https://wa.me/919307512816"
                target="_blank"
                className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal-hover text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg"
              >
                Book via WhatsApp
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="tel:+919307512816"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full border border-white/20 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                Call +91 93075 12816
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
