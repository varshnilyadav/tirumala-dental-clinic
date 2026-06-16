import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tirumala Dental Clinic | Best Dentist in Adilabad, Telangana",
  description:
    "Tirumala Dental Clinic, Implants, Trauma & Hair Transplant Clinic. Expert care by Dr. Thumu Sai Kumar, MDS & Dr. Thumu Bharathi, MDS. Specialized in implants, trauma care, root canals, and smile design in Adilabad.",
  metadataBase: new URL("https://tirumaladental.com"), // Placeholder canonical root
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tirumala Dental Clinic | Best Dentist in Adilabad, Telangana",
    description:
      "Modern, gentle dental care, advanced implants, trauma surgery, and hair transplant clinic in Adilabad, Telangana. Schedule your visit today.",
    url: "https://tirumaladental.com",
    siteName: "Tirumala Dental Clinic",
    images: [
      {
        url: "/assets/img/gen_dentist-examining-patients-teeth-close-up_1.jpg",
        width: 1200,
        height: 630,
        alt: "Tirumala Dental Clinic Office",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirumala Dental Clinic | Best Dentist in Adilabad, Telangana",
    description:
      "Modern dental care, implants, trauma, and hair transplant clinic in Adilabad. Under expert care of Dr. Thumu Sai Kumar & Dr. Thumu Bharathi.",
    images: ["/assets/img/gen_dentist-examining-patients-teeth-close-up_1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness/Dentist Schema JSON-LD Markup
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Tirumala Dental, Implants, Trauma, Hair Transplant Clinic",
    "image": "https://tirumaladental.com/assets/img/gen_dentist-examining-patients-teeth-close-up_1.jpg",
    "@id": "https://tirumaladental.com/#dentist",
    "url": "https://tirumaladental.com",
    "telephone": "+919307512816",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tirumala Dental, Implants, Trauma, Hair Transplant Clinic, Near Dr. Thumu Sai Kumar MDS & Dr. Thumu Bharathi MDS",
      "addressLocality": "Adilabad",
      "addressRegion": "Telangana",
      "postalCode": "504001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.6707076,
      "longitude": 78.5323493
    },
    "hasMap": "https://www.google.com/maps/place/Tirumala+dental,+implants,Trauma,hair+transplant+clinic,+Dr.Thumu+Sai+kumar+MDS,+Dr.Thumu+Bharathi+MDS/@19.6707076,78.5323493,17z",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "09:30",
        "closes": "17:30"
      }
    ],
    "sameAs": [
      "https://www.facebook.com",
      "https://www.instagram.com"
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Dr. Thumu Sai Kumar",
        "jobTitle": "Oral & Maxillofacial Surgeon, Implantologist, Hair Transplant Specialist",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "MDS"
        }
      },
      {
        "@type": "Person",
        "name": "Dr. Thumu Bharathi",
        "jobTitle": "Conservative Dentist & Endodontics Specialist",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "MDS"
        }
      }
    ]
  };

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
        />
      </head>
      <body className={`${sora.variable} font-sora min-h-full flex flex-col antialiased bg-white`}>
        <Navbar />
        <main className="flex-grow pt-[74px] md:pt-[84px]">{children}</main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
