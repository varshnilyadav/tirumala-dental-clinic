"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Blog", href: "/blog" },
  ];

  const dropdownLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Blog", href: "/blog" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookies Policy", href: "/cookies" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <>
      <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-4 border-b border-brand-tint shadow-sm"
          : "bg-brand-cream/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/assets/img/tirumala-logo.svg"
            alt="Tirumala Dental Clinic Logo"
            className="logo_image"
          />
        </Link>

        {/* Desktop Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-teal relative ${
                  isActive ? "text-brand-teal font-semibold" : "text-brand-dark"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-teal"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          {/* Pages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-brand-dark hover:text-brand-teal transition-colors"
            >
              Pages
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 11.5L14 7.5L15 8.5L10 13.5L5 8.5L6 7.5L10 11.5Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 mt-2 w-48 bg-white border border-brand-tint rounded-xl shadow-lg py-2 z-50"
                >
                  {dropdownLinks.map((subLink) => (
                    <Link
                      key={subLink.name}
                      href={subLink.href}
                      className="block px-4 py-2 text-sm text-brand-dark hover:bg-brand-cream hover:text-brand-teal transition-colors"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Desktop Right CTA button */}
        <div className="hidden md:block">
          <Link
            href="/#appointment-section"
            className="inline-flex items-center justify-center bg-brand-teal hover:bg-brand-teal-hover text-white text-sm font-semibold px-6 py-2.5 rounded-8xl transition-all duration-300 shadow-sm"
          >
            <span>Get Appointment</span>
            <svg
              className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.7 1h5.8v5.8M1 11l9.3-9.8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-dark hover:text-brand-teal focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-current rounded-full transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current rounded-full transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current rounded-full transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>
    </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-brand-dark md:hidden z-40"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6 pt-24 z-40 md:hidden flex flex-col gap-6"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-brand-dark hover:text-brand-teal py-2 border-b border-brand-tint transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-4">
                <span className="text-xs font-semibold text-brand-gray uppercase tracking-wider">
                  Clinic Legal Pages
                </span>
                <Link
                  href="/privacy"
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-brand-dark hover:text-brand-teal py-1"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/cookies"
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-brand-dark hover:text-brand-teal py-1"
                >
                  Cookies Policy
                </Link>
                <Link
                  href="/terms"
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-brand-dark hover:text-brand-teal py-1"
                >
                  Terms & Conditions
                </Link>
              </div>

              <div className="mt-auto pb-8">
                <Link
                  href="/#appointment-section"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center bg-brand-teal hover:bg-brand-teal-hover text-white font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  <span>Book Appointment</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
