import Image from "next/image";

interface GoogleReview {
  name: string;
  initials: string;
  rating: number;
  text: string;
  timeAgo: string;
  avatarColor: string;
}

// Placeholder reviews – werden durch echte Google-Bewertungen ersetzt
const googleReviews: GoogleReview[] = [
  {
    name: "M. Hoffmann",
    initials: "MH",
    rating: 5,
    text: "Sehr kompetente Beratung. Hat uns geholfen, alle Prüffristen im Griff zu behalten. Sehr empfehlenswert für jeden Betrieb!",
    timeAgo: "vor 2 Wochen",
    avatarColor: "#1B3A5C",
  },
  {
    name: "R. Schulz",
    initials: "RS",
    rating: 5,
    text: "Schnelle Reaktion, klare Kommunikation. Die Gefährdungsbeurteilung wurde professionell und ohne großen Aufwand für uns durchgeführt.",
    timeAgo: "vor 1 Monat",
    avatarColor: "#0F2240",
  },
  {
    name: "A. Krause",
    initials: "AK",
    rating: 5,
    text: "Seit wir Arbeitssicherheit MG als externe Sifa haben, läuft alles viel strukturierter. Endlich keine Angst mehr vor der BG-Prüfung.",
    timeAgo: "vor 3 Monaten",
    avatarColor: "#C8102E",
  },
  {
    name: "T. Berger",
    initials: "TB",
    rating: 5,
    text: "Perfekte Unterstützung bei der DGUV-Dokumentation. Preis-Leistung stimmt absolut. Können wir nur weiterempfehlen.",
    timeAgo: "vor 4 Monaten",
    avatarColor: "#1B3A5C",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-[#FBBC05] text-base" : "text-slate-300 text-base"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function GoogleReviewsStrip() {
  return (
    <section className="bg-amber-50 py-14 border-t border-amber-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            {/* Google logo placeholder */}
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xl" style={{ color: "#4285F4" }}>G</span>
              <span className="text-sm font-medium text-slate-600">Google Bewertungen</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3 py-1 shadow-sm">
              <span className="text-[#FBBC05] text-sm font-bold">★</span>
              <span className="text-sm font-bold text-slate-800">5,0</span>
              <span className="text-xs text-slate-400">(12 Bewertungen)</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 italic">
            * Echte Google-Bewertungen werden hier eingebunden
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {googleReviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Reviewer */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ backgroundColor: review.avatarColor }}
                  aria-hidden="true"
                >
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 leading-none">{review.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{review.timeAgo}</p>
                </div>
              </div>

              <StarRating rating={review.rating} />

              <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-4">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
