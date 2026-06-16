import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        {/* Brand Block */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <Link href="/" className="inline-block">
            <img
              src="/assets/img/tirumala-logo-dark.svg"
              alt="Tirumala Dental Clinic Logo"
              className="logo_image"
            />
          </Link>
          <p className="text-white/60 text-sm max-w-sm leading-relaxed">
            Advanced technology, a caring team, and treatments designed to keep your smile healthy for life. Reassuring care for every generation in Adilabad.
          </p>
          <div className="flex gap-4 items-center">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook link"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-teal transition-colors text-white"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram link"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-teal transition-colors text-white"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter link"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-teal transition-colors text-white"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation columns */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider">
            Explore
          </h3>
          <ul className="flex flex-col gap-2.5 text-white/60 text-sm">
            <li>
              <Link href="/" className="hover:text-brand-teal transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-brand-teal transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className="hover:text-brand-teal transition-colors"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-brand-teal transition-colors"
              >
                Clinical Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact info column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider">
            Timings & Contacts
          </h3>
          <ul className="flex flex-col gap-2.5 text-white/60 text-sm">
            <li>
              <span className="block font-medium text-white/80">Phone:</span>
              <a
                href="tel:+919307512816"
                className="hover:text-brand-teal transition-colors"
              >
                +91 93075 12816
              </a>
            </li>
            <li>
              <span className="block font-medium text-white/80">Email:</span>
              <a
                href="mailto:hello@tirumaladental.com"
                className="hover:text-brand-teal transition-colors"
              >
                hello@tirumaladental.com
              </a>
            </li>
            <li>
              <span className="block font-medium text-white/80">Timings:</span>
              Mon - Fri: 8:00 - 17:00
              <br />
              Sat - Sun: 9:30 - 17:30
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 gap-4">
        <div>
          &copy; {currentYear} Tirumala Dental Clinic. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-brand-teal transition-colors">
            Privacy Policy
          </Link>
          <Link href="/cookies" className="hover:text-brand-teal transition-colors">
            Cookies
          </Link>
          <Link href="/terms" className="hover:text-brand-teal transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
