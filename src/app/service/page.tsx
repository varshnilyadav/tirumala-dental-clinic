"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

interface ServiceItem {
  name: string;
  description: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  items: ServiceItem[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "consultation",
    name: "Dental Services & Consultation",
    description: "Essential diagnostic, preventative, and general dental services to maintain optimal oral health.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    items: [
      { name: "General Consultation", description: "Comprehensive oral examination, diagnostic review, and custom treatment planning." },
      { name: "Specialist Consultation", description: "Specialized evaluations by our MDS experts for complex dental and surgical cases." },
      { name: "Digital X-Ray / RVG", description: "High-resolution, ultra-low radiation digital radiographs for immediate and precise diagnosis." },
      { name: "Simple Extraction", description: "Safe, comfortable, and pain-free removal of non-restorable or severely damaged teeth." },
      { name: "Wisdom Tooth Disimpaction", description: "Surgical extraction of impacted or painful wisdom teeth to prevent infection and crowding." },
      { name: "Operculectomy", description: "Minor surgical removal of the gum tissue flap overlying a partially erupted tooth." },
      { name: "Crown Lengthening", description: "Reshaping gum tissue and bone to expose more tooth structure for proper restoration." },
      { name: "Oral Prophylaxis (Cleaning)", description: "Professional scaling and polishing to remove plaque, tartar, and external tooth stains." },
      { name: "Subgingival Scaling", description: "Deep cleaning below the gumline to target built-up plaque and tartar in gum pockets." },
      { name: "Subgingival Curettage", description: "Gently scraping and cleaning the diseased soft tissue lining of inflamed gum pockets." },
      { name: "Open Flap Surgery", description: "Advanced periodontal surgery to access deep tooth roots, clean bone defects, and treat gum disease." },
      { name: "Laser Flap Surgery", description: "State-of-the-art minimally invasive gum therapy utilizing medical lasers for accelerated healing." },
    ],
  },
  {
    id: "restorative",
    name: "Restorative Treatments",
    description: "Procedures designed to restore the function, integrity, and aesthetics of damaged or decaying teeth.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    items: [
      { name: "Miracle Mix Filling", description: "Metal-reinforced glass ionomer filling providing outstanding durability for back teeth." },
      { name: "Glass Ionomer Cement (GIC) Filling", description: "Fluoride-releasing, tooth-colored cement filling that helps prevent future decay." },
      { name: "Composite Filling", description: "Premium, tooth-colored resin filler that is chemically bonded to the tooth for a seamless finish." },
      { name: "Root Canal Treatment (RCT)", description: "Pain-free endodontic therapy to remove infected pulp, clean the canal, and save the natural tooth." },
      { name: "Post & Core", description: "Reconstruction of severely broken-down teeth using a reinforcing post inside the root canal." },
      { name: "Apicoectomy", description: "Surgical removal of the tooth's root tip to treat persistent or recurrent root canal infections." },
      { name: "Teeth Bleaching", description: "Professional cosmetic whitening treatment to safely lift stains and brighten your smile." },
    ],
  },
  {
    id: "crowns",
    name: "Crowns & Bridges",
    description: "Custom-made dental prosthetics to protect damaged teeth or replace missing ones permanently.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747C20.83 13.064 20.217 12 18.732 12h-1.342c-.544 0-1.028-.362-1.185-.884L15.3 8.183c-.156-.522-.64-.884-1.185-.884h-2.23c-.544 0-1.028.362-1.185.884L9.796 11.116c-.156.522-.64.884-1.185.884H7.268c-1.486 0-2.098 1.064-1.984 2.253A9.004 9.004 0 0 0 12 21Z" />
      </svg>
    ),
    items: [
      { name: "Metal / Stainless Steel Crown", description: "Standard, exceptionally strong crowns ideal for rear teeth where durability is the priority." },
      { name: "Metal Ceramic Crown (PFM)", description: "Porcelain-fused-to-metal crown offering a balance of inner metal strength and outer natural tooth color." },
      { name: "Zirconia Crown", description: "Premium metal-free ceramic crown providing unmatched aesthetic translucency and superior durability." },
      { name: "RPD (Removable Partial Denture) Per Tooth", description: "Custom-made removable partial appliance to replace one or a few missing teeth." },
    ],
  },
  {
    id: "implants",
    name: "Dentures & Implants",
    description: "Advanced surgical and prosthetic options to replace missing teeth and restore complete oral functionality.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    items: [
      { name: "Complete Denture (Standard)", description: "Custom full-arch acrylic dentures to restore chewing ability and facial aesthetics." },
      { name: "Complete Denture (Imported)", description: "Premium full-arch dentures made from high-grade imported materials for superior fit and comfort." },
      { name: "Single Implant", description: "Permanent, bio-compatible titanium post topped with a custom crown to replace a single missing tooth." },
      { name: "Implant Supported Complete Denture", description: "Full-arch denture anchored securely onto multiple dental implants for maximum stability and support." },
    ],
  },
  {
    id: "orthodontics",
    name: "Orthodontics (Braces & Aligners)",
    description: "Aligning and straightening teeth to correct malocclusions, improve chewing, and boost confidence.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
      </svg>
    ),
    items: [
      { name: "Metal Braces", description: "Traditional, highly reliable stainless steel brackets and archwires to resolve complex alignment cases." },
      { name: "Ceramic Braces", description: "Clear or tooth-colored ceramic brackets that provide a much more discreet, aesthetic look." },
      { name: "Self-Ligating Braces", description: "Advanced braces that use specialized clips to hold the wire, reducing friction and treatment time." },
      { name: "Clear Aligners", description: "Custom-designed, virtually invisible removable plastic trays that straighten teeth without wires or brackets." },
    ],
  },
  {
    id: "retainers",
    name: "Retainers & Appliances",
    description: "Custom dental devices to preserve tooth positions post-treatment or protect teeth from grinding.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.302m0 0L9 19.5m3.016-4.5V21m3.166-4.682L15 19.5m-6.5-12 1.5 1.5m5-1.5-1.5 1.5M4 12h16M3.75 9H20.25" />
      </svg>
    ),
    items: [
      { name: "Hawley Retainer", description: "Durable, classic removable retainer constructed from acrylic and metal wires." },
      { name: "Clear Retainer", description: "Transparent, thin plastic retainer that fits snugly over teeth for an invisible hold." },
      { name: "Removable Orthodontic Appliance", description: "Custom active plate used to make minor tooth movements or expand the dental arch." },
      { name: "Orthopedic Appliance", description: "Growth modification appliances designed to correct skeletal jaw growth discrepancies in children." },
      { name: "Permanent / Bonded Retainer", description: "A thin wire permanently bonded to the back of the front teeth to prevent long-term relapse." },
      { name: "Night Guard", description: "Custom-fit protective guard worn during sleep to prevent damage from teeth grinding (bruxism)." },
    ],
  },
  {
    id: "surgery",
    name: "Oral & Maxillofacial Surgery",
    description: "Surgical management of facial trauma, jaw fractures, joint disorders, and complex oral conditions.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
    items: [
      { name: "Open Reduction & Internal Fixation", description: "Surgical repositioning and rigid stabilization of fractured jawbones following facial trauma." },
      { name: "Intermaxillary Fixation (IMF)", description: "Temporary wiring of the upper and lower jaws together to treat and stabilize jaw fractures." },
      { name: "TMJ Splint / Appliance", description: "Specialized oral appliances designed to treat jaw joint disorders (TMD) and ease facial muscle pain." },
    ],
  },
];

const faqItems = [
  { question: "How often should I visit the dentist?", answer: "We recommend visiting every 6 months for routine checkups and cleanings to maintain optimal oral health and catch any issues early." },
  { question: "Are dental implants safe?", answer: "Yes, dental implants are one of the safest and most predictable dental procedures with a success rate of over 95%. Dr. Sai Kumar uses advanced techniques for minimal discomfort." },
  { question: "How long does a root canal take?", answer: "Most root canal treatments are completed in 1-2 visits, each lasting 60-90 minutes. With modern techniques, the procedure is virtually painless." },
  { question: "Do you accept insurance?", answer: "We work with most major dental insurance providers. Please call our clinic to verify your specific coverage and benefits." },
];

export default function ServicePage() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);

  const currentCategory = serviceCategories.find((cat) => cat.id === activeCategory) || serviceCategories[0];

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
              Explore our full suite of general, restorative, cosmetic, and surgical treatments. Select a category below to view our full service details.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Explorer */}
      <section className="section-padding pt-12 md:pt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1 flex flex-col gap-2 overflow-x-auto lg:overflow-x-visible scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0 flex-row lg:flex-col pb-4 lg:pb-0 border-b lg:border-b-0 border-brand-tint lg:sticky lg:top-28">
              {serviceCategories.map((category) => {
                const isActive = category.id === activeCategory;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap text-left w-full ${
                      isActive
                        ? "bg-brand-teal text-white shadow-md shadow-brand-teal/15 translate-x-1"
                        : "hover:bg-brand-cream text-brand-dark hover:text-brand-teal"
                    }`}
                  >
                    <span className={`flex-shrink-0 ${isActive ? "text-white" : "text-brand-teal"}`}>
                      {category.icon}
                    </span>
                    <span className="truncate">{category.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Services Grid */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col gap-8"
                >
                  {/* Category Header */}
                  <div className="border-b border-brand-tint pb-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-brand-dark">
                      {currentCategory.name}
                    </h2>
                    <p className="text-brand-gray text-base leading-relaxed">
                      {currentCategory.description}
                    </p>
                  </div>

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentCategory.items.map((item) => (
                      <div
                        key={item.name}
                        className="glass-card p-6 flex flex-col gap-4 justify-between border border-brand-tint hover:border-brand-teal/30 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex flex-col gap-2">
                          <h3 className="text-lg font-bold text-brand-dark">
                            {item.name}
                          </h3>
                          <p className="text-sm text-brand-gray leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <Link
                          href={`https://wa.me/919307512816?text=Hi,%20I'm%20interested%20in%20learning%20more%20about%20${encodeURIComponent(
                            item.name
                          )}%20at%20Tirumala%20Dental%20Clinic.`}
                          target="_blank"
                          className="inline-flex items-center gap-1.5 text-brand-teal font-semibold text-xs hover:gap-2.5 transition-all duration-300 w-fit mt-2"
                        >
                          Book / Inquire
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-brand-surface border-t border-brand-tint">
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
              Contact us to discuss your dental needs and get personalized treatment recommendations from our specialists.
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
