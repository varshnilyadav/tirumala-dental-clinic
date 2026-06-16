import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full text-brand-dark bg-white">
      {/* Header */}
      <section className="bg-brand-cream py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-brand-gray text-xs mt-2">
            Last Updated: June 16, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-3xl mx-auto px-6 text-brand-dark leading-relaxed flex flex-col gap-6 text-sm">
        <p>
          At Tirumala Dental Clinic, we value your privacy and are committed to protecting your personal healthcare information. This Privacy Policy details how we collect, store, and utilize details provided through our website or callback forms.
        </p>

        <h2 className="text-lg font-bold mt-4">1. Information We Collect</h2>
        <p>
          We only collect personal information that you voluntarily provide to us, specifically:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-1.5">
          <li>Your Name (to address you when calling back)</li>
          <li>Your Phone Number (to call you regarding scheduling dental slots)</li>
          <li>Details submitted in optional health booking requests</li>
        </ul>

        <h2 className="text-lg font-bold mt-4">2. How We Use Information</h2>
        <p>
          The personal details collected are utilized exclusively to:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-1.5">
          <li>Fulfill callback requests for appointments</li>
          <li>Provide clinic notifications or changes in timings</li>
          <li>Optimize site performance and patient experience</li>
        </ul>

        <h2 className="text-lg font-bold mt-4">3. Security Standards</h2>
        <p>
          We enforce standard clinical storage security measures. We do not sell, rent, or lease your private coordinates to third-party marketing companies. Patient safety is our primary focus.
        </p>

        <h2 className="text-lg font-bold mt-4">4. Contact Us</h2>
        <p>
          If you have questions regarding this policy, please reach out to us at:
        </p>
        <p className="font-semibold text-brand-teal">
          Email: hello@tirumaladental.com
          <br />
          Phone: +91 93075 12816
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
