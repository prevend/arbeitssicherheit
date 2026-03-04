import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, footerColumns } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-footer-bg">
      {/* Decorative gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      {/* Main footer area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Contact / Branding */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src="/images/logo.png" alt="Arbeitssicherheit-MG Hoersen GmbH – Arbeitsschutz Mönchengladbach" width={130} height={36} className="h-9 w-auto" />
            <p className="text-sm text-slate-400 leading-relaxed mt-4 mb-6">
              Fachkraft f&uuml;r Arbeitssicherheit in M&ouml;nchengladbach.
            </p>
            <div className="space-y-2">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-slate-500" />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.emailHref}
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.zip} {siteConfig.address.city}
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {siteConfig.companyName}. Alle
            Rechte vorbehalten.
          </p>
          <p className="text-xs text-slate-500">
            Sicherheit am Arbeitsplatz – Wir machen das.
          </p>
        </div>
      </div>
    </footer>
  );
}
