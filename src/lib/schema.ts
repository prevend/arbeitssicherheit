// ============================================================
// Schema.org structured data (JSON-LD) for SEO
// ============================================================

import { siteConfig } from "@/lib/content";
import type { FAQ } from "@/lib/content";

const SITE_URL = "https://www.arbeitssicherheit-mg.de";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org" as const,
    "@type": ["ProfessionalService", "LocalBusiness"] as const,
    name: siteConfig.companyName,
    description:
      "Externe Fachkraft für Arbeitssicherheit (Sifa) in Mönchengladbach. Gesetzliche Betreuung nach ASiG und DGUV Vorschrift 2.",
    url: SITE_URL,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress" as const,
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: "NRW",
      postalCode: siteConfig.address.zip,
      addressCountry: "DE",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    areaServed: {
      "@type": "Place" as const,
      name: siteConfig.region,
    },
    priceRange: "$$",
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org" as const,
    "@type": "WebSite" as const,
    name: siteConfig.companyName,
    url: SITE_URL,
    description:
      "Homepage für Arbeitssicherheit in Mönchengladbach und am Niederrhein.",
    publisher: {
      "@type": "Organization" as const,
      name: siteConfig.companyName,
    },
  };
}

export function getFAQSchema(items: FAQ[]) {
  return {
    "@context": "https://schema.org" as const,
    "@type": "FAQPage" as const,
    mainEntity: items.map((item) => ({
      "@type": "Question" as const,
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: item.answer,
      },
    })),
  };
}

export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org" as const,
    "@type": "AboutPage" as const,
    name: "\u00dcber Arbeitssicherheit-MG Hoersen GmbH",
    description:
      "Ihr Partner f\u00fcr Arbeitssicherheit in M\u00f6nchengladbach und am Niederrhein. Inhabergef\u00fchrt, pers\u00f6nlich, qualifiziert nach DGUV Vorschrift\u00a02.",
    url: `${SITE_URL}/ueber-uns`,
    mainEntity: {
      "@type": "Organization" as const,
      name: siteConfig.companyName,
      url: SITE_URL,
      founder: {
        "@type": "Person" as const,
        name: "Wolfgang Hoersen",
        jobTitle: "Gesch\u00e4ftsf\u00fchrer & Fachkraft f\u00fcr Arbeitssicherheit",
        description:
          "Elektromeister und zertifizierte Fachkraft f\u00fcr Arbeitssicherheit mit \u00fcber 15\u00a0Jahren Erfahrung in der Betreuung von KMU am Niederrhein.",
        worksFor: {
          "@type": "Organization" as const,
          name: siteConfig.companyName,
        },
        knowsAbout: [
          "Arbeitssicherheit",
          "Gef\u00e4hrdungsbeurteilung",
          "DGUV Vorschrift 2",
          "Gefahrstoffrecht",
          "Biostoffrecht",
          "L\u00e4rmschutz",
          "Regalpr\u00fcfungen",
          "Elektrosicherheit",
        ],
      },
      address: {
        "@type": "PostalAddress" as const,
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: "NRW",
        postalCode: siteConfig.address.zip,
        addressCountry: "DE",
      },
      areaServed: [
        { "@type": "City" as const, name: "M\u00f6nchengladbach" },
        { "@type": "AdministrativeArea" as const, name: "Niederrhein" },
        { "@type": "AdministrativeArea" as const, name: "Nordrhein-Westfalen" },
      ],
    },
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org" as const,
    "@type": "BreadcrumbList" as const,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}
