export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Keiran Flynn - High-Level English Conversation",
    description:
      "Strategic English conversation sessions for founders, executives, and internationally active professionals.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://keiranflynn.com",
    areaServed: [
      { "@type": "Place", name: "Phuket, Thailand" },
      { "@type": "Place", name: "Online" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bang Tao",
      addressRegion: "Phuket",
      addressCountry: "TH",
    },
    provider: {
      "@type": "Person",
      name: "Keiran Flynn",
      nationality: "British",
      jobTitle: "Strategic Communication Consultant",
    },
    serviceType: [
      "Executive English Conversation",
      "Business Communication",
      "Strategic Communication Training",
    ],
    availableLanguage: ["English"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
