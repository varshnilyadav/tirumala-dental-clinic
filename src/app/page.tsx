"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CallbackForm from "@/components/CallbackForm";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  // Stats list matching reference site structure
  const stats = [
    {
      percentage: "92%",
      title: "Comfort & Care",
      desc: "Patients say they feel less anxious during visits with us",
    },
    {
      percentage: "3/4",
      title: "Trusted by Community",
      desc: "New patients come from word-of-mouth referrals in Adilabad",
    },
    {
      percentage: "7 Min",
      title: "Quick & Accessible",
      desc: "Just 7 minutes is the average wait time before being seen",
    },
    {
      percentage: "24/7",
      title: "Emergency Support",
      desc: "Sudden dental pain or facial trauma? Our team is ready 24/7.",
    },
    {
      percentage: "85%",
      title: "Healthy Habits",
      desc: "We help our patients maintain lifelong teeth and gum wellness",
    },
  ];

  // Primary services adapted with dental implants, trauma & hair transplant
  const services = [
    {
      num: "[ 01 ]",
      name: "Dental Implants",
      desc: "Restore missing teeth with premium dental implants. Advanced implantology techniques provide look, feel, and function identical to natural teeth.",
      tags: ["Single Tooth", "All-on-4 / All-on-6", "Implant Bridge", "Bone Grafting"],
      image: "/assets/img/gen_service-thumbnail-image.jpg",
    },
    {
      num: "[ 02 ]",
      name: "Root Canal Treatment",
      desc: "Save infected teeth painlessly. Our conservative endodontic treatments utilize modern rotary technology for comfortable, quick, and successful therapy.",
      tags: ["Laser RCT", "Single Sitting RCT", "Re-treatment", "Post & Core"],
      image: "/assets/img/gen_service-thumbnail-image-2.jpg",
    },
    {
      num: "[ 03 ]",
      name: "Trauma & Maxillofacial Care",
      desc: "Specialized care for facial bone fractures, dental trauma, and mouth injuries. Dr. Thumu Sai Kumar provides expert reconstructive jaw and dental surgery.",
      tags: ["Facial Fractures", "Jaw Re-alignment", "Dental Splinting", "Emergency Surgery"],
      image: "/assets/img/gen_service-thumbnail-image-3.jpg",
    },
    {
      num: "[ 04 ]",
      name: "Cosmetic & Hair Transplant",
      desc: "Transform your appearance with smile designing (veneers, cosmetic bonding) and state-of-the-art hair transplant treatments under clinical guidance.",
      tags: ["Smile Makeover", "Veneers", "FUE Hair Transplant", "PRP Therapy"],
      image: "/assets/img/gen_service-thumbnail-image-4.jpg",
    },
  ];

  // Doctors list with Dr. Thumu Sai Kumar and Dr. Thumu Bharathi
  const doctors = [
    {
      name: "Dr. Thumu Sai Kumar, MDS",
      title: "Oral & Maxillofacial Surgeon, Implantologist & Hair Transplant Specialist",
      desc: "Passionate about reconstructive facial surgery, dental implants, and aesthetics. Over a decade of surgical expertise resolving complex jaw trauma and dental implant cases.",
      image: "/assets/img/gen_team-image-1.jpg",
    },
    {
      name: "Dr. Thumu Bharathi, MDS",
      title: "Conservative Endodontist & Smile Designer",
      desc: "Expert in restorative dentistry, painless root canals, and cosmetic makeovers. Dedicated to preserving your natural teeth with microscopic precision and gentle care.",
      image: "/assets/img/gen_team-image-2.jpg",
    },
  ];

  // FAQ items
  const faqs = [
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend a routine dental checkup and cleanings every six months. Regular visits help us detect early signs of decay, gum disease, or other issues before they require complex treatment.",
    },
    {
      question: "Does Tirumala Dental Clinic offer emergency services in Adilabad?",
      answer: "Yes, we provide 24/7 emergency dental care for urgent issues like severe toothaches, facial fractures, dental trauma, broken crowns, or wisdom tooth infections. Contact us immediately.",
    },
    {
      question: "Are root canal treatments painful?",
      answer: "With modern anesthesia and advanced endodontic techniques, root canals are virtually painless. Most patients feel immediate relief from the toothache once the treatment begins.",
    },
    {
      question: "What are the benefits of dental implants over dentures?",
      answer: "Dental implants are permanent, stable, and look like natural teeth. They prevent bone loss in the jaw, allow you to speak and chew normally, and do not slip or click like removable dentures.",
    },
    {
      question: "Do you offer cosmetic smile design and hair transplants?",
      answer: "Yes, we specialize in comprehensive facial aesthetics, offering custom smile makeovers (dental veneers, teeth whitening) and advanced FUE Hair Transplant surgeries in our specialized clinical setup.",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "I was extremely nervous about my root canal, but Dr. Bharathi MDS made the procedure completely painless. She explained every step with care. Highly recommended!",
      author: "Michael Carter",
      title: "Local Business Owner, Adilabad",
      image: "/assets/img/gen_testimonial-author-1.jpg",
    },
    {
      quote: "Dr. Sai Kumar MDS treated my son after a dental injury during sports. The trauma care was exceptional, and his dental implant fits and feels perfectly natural.",
      author: "Kristin Watson",
      title: "Teacher, Adilabad",
      image: "/assets/img/gen_testimonial-author-2.jpg",
    },
    {
      quote: "Tirumala Dental Clinic is the most hygienic and advanced clinic in town. Their dental care and general checkups are outstanding. Truly values patient comfort.",
      author: "Daniel Hughes",
      title: "Resident, Telangana",
      image: "/assets/img/gen_testimonial-author-3.jpg",
    },
  ];

  // Blog posts
  const blogs = [
    {
      title: "Dental myths busted: what your teeth really need in 2026",
      desc: "Learn the truth behind common myths about brushing, whitening, and preventive checks that can save you from severe dental issues.",
      date: "June 14, 2026",
      image: "/assets/img/gen_blog-image-1.jpg",
    },
    {
      title: "The truth about flossing: why skipping it isn't an option",
      desc: "Flossing cleanings get into 35% of the tooth surfaces that brushing misses. Explore the health benefits of regular daily flossing.",
      date: "June 10, 2026",
      image: "/assets/img/gen_blog-image-2.jpg",
    },
    {
      title: "The ultimate guide to brushing: are you doing it right?",
      desc: "Our specialists break down proper brushing angles, time duration, and toothbrush selection to optimize your daily dental hygiene.",
      date: "May 28, 2026",
      image: "/assets/img/gen_blog-image-3.jpg",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="bg-brand-cream pt-16 pb-20 md:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero Content */}
          <div className="md:col-span-7 flex flex-col gap-6 text-brand-dark">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold leading-[1.1] text-balance"
            >
              Trusted Dental Care for Every Generation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-brand-gray text-base md:text-lg max-w-xl leading-relaxed"
            >
              We combine modern technology, surgical expertise, and heartfelt care to keep your smile healthy and beautiful. Experienced dental, implants, trauma, and hair transplant specialists in Adilabad.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <Link
                href="/#appointment-section"
                className="bg-brand-teal hover:bg-brand-teal-hover text-white font-semibold px-8 py-3.5 rounded-8xl transition-all shadow-md inline-flex items-center"
              >
                Book Appointment
              </Link>
              <Link
                href="/about"
                className="bg-white hover:bg-brand-cream text-brand-dark font-semibold px-8 py-3.5 rounded-8xl border border-brand-tint transition-all shadow-sm"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Callback Form container */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full"
            >
              <CallbackForm />
            </motion.div>
          </div>
        </div>

        {/* Decorative background shape */}
        <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-brand-tint/30 rounded-l-[100px] pointer-events-none -z-10" />
      </section>

      {/* 2. Info Cards bar */}
      <section className="bg-white py-12 border-b border-brand-tint">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-brand-dark">
          <div className="flex gap-4 p-6 rounded-2xl bg-brand-cream/35 border border-brand-tint/40">
            <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-brand-gray">Emergency Call</h4>
              <p className="text-lg font-bold text-brand-dark mt-1">+91 93075 12816</p>
              <p className="text-xs text-brand-gray mt-0.5">Available 24/7 for dental trauma & acute pain</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-2xl bg-brand-cream/35 border border-brand-tint/40">
            <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-brand-gray">Opening Hours</h4>
              <p className="text-sm font-semibold text-brand-dark mt-1">Mon - Fri: 8:00 - 17:00</p>
              <p className="text-sm font-semibold text-brand-dark">Sat - Sun: 9:30 - 17:30</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-2xl bg-brand-cream/35 border border-brand-tint/40">
            <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-brand-gray">Location</h4>
              <p className="text-sm font-semibold text-brand-dark mt-1 text-balance">
                Tirumala Dental Clinic, Adilabad, Telangana
              </p>
              <a
                href="https://www.google.com/maps/place/Tirumala+dental,+implants,Trauma,hair+transplant+clinic,+Dr.Thumu+Sai+kumar+MDS,+Dr.Thumu+Bharathi+MDS/@19.6707076,78.5323493,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-teal font-bold hover:underline inline-block mt-1"
              >
                Get Directions on Map &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Infographic Stats Slider */}
      <section className="bg-brand-cream/40 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col gap-2 p-4 rounded-xl bg-white border border-brand-tint shadow-xs"
              >
                <div className="text-2xl md:text-3xl font-bold text-brand-teal">
                  {stat.percentage}
                </div>
                <h4 className="font-bold text-xs text-brand-dark uppercase tracking-wider">
                  {stat.title}
                </h4>
                <p className="text-xs text-brand-gray leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Story Callout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-lg border border-brand-tint"
            >
              <img
                src="/assets/img/gen_about-hero-image.jpg"
                alt="Dr. Sai Kumar performing implants"
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
            </motion.div>
          </div>

          <div className="md:col-span-6 flex flex-col gap-6 text-brand-dark">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Redefining Dental Care with Trust, Innovation & Dental Wellness
            </h2>
            <p className="text-brand-gray text-sm md:text-base leading-relaxed">
              At Tirumala Dental Clinic, we believe dental treatment should be pain-free, transparent, and precise. Under the guidance of our lead specialists, we bring state-of-the-art diagnostic and surgical machinery to Adilabad.
            </p>
            <p className="text-brand-gray text-sm md:text-base leading-relaxed">
              From restoring complete function through dental implants to resolving jaw fractures, trauma care, and cosmetic dental restorations, we treat every patient like family.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-bold text-brand-teal hover:text-brand-teal-hover transition-colors group"
              >
                Read our full story
                <span className="ml-1.5 transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Comprehensive Services Grid */}
      <section className="py-20 bg-brand-cream/35 border-t border-b border-brand-tint">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
              Clinically Advanced Treatments
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Comprehensive Dental Care for Every Smile
            </h2>
            <p className="text-brand-gray text-sm leading-relaxed">
              We combine specialized MDS expertise, surgical accuracy, and modern dental diagnostics to create a safe, reassuring clinical environment.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-brand-tint shadow-xs hover:shadow-lg transition-shadow duration-300 grid grid-cols-1 sm:grid-cols-12"
              >
                {/* Image */}
                <div className="sm:col-span-5 relative h-48 sm:h-auto min-h-[180px]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                {/* Content */}
                <div className="sm:col-span-7 p-6 md:p-8 flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-bold text-brand-teal tracking-wide">
                      {service.num}
                    </span>
                    <h3 className="text-lg font-bold text-brand-dark">
                      {service.name}
                    </h3>
                    <p className="text-xs text-brand-gray leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-brand-cream/60 border border-brand-tint text-brand-dark text-[10px] px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/service"
              className="inline-flex items-center justify-center bg-brand-teal hover:bg-brand-teal-hover text-white font-semibold px-8 py-3.5 rounded-8xl transition-all shadow-md text-sm"
            >
              Explore All Dental Services
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-6 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
                Our Standards
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight text-balance">
                We Treat You Like Family, Because Your Smile Matters Most
              </h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-brand-gray text-sm md:text-base leading-relaxed">
                Tirumala Dental Clinic operates with a strict code of hygiene, sterilized clinical instrumentation, and patient transparency. We ensure complete safety for pediatric, adult, and geriatric patients alike.
              </p>
            </div>
          </div>

          {/* Pillars of care */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-brand-dark">
            <div className="p-6 rounded-2xl bg-brand-cream/20 border border-brand-tint flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-base">Compassionate Care</h3>
              <p className="text-xs text-brand-gray leading-relaxed">
                Going beyond treatment: our specialists emphasize comfort, calming anxious minds, and offering painless anesthesia methods.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream/20 border border-brand-tint flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-base">Advanced Tech</h3>
              <p className="text-xs text-brand-gray leading-relaxed">
                We utilize digital intraoral scanners, rotary endodontics, and modern surgical setups to guarantee faster healing times and precise clinical outcomes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cream/20 border border-brand-tint flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-base">Honesty &amp; Trust</h3>
              <p className="text-xs text-brand-gray leading-relaxed">
                Clear treatment pricing, transparent visual diagnosis explanations, and treatment outlines with zero hidden cost items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Meet the Doctors Section */}
      <section className="py-20 bg-brand-cream/35 border-t border-b border-brand-tint">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 text-brand-dark">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
              Board-Certified MDS Specialists
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Experts in Oral Health & Surgery
            </h2>
            <p className="text-brand-gray text-sm leading-relaxed">
              Dr. Thumu Sai Kumar and Dr. Thumu Bharathi combine clinical degrees (MDS) with years of dedicated practice to offer you the finest level of specialized healthcare in Adilabad.
            </p>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {doctors.map((doc, idx) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white border border-brand-tint rounded-2xl overflow-hidden shadow-xs flex flex-col group"
              >
                {/* Photo container */}
                <div className="relative overflow-hidden h-[300px] bg-brand-cream/40">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/0 to-transparent" />
                </div>
                {/* Details */}
                <div className="p-6 md:p-8 flex flex-col gap-4 text-brand-dark flex-grow justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-teal transition-colors">
                      {doc.name}
                    </h3>
                    <span className="text-xs font-bold text-brand-teal uppercase tracking-wide">
                      {doc.title}
                    </span>
                    <p className="text-xs text-brand-gray leading-relaxed mt-2">
                      {doc.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-brand-tint mt-auto flex items-center">
                    <span className="text-xs font-bold text-brand-dark">Specialty: MDS Degree Holder</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
              Patient Success
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Voices of Trust and Care
            </h2>
          </div>

          {/* Grid list of reviews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testi, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-brand-tint bg-brand-cream/10 flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-4">
                  {/* Star Rating */}
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <svg key={idx} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-brand-dark font-medium italic leading-relaxed">
                    &ldquo;{testi.quote}&rdquo;
                  </p>
                </div>
                {/* Author Block */}
                <div className="flex items-center gap-3 border-t border-brand-tint/60 pt-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <img src={testi.image} alt={testi.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-brand-dark">{testi.author}</h4>
                    <span className="text-[10px] text-brand-gray">{testi.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Clinical Blog Section */}
      <section className="py-20 bg-brand-cream/35 border-t border-b border-brand-tint">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-brand-dark">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
                Patient Resources
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Stories &amp; Tips from Our Specialists
              </h2>
            </div>
            <div>
              <Link
                href="/blog"
                className="bg-white hover:bg-brand-cream text-brand-dark font-semibold px-6 py-3 rounded-8xl border border-brand-tint transition-all shadow-xs text-sm"
              >
                See All Articles
              </Link>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-brand-tint shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative bg-brand-cream/30">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                {/* Body */}
                <div className="p-6 flex flex-col justify-between flex-grow gap-4 text-brand-dark">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] text-brand-teal font-semibold uppercase">
                      {blog.date}
                    </span>
                    <h3 className="text-base font-bold text-brand-dark leading-snug group-hover:text-brand-teal transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-brand-gray leading-relaxed">
                      {blog.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-brand-tint/60 mt-auto">
                    <Link
                      href="/blog"
                      className="text-xs font-bold text-brand-teal hover:underline inline-flex items-center"
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ Accordions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Questions We Get Often
            </h2>
            <p className="text-brand-gray text-sm">
              Quick answers about clinical procedures, recovery timings, and emergencies.
            </p>
          </div>

          {/* Accordion list */}
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 11. Appointment Section (Map, NAP & Form) */}
      <section id="appointment-section" className="py-20 bg-brand-cream/30 border-t border-brand-tint">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Map and Contacts */}
          <div className="md:col-span-6 flex flex-col gap-6 text-brand-dark justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
              Schedule Your Visit
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Let&rsquo;s Talk Teeth, We&rsquo;re Just a Smile Away
            </h2>
            <p className="text-brand-gray text-sm md:text-base leading-relaxed">
              Your health journey starts with one simple step. Reach out to book a dedicated slot for dental implants, tooth restoration, trauma consultation, or cosmetic smile designs.
            </p>

            <div className="flex flex-col gap-3.5 text-sm pt-4 border-t border-brand-tint">
              <div className="flex items-start gap-3">
                <span className="font-bold text-brand-dark">NAP Address:</span>
                <span className="text-brand-gray leading-normal text-balance">
                  Tirumala Dental, Implants, Trauma, Hair Transplant Clinic, Adilabad, Telangana 504001, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-brand-dark">Call Support:</span>
                <a href="tel:+919307512816" className="text-brand-teal hover:underline font-semibold">
                  +91 93075 12816
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-brand-dark">Support Email:</span>
                <a href="mailto:hello@tirumaladental.com" className="text-brand-teal hover:underline">
                  hello@tirumaladental.com
                </a>
              </div>
            </div>

            {/* Google Map Iframe Container */}
            <div className="w-full h-72 rounded-2xl overflow-hidden border border-brand-tint shadow-xs mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.180907147774!2d78.5301606148967!3d19.670707686749368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd25dc51d1cde75%3A0xc35945db05d3ea2a!2sTirumala+dental%2C+implants%2CTrauma%2Chair+transplant+clinic!5e0!3m2!1sen!2sin!4v1718532349300!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tirumala Dental Clinic Google Maps Location"
              />
            </div>
          </div>

          {/* Quick inline scheduler form */}
          <div className="md:col-span-6 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-lg bg-white border border-brand-tint p-8 rounded-2xl shadow-xl flex flex-col gap-6"
            >
              <div className="flex flex-col gap-1.5">
                <h3 className="text-2xl font-bold text-brand-dark">Schedule Call</h3>
                <p className="text-sm text-brand-gray">
                  Enter your details to get connected with a dental advisor.
                </p>
              </div>

              {/* Duplicate the callback form element inside a rich inline context */}
              <CallbackForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
