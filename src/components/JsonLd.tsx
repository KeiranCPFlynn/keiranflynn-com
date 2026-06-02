import { siteUrl } from "@/lib/site";

export function JsonLd() {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Keiran Flynn",
    inLanguage: "en",
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Keiran Flynn",
    jobTitle: "AI Product Builder",
    url: siteUrl,
    sameAs: [
      "https://www.linkedin.com/in/keiran-flynn/",
      "https://github.com/KeiranCPFlynn",
    ],
    knowsAbout: [
      "AI product development",
      "Coding agents",
      "MVP builds",
      "Product strategy",
      "Next.js",
      "Supabase",
      "Chrome extensions",
      "Agentic workflows",
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service`,
    name: "Keiran Flynn AI Product Building",
    description:
      "AI product building, product sprints, MVP builds and fractional AI product leadership for founders, operators and teams.",
    url: siteUrl,
    provider: {
      "@id": `${siteUrl}/#person`,
    },
    areaServed: "Worldwide",
    serviceType: [
      "AI Product Sprint",
      "AI MVP Build Partner",
      "Fractional AI Product Lead",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
    </>
  );
}
