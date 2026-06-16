import Link from "next/link";

export default function CookiesPage() {
  return (
    <div className="flex flex-col w-full text-brand-dark bg-white">
      {/* Header */}
      <section className="bg-brand-cream py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold">Cookies Policy</h1>
          <p className="text-brand-gray text-xs mt-2">
            Last Updated: June 16, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-3xl mx-auto px-6 text-brand-dark leading-relaxed flex flex-col gap-6 text-sm">
        <p>
          Tirumala Dental Clinic uses small text files called cookies on our website to ensure smooth rendering, load resources faster, and collect anonymous site visit statistics.
        </p>

        <h2 className="text-lg font-bold mt-4">1. What are Cookies?</h2>
        <p>
          Cookies are text tokens sent by a website server and stored in your web browser directory. They help us remember your layout preferences, such as language settings or form autocomplete details, to simplify navigation.
        </p>

        <h2 className="text-lg font-bold mt-4">2. Types of Cookies We Use</h2>
        <ul className="list-disc pl-6 flex flex-col gap-1.5">
          <li>
            <strong className="text-brand-dark">Essential Cookies:</strong> Required to run the site, load fonts correctly, and submit inline appointment requests.
          </li>
          <li>
            <strong className="text-brand-dark">Performance Cookies:</strong> Collect anonymous user flow maps to help us fix layout bugs and improve loading speeds.
          </li>
        </ul>

        <h2 className="text-lg font-bold mt-4">3. Managing Cookies</h2>
        <p>
          You can adjust your browser properties to block or erase cookies at any time. However, disabling all cookies may prevent some visual elements or form submissions from functioning correctly on our site.
        </p>

        <div className="pt-6 border-t border-brand-tint mt-4">
          <Link href="/" className="text-brand-teal font-semibold hover:underline">
            &larr; Back to Home Page
          </Link>
        </div>
      </section>
    </div>
  );
}
