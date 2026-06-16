"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FAQAccordion from "@/components/FAQAccordion";

export default function ServicesPage() {
  const serviceList = [
    {
      num: "[ 01 ]",
      title: "Preventive Dentistry",
      desc: "Regular checks and early intervention protect your gums and teeth from serious infection. We help you stay ahead of complex dental issues.",
      items: ["Routine Oral Checkups", "Deep Scaling & Cleanings", "Gum Disease Screening", "Fluoride Treatment"],
      image: "/assets/img/gen_service-thumbnail-image.jpg",
    },
    {
      num: "[ 02 ]",
      title: "Cosmetic Dentistry & Smile Design",
      desc: "Get a radiant, symmetrical smile that raises your confidence. We combine medical engineering with aesthetic principles.",
      items: ["Porcelain Veneers", "Composite Veneers", "Teeth Whitening Treatments", "Cosmetic Gum Recontouring"],
      image: "/assets/img/gen_service-thumbnail-image-2.jpg",
    },
    {
      num: "[ 03 ]",
      title: "Restorative Treatments",
      desc: "Reconstruct decayed, broken, or lost teeth. Modern fillings and durable prosthetics restore chewing efficiency and structural alignment.",
      items: ["Painless Dental Fillings", "Zirconia Crowns & Bridges", "Inlays & Onlays", "Full Mouth Reconstruction"],
      image: "/assets/img/gen_service-thumbnail-image-3.jpg",
    },
    {
      num: "[ 04 ]",
      title: "Advanced Orthodontics",
      desc: "Align crooked teeth, correct spacing, and resolve bite problems. We use state-of-the-art brackets and clear, removable aligners.",
      items: ["Metal & Ceramic Braces", "Clear Invisible Aligners", "Interceptive Orthodontics", "Retainers & Bite Plates"],
      image: "/assets/img/gen_service-thumbnail-image-4.jpg",
    },
    {
      num: "[ 05 ]",
      title: "Dental Implants & Jaw Reconstruction",
      desc: "Restore single or multiple missing teeth with permanent osseointegrated dental implants under safe surgical guidelines.",
      items: ["Single Tooth Implants", "All-on-4 / All-on-6 Implants", "Implant-Supported Overdentures", "Sinus Lifts & Bone Grafts"],
      image: "/assets/img/69e1254bc12dfcfe31c2c09e_location-image-1.webp",
    },
    {
      num: "[ 06 ]",
      title: "Facial Trauma & Hair Transplant",
      desc: "Clinical management of jaw fractures, cuts, knocked-out teeth, and hair restoration surgeries using modern FUE extraction.",
      items: ["Jaw Fracture Fixation", "Laceration Repair", "Knocked-Out Tooth Reimplantation", "FUE Hair Transplant & PRP"],
      image: "/assets/img/69e1254b5bfb8519af35c271_location-image-2.webp",
    },
  ];

  const faqs = [
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend a routine dental checkup every six months to maintain optimal oral health and catch any issues early.",
    },
    {
      question: "Yes, we provide emergency dental care for urgent issues like pain, injury, or infections with prompt attention.",
      answer: "Yes, we prioritize emergency dental issues. If you experience severe toothaches, continuous bleeding, or jaw trauma, you can call us or walk in during working hours.",
    },
    {
      question: "Most treatments are comfortable with modern techniques and anesthesia, ensuring minimal pain.",
      answer: "With advanced pain management, micro-surgery equipment, and local numbing agents, most procedures (including root canals and extractions) are highly comfortable.",
    },
    {
      question: "Do you offer consultations for trauma injuries and jaw surgery?",
      answer: "Yes, Dr. Thumu Sai Kumar, MDS (Oral & Maxillofacial Surgeon) specializes in trauma care, surgical jaw alignments, orthognathic correction, and advanced implantology.",
    },
  ];

  return (
    <div className="flex flex-col w-full text-brand-dark">
      {/* Page Hero */}
      <section className="bg-brand-cream py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
            Our Specialties
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Comprehensive Dental Care, Tailored to You
          </h1>
          <p className="text-brand-gray text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From preventive scaling to advanced jaw reconstruction and hair transplant treatments, we provide specialized solutions under one hygienic roof.
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-brand-tint rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative bg-brand-cream/30">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-dark/80 text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/10">
                    {service.num}
                  </div>
                </div>
                {/* Body */}
                <div className="p-6 flex flex-col justify-between flex-grow gap-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-lg text-brand-dark leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-brand-gray leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 pt-4 border-t border-brand-tint">
                    <span className="text-[10px] font-bold text-brand-gray uppercase tracking-wider">
                      Included Procedures:
                    </span>
                    <ul className="grid grid-cols-2 gap-1.5 text-[11px] text-brand-dark font-medium">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-brand-teal shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-8 border-t border-brand-tint">
            <h3 className="text-xl font-bold mb-2">Need a Custom Consultation?</h3>
            <p className="text-brand-gray text-sm mb-6 max-w-md mx-auto">
              Schedule a visit with Dr. Thumu Sai Kumar or Dr. Thumu Bharathi to outline a personalized treatment timeline.
            </p>
            <Link
              href="/#appointment-section"
              className="bg-brand-teal hover:bg-brand-teal-hover text-white font-semibold px-8 py-3.5 rounded-8xl transition-all shadow-md inline-block text-sm"
            >
              Book Consultation Now
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-brand-cream/35 border-t border-brand-tint">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12">
          <div className="text-center max-w-xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Frequently Asked Questions
            </h2>
            <p className="text-brand-gray text-sm">
              Common answers regarding services, clinic insurance approvals, and pricing.
            </p>
          </div>

          <FAQAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
