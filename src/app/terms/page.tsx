import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full text-brand-dark bg-white">
      {/* Header */}
      <section className="bg-brand-cream py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold">Terms &amp; Conditions</h1>
          <p className="text-brand-gray text-xs mt-2">
            Last Updated: June 16, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-3xl mx-auto px-6 text-brand-dark leading-relaxed flex flex-col gap-6 text-sm">
        <p>
          Welcome to the Tirumala Dental Clinic website. By browsing our pages or utilizing our online callback forms, you agree to comply with the terms and conditions outlined below.
        </p>

        <h2 className="text-lg font-bold mt-4">1. Medical Information Disclaimer</h2>
        <p>
          All dental wellness blogs, clinical guides, and advice pages displayed on this website are compiled for general educational purposes only. They do not constitute official clinical diagnoses or substitute in-person dental examinations.
        </p>

        <h2 className="text-lg font-bold mt-4">2. Appointment Scheduling</h2>
        <p>
          Submitting a request through our callback forms or WhatsApp buttons registers a callback inquiry. Official dental appointment slot confirmation occurs once our receptionist verifies availability and registers you in our local clinical log.
        </p>

        <h2 className="text-lg font-bold mt-4">3. Code of Conduct</h2>
        <p>
          Users must not use our appointment forms for spam, fraudulent booking inquiries, or malicious script injections. We reserve the right to block spam numbers from our communication routing.
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
