"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/img/gen_about-hero-image.jpg"
            alt="Tirumala Dental Clinic"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 to-brand-dark" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-28 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="section-tag w-fit mb-6">About Us</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Trusted Dental Experts,{" "}
              <span className="text-brand-teal">Decades of Care</span>
            </h1>
            <p className="text-lg text-white/60 max-w-xl mb-8">
              At Tirumala, we combine compassion, innovation, and expertise to
              provide care you can trust. Your smile is our mission.
            </p>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-white/50">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-sm text-white/50">Smiles Transformed</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.8★</div>
                <div className="text-sm text-white/50">Google Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: "/assets/img/gen_story-image-1.jpg", h: "h-48 md:h-56" },
                  { src: "/assets/img/gen_story-image-2.jpg", h: "h-40 md:h-48" },
                  { src: "/assets/img/gen_story-image-3.jpg", h: "h-40 md:h-48" },
                  { src: "/assets/img/gen_story-image-4.jpg", h: "h-48 md:h-56" },
                ].map((img, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl overflow-hidden shadow-card ${i % 2 === 1 ? "mt-8" : ""}`}
                  >
                    <img
                      src={img.src}
                      alt="Clinic story"
                      className={`w-full ${img.h} object-cover`}
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              <div className="section-tag w-fit">Our Story</div>
              <h2 className="text-3xl md:text-4xl font-bold">
                A Journey Built on{" "}
                <span className="text-brand-teal">Compassion & Innovation</span>
              </h2>
              <p className="text-brand-gray leading-relaxed">
                For more than 15 years, Tirumala Dental Clinic has been dedicated
                to improving lives through healthier smiles. From our humble
                beginnings to becoming a trusted name in dental care in Adilabad,
                our journey is driven by a passion for excellence.
              </p>
              <p className="text-brand-gray leading-relaxed">
                Founded by Dr. Thumu Sai Kumar and Dr. Thumu Bharathi, the clinic
                combines world-class surgical expertise with compassionate patient
                care. Every treatment is personalized, every patient is family.
              </p>
              <Link
                href="/#appointment-section"
                className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal-hover text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 w-fit"
              >
                Book Appointment
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="section-padding bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="section-tag mx-auto mb-4">Our Doctors</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Superheroes Behind the{" "}
              <span className="text-brand-teal">Dental Care</span>
            </h2>
            <p className="text-brand-gray max-w-2xl mx-auto">
              Each member of our clinical staff is highly qualified and deeply
              passionate about helping patients achieve healthier, more confident
              smiles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Dr. Thumu Sai Kumar",
                title: "MDS — Oral & Maxillofacial Surgeon",
                img: "/assets/img/gen_team-image-2.jpg",
                tags: ["Implantologist", "Trauma Specialist", "Hair Transplant"],
                bio: "With over 15 years of experience in oral and maxillofacial surgery, Dr. Sai Kumar is recognized for his expertise in complex dental implant surgeries, maxillofacial trauma care, and advanced FUE/FUT hair transplant procedures. He is passionate about restoring both function and aesthetics through minimally invasive techniques.",
              },
              {
                name: "Dr. Thumu Bharathi",
                title: "MDS — Conservative Dentistry & Endodontics",
                img: "/assets/img/gen_team-image-1.jpg",
                tags: ["Endodontist", "Smile Designer", "Cosmetic Specialist"],
                bio: "Dr. Bharathi specializes in pain-free root canal treatments, smile design makeovers, and conservative dental procedures that prioritize preserving natural teeth. Her gentle approach and attention to detail have earned the trust of thousands of patients across Adilabad.",
              },
            ].map((doc, i) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-card overflow-hidden"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl font-bold text-white">{doc.name}</h3>
                    <p className="text-brand-teal-light text-sm font-medium">
                      {doc.title}
                    </p>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {doc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-brand-gray leading-relaxed">
                    {doc.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="section-tag mx-auto mb-4">Our Values</div>
            <h2 className="text-3xl md:text-4xl font-bold">
              What Drives Us <span className="text-brand-teal">Every Day</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Patient-First Care",
                desc: "Every decision we make revolves around what's best for our patients. Your comfort, safety, and satisfaction are our top priorities.",
                icon: "❤️",
              },
              {
                title: "Clinical Excellence",
                desc: "We invest in the latest technology and ongoing education to deliver world-class dental treatments right here in Adilabad.",
                icon: "🏆",
              },
              {
                title: "Community Trust",
                desc: "Built over 15 years of consistent, transparent, and honest care, our reputation is our most valued asset.",
                icon: "🤝",
              },
            ].map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 text-center flex flex-col items-center gap-4"
              >
                <div className="text-4xl">{val.icon}</div>
                <h3 className="text-lg font-bold text-brand-dark">
                  {val.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed">
                  {val.desc}
                </p>
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
              Ready to Experience the Difference?
            </h2>
            <p className="text-white/60 max-w-lg">
              Book your appointment today and join thousands of patients who
              trust Tirumala Dental Clinic for their dental health.
            </p>
            <Link
              href="https://wa.me/919307512816"
              target="_blank"
              className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal-hover text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg"
            >
              Book Appointment
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
