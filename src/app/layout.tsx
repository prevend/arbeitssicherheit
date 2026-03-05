import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ClientLayout } from "@/components/layout/client-layout";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema";
import { CookieConsent } from "@/components/features/cookie-consent";
import { StickyMobileCta } from "@/components/features/sticky-mobile-cta";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arbeitssicherheit-mg.de"),
  title: {
    default:
      "Arbeitssicherheit MG \u2013 Fachkraft f\u00fcr Arbeitssicherheit in M\u00f6nchengladbach",
    template: "%s | Arbeitssicherheit MG",
  },
  description:
    "Externe Fachkraft f\u00fcr Arbeitssicherheit (Sifa) in M\u00f6nchengladbach. Gesetzliche Betreuung nach ASiG & DGUV Vorschrift 2: Begehungen, Gef\u00e4hrdungsbeurteilungen, Unterweisungen, Pr\u00fcfungen, SiGeKo.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Arbeitssicherheit MG",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteSchema()),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-text-dark">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#1B3A5C] focus:rounded focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-[#1B3A5C]"
        >
          Zum Hauptinhalt springen
        </a>
        <ClientLayout />
        <Header />
        <main id="main" className="pt-16 md:pt-20 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <CookieConsent />
        <StickyMobileCta />
      </body>
    </html>
  );
}
