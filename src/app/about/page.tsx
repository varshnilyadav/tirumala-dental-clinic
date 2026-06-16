"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  const milestones = [
    { value: "15+ Years", label: "Dental & Implant Surgery" },
    { value: "10k+", label: "Smiles Transformed" },
    { value: "50k+", label: "Successful Visits" },
    { value: "4.9★", label: "Google Business Rating" },
  ];

  const specialists = [
    {
      name: "Dr. Thumu Sai Kumar, MDS",
      role: "Oral & Maxillofacial Surgeon",
      desc: "Specializes in complex facial trauma surgeries, orthognathic correction, jaw alignments, and modern dental implants.",
      image: "/assets/img/gen_team-image-1.jpg",
    },
    {
      name: "Dr. Thumu Bharathi, MDS",
      role: "Conservative Endodontist & Smile Designer",
      desc: "Specializes in dental crown placements, painless root canal therapies, aesthetic veneers, and restorative dentistry.",
      image: "/assets/img/gen_team-image-2.jpg",
    },
    {
      name: "Dr. Rishi, MDS",
      role: "Pediatric Dentist",
      desc: "Caring child-focused dentist specializing in early intervention and friendly, stress-free pediatric treatments.",
      image: "/assets/img/gen_team-image-3.jpg",
    },
    {
      name: "Dr. Emman Collins, MDS",
      role: "Orthodontist",
      desc: "Corrects misalignments using clear aligners and modern braces, restoring proper function and aesthetic symmetry.",
      image: "/assets/img/gen_team-image-4.jpg",
    },
  ];

  const awards = [
    { year: "2023", title: "Best Dental Clinic Award", organization: "State Dental Association" },
    { year: "2024", title: "Excellence in Patient Care", organization: "Healthcare Excellence Forum" },
    { year: "2025", title: "Top Implantology Center", organization: "National Dental Council" },
  ];

  return (
    <div className="flex flex-col w-full text-brand-dark">
      {/* Page Hero */}
      <section className="bg-brand-cream py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Trusted Dental Experts, Decades of Care
          </h1>
          <p className="text-brand-gray text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            At Tirumala Dental Clinic, we combine compassion, clinical innovation, and MDS expertise to provide dental, implants, trauma, and hair transplant care you can count on.
          </p>
        </div>
      </section>

      {/* Stats Block */}
      <section className="bg-white py-12 border-b border-brand-tint">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {milestones.map((item, idx) => (
            <div key={idx} className="text-center flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-bold text-brand-teal">
                {item.value}
              </span>
              <span className="text-xs font-semibold text-brand-gray uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Built on Compassion, Reconstructed with Precision
            </h2>
            <p className="text-brand-gray text-sm md:text-base leading-relaxed">
              Tirumala Dental Clinic was founded in Adilabad with the vision of bridging the gap between advanced facial trauma surgery and local family dentistry. Over the years, we have grown into a multi-specialty center specializing in Dental Implants, Maxillofacial Trauma, and Hair Transplant surgeries.
            </p>
            <p className="text-brand-gray text-sm md:text-base leading-relaxed">
              We leverage modern digital scanning, rotary file systems, and automated autoclaves to ensure that your treatment is completed under extreme hygiene standards with optimal clinical results.
            </p>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-4">
            <img
              src="/assets/img/gen_story-image-1.jpg"
              alt="Clinic office"
              className="rounded-2xl h-44 w-full object-cover border border-brand-tint"
            />
            <img
              src="/assets/img/gen_story-image-2.jpg"
              alt="Dental machinery"
              className="rounded-2xl h-44 w-full object-cover border border-brand-tint"
            />
            <img
              src="/assets/img/gen_story-image-3.jpg"
              alt="Specialist consulting"
              className="rounded-2xl h-44 w-full object-cover border border-brand-tint col-span-2"
            />
          </div>
        </div>
      </section>

      {/* Meet the Specialists */}
      <section className="py-20 bg-brand-cream/35 border-t border-b border-brand-tint">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
              Our Doctors &amp; Surgeons
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Superheroes Behind Your Healthy Smile
            </h2>
            <p className="text-brand-gray text-sm">
              Each member of our clinical team is board-certified (MDS) and deeply passionate about delivering pain-free, specialized dental solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialists.map((spec, i) => (
              <motion.div
                key={spec.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white border border-brand-tint rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="h-56 bg-brand-cream/40 overflow-hidden relative">
                  <img
                    src={spec.image}
                    alt={spec.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-grow justify-between">
                  <div>
                    <h3 className="font-bold text-base text-brand-dark">{spec.name}</h3>
                    <span className="text-[11px] font-bold text-brand-teal uppercase tracking-wide">
                      {spec.role}
                    </span>
                    <p className="text-[11px] text-brand-gray leading-relaxed mt-2">
                      {spec.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-brand-tint mt-4 text-[10px] font-semibold text-brand-dark/50">
                    MDS Specialization
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
              Honors
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Honored for Excellence in Patient Care
            </h2>
            <p className="text-brand-gray text-sm leading-relaxed">
              Our clinical safety guidelines, patient comfort metrics, and surgical success ratios have earned recognition from state committees. We continuously strive to maintain high-quality healthcare standards in Adilabad.
            </p>
          </div>

          <div className="md:col-span-7 flex flex-col gap-4">
            {awards.map((award, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-5 rounded-xl border border-brand-tint bg-brand-cream/10"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal font-bold shrink-0 text-sm">
                  {award.year}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-brand-dark">{award.title}</h4>
                  <p className="text-xs text-brand-gray">{award.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
