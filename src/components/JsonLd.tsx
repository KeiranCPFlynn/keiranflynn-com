import { en } from "@/content/en";

export function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://keiranflynn.com";

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service`,
    name: "Keiran Flynn - Executive English Conversation",
    description:
      "High-level English conversation coaching for founders, executives, and internationally active professionals.",
    url: `${siteUrl}/`,
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
      "@id": `${siteUrl}/#person`,
      name: "Keiran Flynn",
      nationality: "British",
      jobTitle: "Strategic Communication Consultant",
      url: `${siteUrl}/about`,
      sameAs: ["https://www.linkedin.com/in/keiran-flynn/"],
    },
    serviceType: [
      "Executive English Conversation",
      "Business Communication Coaching",
      "Strategic Communication Training",
    ],
    availableLanguage: ["English"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Keiran Flynn",
    inLanguage: "en",
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: en.conversation.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
