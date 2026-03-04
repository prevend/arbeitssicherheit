// ============================================================
// Central content file for Arbeitssicherheit MG website
// All website text is maintained here in German.
//
// Hinweis: Telefonnummer, Adresse, Teamnamen und Impressum
// mit echten Daten pruefen und ggf. anpassen.
// ============================================================

// -----------------------------------------------------------
// Type Definitions
// -----------------------------------------------------------

export interface SiteConfig {
  companyName: string;
  companyNameShort: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  address: {
    street: string;
    zip: string;
    city: string;
  };
  openingHours: string;
  region: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Scenario {
  text: string;
}

export interface ServiceDetail {
  intro: string;
  body: string;
  bulletPoints?: string[];
  imageHint: string;
  ctaText: string;
}

export interface Service {
  title: string;
  description: string;
  slug: string;
  details: ServiceDetail;
}

export interface IndustryItem {
  title: string;
  scenario: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  context: string;
  company?: string;
  role?: string;
  photo?: string;
  rating?: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Qualification {
  label: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  initials: string;
  qualifications?: Qualification[];
}

export interface Partner {
  name: string;
  location: string;
  specialty?: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

// -----------------------------------------------------------
// Site Configuration
// -----------------------------------------------------------

export const siteConfig: SiteConfig = {
  companyName: "Arbeitssicherheit-MG Hoersen GmbH",
  companyNameShort: "Arbeitssicherheit MG",
  phone: "0157 / 502 753 20",
  phoneHref: "tel:+4915750275320",
  email: "amg-info@arbeitssicherheit-mg.de",
  emailHref: "mailto:amg-info@arbeitssicherheit-mg.de",
  address: {
    street: "Grüner Winkel 9",
    zip: "41065",
    city: "Mönchengladbach",
  },
  openingHours: "Mo\u2013Fr: 08:00\u201317:00 Uhr",
  region: "M\u00f6nchengladbach & Niederrhein",
};

// -----------------------------------------------------------
// Navigation
// -----------------------------------------------------------

export const navigation: NavItem[] = [
  { label: "Startseite", href: "/" },
  { label: "Dienstleistungen", href: "/leistungen" },
  { label: "Erstanalyse", href: "/erstanalyse" },
  { label: "\u00dcber uns", href: "/ueber-uns" },
  { label: "Branchen", href: "/branchen" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Kontakt", href: "/kontakt" },
];

// -----------------------------------------------------------
// Scenarios ("Was wir oft sehen")
// -----------------------------------------------------------

export const scenarios: Scenario[] = [
  {
    text: "Ein Metallbaubetrieb in Rheydt. 35 Mitarbeiter. Letzte Gef\u00e4hrdungsbeurteilung: 2019. Die BG hat eine Begehung angek\u00fcndigt. Der Gesch\u00e4ftsf\u00fchrer hat drei Wochen Zeit.",
  },
  {
    text: "Eine Pflegeeinrichtung hat neue R\u00e4ume bezogen. Brandschutzkonzept? Unterweisungen? Alles muss von vorne gemacht werden. Und zwar bis Ende des Monats.",
  },
  {
    text: "Ein Lagerlogistiker will seinen Staplerfahrern die j\u00e4hrliche Unterweisung geben. Aber wer macht das? Und wie dokumentiert man das richtig?",
  },
];

// -----------------------------------------------------------
// Ersttermin narrative
// -----------------------------------------------------------

export const erstterminText =
  "Beim Ersttermin sitzen wir zusammen \u2013 bei Ihnen im Betrieb, nicht in einem anonymen B\u00fcrogeb\u00e4ude. Wir gehen durch die Halle, schauen uns die Arbeitspl\u00e4tze an, reden mit Ihren Leuten. Danach wissen Sie, wo Sie stehen. Konkret, nicht in Berater-Sprech.";

// -----------------------------------------------------------
// Services (Detail page)
// -----------------------------------------------------------

export const services: Service[] = [
  {
    title: "Arbeitsschutzbetreuung",
    description:
      "Ihre gesetzliche Regelbetreuung nach ASiG und DGUV Vorschrift\u00a02.",
    slug: "arbeitsschutzbetreuung",
    details: {
      intro:
        "Das Arbeitssicherheitsgesetz (ASiG) verpflichtet jeden Arbeitgeber, eine Fachkraft f\u00fcr Arbeitssicherheit (Sifa) zu bestellen \u2013 das ist Unternehmerpflicht nach \u00a7\u00a03 ArbSchG. Die Haftung liegt bei der Gesch\u00e4ftsf\u00fchrung, pers\u00f6nlich. Viele Betriebe haben das nicht geregelt. Bis die Berufsgenossenschaft nachfragt.",
      body:
        "Wir bieten Ihnen zwei Betreuungsmodelle: die komplette sicherheitstechnische Grundbetreuung gem\u00e4\u00df DGUV Vorschrift\u00a02 mit zentralisierter Verwaltung aller Arbeitsschutzangelegenheiten \u2013 oder einzelne Arbeitsschutzaspekte modular nach Ihrem Bedarf. In beiden F\u00e4llen kommen wir regelm\u00e4\u00dfig in Ihren Betrieb, beraten die Gesch\u00e4ftsf\u00fchrung und dokumentieren alles l\u00fcckenlos. So k\u00f6nnen Sie sich auf Ihr Kerngesch\u00e4ft konzentrieren.",
      bulletPoints: [
        "Gef\u00e4hrdungsbeurteilungen erstellen und aktualisieren",
        "Regelm\u00e4\u00dfige Betriebsbegehungen mit Protokoll",
        "ASA-Sitzungen (Arbeitsschutzausschuss) \u2013 Teilnahme und Moderation ab 20 Mitarbeitern (\u00a7\u00a011 ASiG)",
        "Mitarbeiterunterweisungen zu Maschinen und Betriebsmitteln",
        "Fristen- und Pr\u00fcfterminkontrolle \u2013 nichts geht verloren",
        "Gefahrstoffmanagement mit zertifizierter Fachkunde",
        "Hygieneschutzplanung (Biostoffrecht, HACCP-Richtlinien)",
        "L\u00e4rm-, Licht- und Klimamessungen am Arbeitsplatz",
        "PSA-Beratung \u2013 Auswahl der richtigen pers\u00f6nlichen Schutzausr\u00fcstung",
      ],
      imageHint: "/images/begehung.jpg",
      ctaText: "Lassen Sie uns \u00fcber Ihre Betreuung sprechen",
    },
  },
  {
    title: "Gef\u00e4hrdungsbeurteilungen",
    description:
      "Systematische Erfassung aller Gef\u00e4hrdungen \u2013 f\u00fcr jeden Arbeitsplatz.",
    slug: "gefaehrdungsbeurteilungen",
    details: {
      intro:
        "Die Gef\u00e4hrdungsbeurteilung ist das \u201eHerzst\u00fcck\u201c des Arbeitsschutzes und gesetzliche Pflicht nach \u00a7\u00a03 ArbSchG: Der Unternehmer muss vor Beginn einer T\u00e4tigkeit die Gef\u00e4hrdungen ermitteln und Schutzma\u00dfnahmen durchf\u00fchren. Ab dem ersten Mitarbeitenden. Die Haftung liegt beim Unternehmer pers\u00f6nlich.",
      body:
        "Wir kommen in Ihren Betrieb und erfassen die Gef\u00e4hrdungen systematisch vor Ort. Die Qualit\u00e4t der Beurteilung bestimmt die Wirksamkeit aller Schutzma\u00dfnahmen. Das Ergebnis ist ein Dokument, das bei jeder Pr\u00fcfung durch BG oder Gewerbeaufsicht standh\u00e4lt \u2013 und das Sie tats\u00e4chlich nutzen k\u00f6nnen, weil es verst\u00e4ndlich geschrieben ist.",
      bulletPoints: [
        "Systematische Ermittlung und Lokalisierung von Risikofaktoren an T\u00e4tigkeiten und Arbeitspl\u00e4tzen",
        "Feststellung des aktuellen Ist-Zustands",
        "Erarbeitung konkreter Schutzziele und Ma\u00dfnahmen",
        "Komplette Erstellung oder qualifizierte Beratung bei vorhandenen Beurteilungen",
        "Psychische Gef\u00e4hrdungsbeurteilung nach \u00a7\u00a05 ArbSchG",
        "Pr\u00e4sentation anhand von Mustermappen \u2013 damit Sie sehen, wie das Ergebnis aussieht",
      ],
      imageHint: "/images/dokumentation.jpg",
      ctaText: "Schreiben Sie uns zu Ihren Gef\u00e4hrdungsbeurteilungen",
    },
  },
  {
    title: "Betriebsanweisungen & Unterweisungen",
    description:
      "Verst\u00e4ndliche Anweisungen und Unterweisungen, die ankommen.",
    slug: "unterweisungen",
    details: {
      intro:
        "Die Erstunterweisung muss vor Arbeitsantritt durchgef\u00fchrt werden (\u00a7\u00a04 DGUV Vorschrift\u00a01), insbesondere bei Wechsel der Arbeitsaufgaben oder Arbeitsmittel. Danach ist mindestens eine j\u00e4hrliche Wiederholung Pflicht. Die Dokumentation muss 5 Jahre aufbewahrt werden \u2013 bei einem Arbeitsunfall verlangt die BG oder Unfallkasse genau diese Unterlagen.",
      body:
        "Wir schreiben Betriebsanweisungen, die Ihre Leute verstehen \u2013 keine Lehrbuch-Texte, sondern kurze, klare Regeln f\u00fcr den jeweiligen Arbeitsplatz. Die Unterweisungen f\u00fchren wir direkt bei Ihnen durch, in kleinen Gruppen mit praktischen Beispielen. Jeder Mitarbeiter erh\u00e4lt individuelle Modulzuweisungen passend zu seiner T\u00e4tigkeit.",
      bulletPoints: [
        "Erstunterweisung vor Arbeitsantritt \u2013 bei jedem Neuzugang und T\u00e4tigkeitswechsel",
        "J\u00e4hrliche Wiederholungsunterweisungen mit l\u00fcckenloser Dokumentation",
        "Individuelle Modulzuweisung pro Mitarbeiter (PC-Arbeitsplatz, Maschinen, Montage etc.)",
        "Betriebsanweisungen f\u00fcr Maschinen, Gefahrstoffe und Arbeitsmittel",
        "Unterschrift von Arbeitnehmer und Arbeitgeber \u2013 5 Jahre Aufbewahrungsfrist",
        "Rechtssichere Dokumentation f\u00fcr BG, Unfallkasse und Gewerbeaufsicht",
      ],
      imageHint: "/images/schulung.jpg",
      ctaText: "Rufen Sie uns an wegen Unterweisungen",
    },
  },
  {
    title: "Pr\u00fcfungen (DGUV / UVV)",
    description:
      "Elektrische Betriebsmittel, Leitern, Regale \u2013 termingerecht gepr\u00fcft.",
    slug: "pruefungen",
    details: {
      intro:
        "Viele Arbeitsmittel m\u00fcssen regelm\u00e4\u00dfig gepr\u00fcft werden \u2013 das ist Unternehmerpflicht nach der Betriebssicherheitsverordnung (BetrSichV). Wer den \u00dcberblick verliert, riskiert nicht nur Bu\u00dfgelder \u2013 sondern haftet pers\u00f6nlich. Geschieht ein Unfall an einem ungepr\u00fcften Ger\u00e4t, k\u00f6nnen Regressanspr\u00fcche gegen Sie geltend gemacht werden.",
      body:
        "Wir \u00fcbernehmen die Pr\u00fcfungen vor Ort \u2013 als Elektrofachkraft / Elektromeister mit der n\u00f6tigen Qualifikation. Jede Pr\u00fcfung beinhaltet Pr\u00fcfplakette und Pr\u00fcfprotokoll. Wir \u00fcberwachen Ihre Fristen und erinnern Sie rechtzeitig, bevor etwas abl\u00e4uft.",
      bulletPoints: [
        "Elektrische Betriebsmittel nach DGUV Vorschrift\u00a03 \u2013 alles was einen Stecker hat, j\u00e4hrlich gepr\u00fcft (Elektromeister-Qualifikation)",
        "Sportger\u00e4te und Sportst\u00e4tten \u2013 j\u00e4hrliche UVV-Pr\u00fcfung durch befaehigte Person",
        "Leitern, Tritte und Rollger\u00fcste nach DGUV V208-016 \u2013 mindestens j\u00e4hrlich",
        "Regalpr\u00fcfungen nach DGUV R\u00a0108-007 \u2013 Regalinspektion mit Belastbarkeitskennzeichnung",
        "Handhubwagen (Ameise) \u2013 j\u00e4hrliche UVV-Pr\u00fcfung",
        "Pr\u00fcfplakette + Pr\u00fcfprotokoll bei jeder Messung \u2013 Sie sind auf der sicheren Seite",
      ],
      imageHint: "/images/pruefung.jpg",
      ctaText: "Lassen Sie uns \u00fcber Ihre Pr\u00fcfungen sprechen",
    },
  },
  {
    title: "Schulungen & Ausbildungen",
    description:
      "Erste Hilfe, Brandschutzhelfer, Staplerfahrer \u2013 bei Ihnen im Betrieb.",
    slug: "schulungen",
    details: {
      intro:
        "Erste-Hilfe-Kurs, Brandschutzhelfer, Staplerfahrer-Schulung \u2013 das sind gesetzliche Pflichtschulungen. Die meisten Betriebe schicken ihre Leute irgendwohin. Wir kommen zu Ihnen \u2013 mit zertifizierten Ausbildern direkt in Ihren Betrieb.",
      body:
        "Schulungen vor Ort haben einen entscheidenden Vorteil: Ihre Mitarbeitenden lernen an den Ger\u00e4ten, die sie tats\u00e4chlich benutzen, in den R\u00e4umen, in denen sie arbeiten. Das bleibt besser h\u00e4ngen als ein Vortrag im Seminarraum. Zertifikate und Dokumentation bekommen Sie direkt im Anschluss.",
      bulletPoints: [
        "Erste Hilfe \u2013 Pflicht ab 2 Mitarbeitern, eint\u00e4gige Ausbildung, Kosten tr\u00e4gt die BG (Gutscheine)",
        "Brandschutzhelfer \u2013 5\u00a0% der Belegschaft, Theorie + praktische L\u00f6sch\u00fcbung auf Ihrem Gel\u00e4nde",
        "Gabelstaplerschein \u2013 Inhouse-Schulung mit Ihren eigenen Staplern, zertifizierter Fahrlehrer",
        "Hubarbeitsb\u00fchnen-F\u00fchrerschein \u2013 6\u2013\u20098 Stunden, Bediener-Ausweis mit Lichtbild",
        "Defibrillator-Einweisung und Spezial-Module auf Anfrage",
        "J\u00e4hrliche Auffrischungsunterweisungen \u2013 wir organisieren und erinnern",
      ],
      imageHint: "/images/schulung.jpg",
      ctaText: "Schulungstermin anfragen",
    },
  },
  {
    title: "SiGeKo",
    description:
      "Sicherheitskoordination f\u00fcr Bauprojekte nach Baustellenverordnung.",
    slug: "sigeko",
    details: {
      intro:
        "Sobald auf einer Baustelle Besch\u00e4ftigte mehrerer Firmen arbeiten, braucht der Bauherr einen Sicherheits- und Gesundheitsschutzkoordinator (SiGeKo). Das ist gesetzlich vorgeschrieben nach der Baustellenverordnung (BaustellV) und betrifft auch kleinere Umbauten.",
      body:
        "Wir \u00fcbernehmen die SiGeKo-Aufgaben in der Planungs- und Ausf\u00fchrungsphase. Von der Erstellung des SiGe-Plans \u00fcber die laufende Koordination auf der Baustelle bis zur Unterlage f\u00fcr sp\u00e4tere Arbeiten \u2013 Ihr Bauprojekt ist sauber dokumentiert und rechtssicher abgewickelt.",
      bulletPoints: [
        "Erstellung des Sicherheits- und Gesundheitsschutzplans (SiGe-Plan)",
        "Koordination der Sicherheitsma\u00dfnahmen in der Planungsphase",
        "Laufende Baustellenkoordination w\u00e4hrend der Ausf\u00fchrung",
        "Erstellung der Unterlage f\u00fcr sp\u00e4tere Arbeiten am Bauwerk",
        "Dokumentation aller Sicherheitsma\u00dfnahmen und Abstimmungen",
      ],
      imageHint: "/images/baustelle.jpg",
      ctaText: "Sprechen Sie uns auf SiGeKo an",
    },
  },
];

// -----------------------------------------------------------
// Industries
// -----------------------------------------------------------

export const industries: IndustryItem[] = [
  {
    title: "Handwerk & Bau",
    scenario:
      "Ein Dachdeckerbetrieb in Wickrath. Sieben Mitarbeiter, drei Baustellen gleichzeitig. Die Gef\u00e4hrdungsbeurteilungen m\u00fcssen f\u00fcr jede Baustelle aktuell sein. Und die Ger\u00fcste brauchen eine Freigabe. Wir k\u00fcmmern uns darum.",
  },
  {
    title: "Produktion & Fertigung",
    scenario:
      "Eine Dreherei hat drei neue CNC-Maschinen aufgestellt. Die Betriebsanweisungen fehlen noch. Die Mitarbeitenden m\u00fcssen eingewiesen werden. Wir schreiben die Anweisungen und f\u00fchren die Unterweisung direkt vor Ort durch.",
  },
  {
    title: "Logistik & Lager",
    scenario:
      "Ein Lager in Rheindahlen. Zwanzig Staplerfahrer, Regalanlagen auf 3.000 Quadratmetern. Die Regalpr\u00fcfung nach DIN EN 15635 steht an, die Staplerfahrer brauchen ihre j\u00e4hrliche Unterweisung. Wir machen beides.",
  },
  {
    title: "Gesundheitswesen & Pflege",
    scenario:
      "Eine Pflegeeinrichtung mit 60 Mitarbeitenden. Biologische Gef\u00e4hrdungen, Heben und Tragen, Nadelstichverletzungen \u2013 die Risiken sind anders als in der Industrie. Wir kennen die Besonderheiten und passen den Arbeitsschutz entsprechend an.",
  },
  {
    title: "B\u00fcro & Verwaltung",
    scenario:
      "Auch im B\u00fcro gibt es Pflichten. Bildschirmarbeitsplatz-Beurteilungen, Unterweisungen zu Brandschutz und Erster Hilfe, psychische Gef\u00e4hrdungsbeurteilung. Das klingt nach wenig \u2013 aber es muss dokumentiert sein.",
  },
];

// -----------------------------------------------------------
// Testimonials
// -----------------------------------------------------------

export const testimonials: Testimonial[] = [
  {
    quote:
      "Wir hatten jahrelang keinen \u00dcberblick \u00fcber unsere Pr\u00fcffristen. Jetzt ruft uns niemand mehr an, weil etwas abgelaufen ist. Das allein war es wert.",
    name: "Thomas Richter",
    role: "Gesch\u00e4ftsf\u00fchrer",
    company: "Metallbau Richter GmbH",
    context: "M\u00f6nchengladbach \u00b7 Metallbau",
    photo: "/images/testimonial-richter.jpg",
    rating: 5,
  },
  {
    quote:
      "Endlich jemand, der die Unterweisung nicht als l\u00e4stige Pflicht behandelt. Unsere Mitarbeitenden haben nach der Schulung wirklich verstanden, warum Arbeitssicherheit wichtig ist.",
    name: "Sabine Weber",
    role: "Personalleiterin",
    company: "Logistik Weber GmbH",
    context: "Neuss \u00b7 Logistik & Lager",
    photo: "/images/testimonial-weber.jpg",
    rating: 5,
  },
  {
    quote:
      "Nach der ersten Begehung waren wir ehrlich gesagt erschrocken, wie viele L\u00fccken wir hatten. Heute schlafen wir ruhiger. Der Aufwand f\u00fcr uns war minimal.",
    name: "Klaus Schneider",
    role: "Inhaber",
    company: "Schreinerei Schneider",
    context: "M\u00f6nchengladbach \u00b7 Schreinerei",
    photo: "/images/testimonial-schneider.jpg",
    rating: 5,
  },
];

// -----------------------------------------------------------
// FAQs
// -----------------------------------------------------------

export const faqs: FAQ[] = [
  {
    question:
      "Brauche ich eine externe Fachkraft f\u00fcr Arbeitssicherheit (Sifa)?",
    answer:
      "Kurze Antwort: Ja. Das Arbeitssicherheitsgesetz (ASiG) und die DGUV Vorschrift\u00a02 verpflichten jeden Arbeitgeber zur sicherheitstechnischen Betreuung. Die Haftung liegt beim Unternehmer \u2013 pers\u00f6nlich. Ob Regelbetreuung oder Unternehmermodell: Das h\u00e4ngt von der Betriebsgr\u00f6\u00dfe ab. Wir kl\u00e4ren das beim ersten Gespr\u00e4ch.",
  },
  {
    question:
      "Was kostet das?",
    answer:
      "Das h\u00e4ngt von der Betriebsgr\u00f6\u00dfe und dem Umfang ab. Einen pauschalen Preis k\u00f6nnen wir hier nicht nennen, aber wir geben Ihnen nach dem Erstgespr\u00e4ch eine klare Aufstellung. Keine versteckten Kosten, keine \u00dcberraschungen.",
  },
  {
    question:
      "K\u00f6nnen Schulungen bei uns im Betrieb stattfinden?",
    answer:
      "Ja, das ist sogar der Regelfall bei uns. Ihre Mitarbeitenden lernen in ihrer Arbeitsumgebung, an ihren Ger\u00e4ten. Das spart Zeit und bringt mehr als ein Seminar in einem fremden Raum.",
  },
  {
    question:
      "Wie schnell k\u00f6nnen wir starten?",
    answer:
      "In der Regel vereinbaren wir innerhalb weniger Tage ein Erstgespr\u00e4ch. Wenn die BG schon angek\u00fcndigt ist oder es pressiert, finden wir auch kurzfristig einen Termin. Rufen Sie einfach an.",
  },
];

// -----------------------------------------------------------
// Team Members
// -----------------------------------------------------------

export const teamMembers: TeamMember[] = [
  {
    name: "Wolfgang Hoersen",
    role: "Gesch\u00e4ftsf\u00fchrer & Fachkraft f\u00fcr Arbeitssicherheit",
    description:
      "Wolfgang Hoersen ist Elektromeister, zertifizierte Fachkraft f\u00fcr Arbeitssicherheit und Gr\u00fcnder der Arbeitssicherheit-MG Hoersen GmbH. Mit \u00fcber 15\u00a0Jahren Erfahrung im betrieblichen Arbeitsschutz ber\u00e4t er Gesch\u00e4ftsf\u00fchrer und Betriebsleiter in Branchen von der Produktion \u00fcber das Handwerk bis zur Logistik. Seine St\u00e4rke: Er kennt den Alltag in den Betrieben, spricht die Sprache der Praktiker und macht Arbeitsschutz umsetzbar \u2013 nicht nur dokumentierbar. Herr Hoersen betreut jeden Kunden pers\u00f6nlich und ist Ihr fester Ansprechpartner f\u00fcr alle Fragen rund um Arbeitssicherheit.",
    initials: "WH",
    qualifications: [
      { label: "Elektromeister", icon: "Zap" },
      { label: "Fachkunde Gefahrstoffrecht", icon: "FlaskConical" },
      { label: "Fachkunde Biostoffrecht", icon: "Microscope" },
      { label: "Fachkunde L\u00e4rm/Vibration", icon: "Volume2" },
      { label: "Systematischer Arbeitsschutz", icon: "Shield" },
      { label: "Erfolgreich unterweisen (Schulungsmethodik)", icon: "GraduationCap" },
      { label: "Psychische Belastung am Arbeitsplatz", icon: "Brain" },
      { label: "Gesundheitsmanagement", icon: "HeartPulse" },
      { label: "Not-/Sicherheitsbeleuchtung", icon: "Lightbulb" },
      { label: "Regalpr\u00fcfungen (DGUV R108-007)", icon: "LayoutGrid" },
      { label: "UVV-Pr\u00fcfung Sportger\u00e4te/Sportst\u00e4tten", icon: "Dumbbell" },
      { label: "Stapler-/Hubarbeitsb\u00fchne-F\u00fchrerschein", icon: "Truck" },
      { label: "Licht-/Beleuchtungstechnik", icon: "SunDim" },
      { label: "Chemische, biologische und physikalische Raumbelastungsanalysen", icon: "TestTubes" },
    ],
  },
  {
    name: "Britta Hoersen",
    role: "Gesch\u00e4ftsf\u00fchrerin",
    description:
      "Britta Hoersen verantwortet als Gesch\u00e4ftsf\u00fchrerin die kaufm\u00e4nnische Leitung der Arbeitssicherheit-MG Hoersen GmbH. Sie koordiniert Termine, Begehungen und Pr\u00fcffristen \u2013 damit Sie sich darauf verlassen k\u00f6nnen, dass kein Termin verpasst wird und die Dokumentation immer auf dem aktuellen Stand ist. Bei organisatorischen Fragen ist sie Ihre direkte Ansprechpartnerin.",
    initials: "BH",
  },
];

// -----------------------------------------------------------
// Footer
// -----------------------------------------------------------

export const footerColumns: FooterColumn[] = [
  {
    title: "Leistungen",
    links: [
      { label: "Arbeitsschutzbetreuung", href: "/leistungen#arbeitsschutzbetreuung" },
      { label: "Gef\u00e4hrdungsbeurteilungen", href: "/leistungen#gefaehrdungsbeurteilungen" },
      { label: "Unterweisungen", href: "/leistungen#unterweisungen" },
      { label: "Pr\u00fcfungen (DGUV)", href: "/leistungen#pruefungen" },
      { label: "Schulungen", href: "/leistungen#schulungen" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "\u00dcber uns", href: "/ueber-uns" },
      { label: "Branchen", href: "/branchen" },
      { label: "Referenzen", href: "/referenzen" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
];

// -----------------------------------------------------------
// Impressum (Placeholder Content)
// -----------------------------------------------------------

export const impressumContent = {
  title: "Impressum",
  sections: [
    {
      heading: "Angaben gem\u00e4\u00df \u00a7 5 DDG",
      content: `Arbeitssicherheit-MG Hoersen GmbH
Grüner Winkel 9
41065 Mönchengladbach`,
    },
    {
      heading: "Vertreten durch",
      content: "Wolfgang Hoersen und Britta Hoersen (Geschäftsführer)",
    },
    {
      heading: "Kontakt",
      content: `Telefon: +49 157 50275320
E-Mail: amg-info@arbeitssicherheit-mg.de`,
    },
    {
      heading:
        "Verantwortlich f\u00fcr den Inhalt nach \u00a7 18 Abs. 2 MStV",
      content: `Wolfgang Hoersen
Grüner Winkel 9, 41065 Mönchengladbach`,
    },
    {
      heading: "EU-Streitschlichtung",
      content:
        "Die Europ\u00e4ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    },
  ],
};

// -----------------------------------------------------------
// Datenschutz (Placeholder Content)
// -----------------------------------------------------------

export const datenschutzContent = {
  title: "Datenschutzerkl\u00e4rung",
  sections: [
    {
      heading: "1. Verantwortlicher",
      content: `Arbeitssicherheit-MG Hoersen GmbH
Limitenstra\u00dfe 94, 41061 M\u00f6nchengladbach
Telefon: +49 157 50275320
E-Mail: amg-info@arbeitssicherheit-mg.de`,
    },
    {
      heading: "2. \u00dcbersicht der Verarbeitungen",
      content:
        "Die nachfolgende \u00dcbersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen. Bestandsdaten (z.\u00a0B. Namen, Adressen), Kontaktdaten (z.\u00a0B. E-Mail, Telefonnummern), Inhaltsdaten (z.\u00a0B. Texteingaben im Kontaktformular), Nutzungsdaten (z.\u00a0B. besuchte Seiten, Zugriffszeit) und Meta-/Kommunikationsdaten (z.\u00a0B. IP-Adressen, Browserinformationen).",
    },
    {
      heading: "3. Rechtsgrundlagen",
      content:
        "Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage der DSGVO. Soweit wir eine Einwilligung einholen, ist Art.\u00a06 Abs.\u00a01 lit.\u00a0a DSGVO die Rechtsgrundlage. F\u00fcr die Verarbeitung zur Vertragserf\u00fcllung gilt Art.\u00a06 Abs.\u00a01 lit.\u00a0b DSGVO. F\u00fcr die Verarbeitung auf Basis berechtigter Interessen gilt Art.\u00a06 Abs.\u00a01 lit.\u00a0f DSGVO.",
    },
    {
      heading: "4. Kontaktformular und Anfragen",
      content:
        "Wenn Sie uns \u00fcber das Kontaktformular kontaktieren, werden Ihre Angaben (Name, E-Mail, Nachricht und weitere freiwillige Angaben) zur Bearbeitung Ihrer Anfrage gespeichert. Rechtsgrundlage ist Art.\u00a06 Abs.\u00a01 lit.\u00a0b DSGVO (vorvertragliche Ma\u00dfnahmen). Die Daten werden gel\u00f6scht, sobald sie f\u00fcr die Erreichung des Zweckes nicht mehr erforderlich sind.",
    },
    {
      heading: "5. Hosting",
      content:
        "Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. Vercel verarbeitet Zugriffsdaten zur Bereitstellung der Website. Ein Auftragsverarbeitungsvertrag (DPA) mit Vercel liegt vor. Weitere Informationen: https://vercel.com/legal/privacy-policy.",
    },
    {
      heading: "6. Server-Log-Dateien",
      content:
        "Der Hosting-Anbieter erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser automatisch \u00fcbermittelt. Dies sind: Browsertyp und -version, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenf\u00fchrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.",
    },
    {
      heading: "7. Cookies",
      content:
        "Diese Website verwendet ausschlie\u00dflich technisch notwendige Cookies, die f\u00fcr den Betrieb der Seite erforderlich sind. Es werden keine Tracking-Cookies oder Marketing-Cookies eingesetzt. Eine gesonderte Einwilligung ist f\u00fcr technisch notwendige Cookies nicht erforderlich (Art.\u00a06 Abs.\u00a01 lit.\u00a0f DSGVO).",
    },
    {
      heading: "8. Web-Analyse",
      content:
        "Auf dieser Website wird derzeit kein Web-Analyse-Tool eingesetzt. Es werden keine Nutzungsprofile erstellt und keine Daten an Dritte zu Analysezwecken weitergegeben.",
    },
    {
      heading: "9. SSL-/TLS-Verschl\u00fcsselung",
      content:
        "Diese Seite nutzt aus Sicherheitsgr\u00fcnden eine SSL- bzw. TLS-Verschl\u00fcsselung f\u00fcr die \u00dcbertragung vertraulicher Inhalte. Eine verschl\u00fcsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von \u201ehttp://\u201c auf \u201ehttps://\u201c wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.",
    },
    {
      heading: "10. Betroffenenrechte",
      content:
        "Sie haben das Recht auf Auskunft (\u00a7\u00a015 DSGVO), Berichtigung (\u00a7\u00a016 DSGVO), L\u00f6schung (\u00a7\u00a017 DSGVO), Einschr\u00e4nkung der Verarbeitung (\u00a7\u00a018 DSGVO), Daten\u00fcbertragbarkeit (\u00a7\u00a020 DSGVO) und Widerspruch (\u00a7\u00a021 DSGVO). Um Ihre Rechte auszu\u00fcben, wenden Sie sich bitte an die oben genannten Kontaktdaten.",
    },
    {
      heading: "11. Beschwerderecht bei einer Aufsichtsbeh\u00f6rde",
      content:
        "Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbeh\u00f6rde zu. Die f\u00fcr uns zust\u00e4ndige Aufsichtsbeh\u00f6rde ist: Landesbeauftragte f\u00fcr Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Postfach 20 04 44, 40102 D\u00fcsseldorf, https://www.ldi.nrw.de.",
    },
  ],
};

// -----------------------------------------------------------
// About page content
// -----------------------------------------------------------

export const aboutContent = {
  heroLabel: "\u00dcber uns",
  title: "Ihr Arbeitsschutz in erfahrenen H\u00e4nden",
  intro:
    "Die Arbeitssicherheit-MG Hoersen GmbH ist Ihr zuverl\u00e4ssiger Partner f\u00fcr ganzheitlichen Arbeitsschutz in M\u00f6nchengladbach und am Niederrhein. Mit umfassender Fachkompetenz, pers\u00f6nlicher Betreuung und regionaler N\u00e4he unterst\u00fctzen wir Unternehmen dabei, ihre gesetzlichen Pflichten zu erf\u00fcllen und sichere Arbeitspl\u00e4tze zu schaffen.",
  heroTrust: "\u00dcber 15\u00a0Jahre Erfahrung \u00b7 500+ betreute Unternehmen \u00b7 Zertifiziert nach DGUV Vorschrift\u00a02",
  companyIntro: {
    title: "Warum Unternehmer uns ihren Arbeitsschutz anvertrauen",
    text: "Sie haben einen festen Ansprechpartner, der Ihren Betrieb kennt \u2013 keine wechselnden Berater, kein anonymes Call-Center. Als inhabergef\u00fchrtes Unternehmen in M\u00f6nchengladbach sind wir schnell bei Ihnen vor Ort, wenn es darauf ankommt. Unsere Kunden sch\u00e4tzen die kurzen Reaktionszeiten und die Tatsache, dass wir komplexe Vorschriften verst\u00e4ndlich und umsetzbar machen.",
    text2: "Von der Regelbetreuung nach DGUV Vorschrift\u00a02 \u00fcber Gef\u00e4hrdungsbeurteilungen gem\u00e4\u00df \u00a7\u00a05 ArbSchG bis hin zu Pr\u00fcfungen nach Betriebssicherheitsverordnung (BetrSichV) bieten wir alle Leistungen aus einer Hand. So haben Sie einen einzigen Ansprechpartner f\u00fcr s\u00e4mtliche Anforderungen des Arbeitsschutzgesetzes.",
    ctaText: "Unsere Leistungen entdecken",
  },
  philosophy: {
    title: "Arbeitsschutz, der im Alltag funktioniert",
    text: "Arbeitsschutz ist mehr als Dokumentation und Pflichtenerf\u00fcllung. Unser Ziel ist es, Sicherheit als festen Bestandteil in den betrieblichen Alltag zu integrieren \u2013 praxisnah, verst\u00e4ndlich und nachhaltig. Wir setzen auf enge Zusammenarbeit mit der Gesch\u00e4ftsf\u00fchrung und den Mitarbeitenden vor Ort, denn gelebter Arbeitsschutz funktioniert nur, wenn alle Beteiligten eingebunden sind.",
    values: [
      { title: "Pers\u00f6nlich", text: "Feste Ansprechpartner, die Ihren Betrieb kennen \u2013 nicht wechselnde Berater." },
      { title: "Praxisnah", text: "L\u00f6sungen, die im Arbeitsalltag funktionieren, nicht nur auf dem Papier." },
      { title: "Zuverl\u00e4ssig", text: "Termine, Fristen und Dokumentation \u2013 nichts geht verloren." },
      { title: "Rechtssicher", text: "Betreuung nach ArbSchG und DGUV, die jeder Pr\u00fcfung standh\u00e4lt." },
    ],
  },
  teamLabel: "Gesch\u00e4ftsf\u00fchrung",
  teamTitle: "Pers\u00f6nliche Betreuung durch erfahrene Spezialisten",
  qualificationsLabel: "Fachliche Qualifikationen",
  qualificationsTitle: "Fachkompetenz, die Pr\u00fcfungen standh\u00e4lt",
  qualificationsText:
    "Wolfgang Hoersen verf\u00fcgt \u00fcber umfassende Qualifikationen und Fachkenntnisse, die eine ganzheitliche Betreuung Ihres Unternehmens sicherstellen \u2013 von der Elektrosicherheit \u00fcber Gefahrstoffe bis hin zur psychischen Gef\u00e4hrdungsbeurteilung.",
  region: {
    title: "Arbeitssicherheit am Niederrhein \u2013 regional und pers\u00f6nlich",
    text: "Mit unserem Firmensitz in M\u00f6nchengladbach sind wir fest in der Region verwurzelt. Wir kennen die Gewerbegebiete, die Betriebe und die branchenspezifischen Anforderungen am Niederrhein. Bei dringenden Anliegen sind wir kurzfristig bei Ihnen \u2013 pers\u00f6nlich, nicht \u00fcber ein Call-Center. Diese regionale N\u00e4he und Erreichbarkeit ist ein entscheidender Vorteil f\u00fcr unsere Kunden.",
    ctaPrimary: "Jetzt pers\u00f6nlich beraten lassen",
  },
  ctaTitle: "Lassen Sie uns \u00fcber Ihren Arbeitsschutz sprechen",
  ctaText:
    "Ob Sie Ihren Arbeitsschutz erstmals aufbauen oder Ihre bestehende Betreuung wechseln m\u00f6chten \u2013 in einem kostenlosen Erstgespr\u00e4ch kl\u00e4ren wir, was Ihr Betrieb konkret braucht. Unverbindlich und ohne Verpflichtung.",
  ctaButtonPrimary: "Kostenlose Erstberatung anfordern",
};

// -----------------------------------------------------------
// Contact page content
// -----------------------------------------------------------

export const contactContent = {
  title: "Sie haben eine Frage?",
  intro:
    "Rufen Sie einfach an oder schreiben Sie uns \u00fcber das Formular. Wir melden uns innerhalb eines Werktages.",
  formTitle: "Schreiben Sie uns",
  formSubline:
    "Kurz schildern, worum es geht. Wir melden uns.",
  successMessage: {
    title: "Nachricht ist angekommen.",
    text: "Wir melden uns bei Ihnen. In der Regel innerhalb eines Werktages.",
  },
  errorMessage: {
    title: "Das hat leider nicht geklappt.",
    text: "Versuchen Sie es noch einmal oder rufen Sie uns direkt an.",
  },
};

// -----------------------------------------------------------
// Services page header
// -----------------------------------------------------------

export const servicesPageContent = {
  title: "Was wir f\u00fcr Sie tun",
  intro:
    "Arbeitsschutz hat viele Bausteine. Hier sehen Sie, welche davon wir \u00fcbernehmen. Wenn Sie nicht sicher sind, was Sie brauchen \u2013 rufen Sie an. Wir schauen uns das gemeinsam an.",
};

// -----------------------------------------------------------
// Industries page header
// -----------------------------------------------------------

export const industriesPageContent = {
  title: "Branchen, die wir betreuen",
  intro:
    "Jede Branche hat ihre eigenen Risiken. Ein Lager sieht anders aus als eine Arztpraxis. Hier zeigen wir, in welchen Bereichen wir uns auskennen.",
};

// -----------------------------------------------------------
// References page content
// -----------------------------------------------------------

export const referencesPageContent = {
  title: "Vertrauen durch Erfahrung",
  intro:
    "Seit \u00fcber 15 Jahren betreuen wir Unternehmen in M\u00f6nchengladbach und am Niederrhein. Hier finden Sie einen Auszug unserer Kunden und Partner.",
};

export const referenceClients: string[] = [
  "ACPS Automotive Services GmbH",
  "Delina Kempen",
  "NEW - Netz GmbH",
  "Hausheld AG (M\u00f6nchengladbach)",
  "Gondo Immobilien GmbH",
  "Molls Viersen",
  "Goldst\u00fcck UG (Viersen, Erkelenz)",
  "Schulte+Sohn Fleischwaren GmbH & Co. KG",
  "R\u00f6delbronn GmbH",
  "BLISTERpharm MG",
  "Stadt Geldern",
  "Staco Deutschland GmbH",
  "Institut f\u00fcr Umweltschutz GmbH & Co.",
  "Anton Brocker GmbH (Pfandhaus)",
  "getAir GmbH",
];

export const partners: Partner[] = [
  {
    name: "Arbeitssicherheit Baltruschat GmbH",
    location: "Hagen",
  },
  {
    name: "Arbeitssicherheit Flasche",
    location: "Borken",
  },
  {
    name: "BEBAS",
    location: "Kerken",
    specialty: "Erste-Hilfe-Schulungen",
  },
  {
    name: "grisu-Brandschutz",
    location: "Bochum",
  },
];

// ============================================================
// HOMEPAGE CONTENT
// ============================================================

export interface HeroCounter {
  value: number;
  suffix: string;
  label: string;
}

export interface NewHeroContent {
  tagline: string;
  headline: string;
  subline: string;
  primaryCta: string;
  primaryCtaHref: string;
  trustText: string;
  counters: HeroCounter[];
}

export const newHeroContent: NewHeroContent = {
  tagline: "Fachkraft f\u00fcr Arbeitssicherheit",
  headline: "Arbeitssicherheit, die Ihr Unternehmen wirklich sch\u00fctzt",
  subline:
    "Externe Fachkraft f\u00fcr Arbeitssicherheit f\u00fcr KMU in M\u00f6nchengladbach und am Niederrhein \u2013 g\u00fcnstiger als eine interne Stelle, rechtssicherer als ohne.",
  primaryCta: "Kostenlose Erstberatung anfragen",
  primaryCtaHref: "#kontakt",
  trustText: "Unverbindlich \u00b7 Kostenfrei \u00b7 Antwort innerhalb eines Werktages",
  counters: [
    { value: 500, suffix: "+", label: "Betreute Firmen" },
    { value: 15, suffix: "+", label: "Jahre Erfahrung" },
    { value: 100, suffix: "%", label: "Rechtssicher nach DGUV" },
  ],
};

// -----------------------------------------------------------
// Problems Section
// -----------------------------------------------------------

export interface ProblemItem {
  icon: string;
  title: string;
  description: string;
}

export const problemsSectionContent = {
  headline: "Kennen Sie diese Herausforderungen?",
  transitionText: "Wir l\u00f6sen diese Probleme f\u00fcr Sie \u2013 seit \u00fcber 15 Jahren.",
};

export const problems: ProblemItem[] = [
  {
    icon: "FileWarning",
    title: "Veraltete Gef\u00e4hrdungsbeurteilungen",
    description:
      "Die letzte Aktualisierung war vor Jahren. Bei einer BG-Pr\u00fcfung wird das zum Problem.",
  },
  {
    icon: "ShieldAlert",
    title: "Keine Fachkraft bestellt",
    description:
      "Die gesetzliche Pflicht nach ASiG ist nicht erf\u00fcllt. Die Haftung liegt beim Gesch\u00e4ftsf\u00fchrer pers\u00f6nlich.",
  },
  {
    icon: "ClipboardX",
    title: "Unterweisungen fehlen",
    description:
      "Mitarbeitende wurden nicht nachweislich unterwiesen. Im Schadensfall fehlt die Dokumentation.",
  },
  {
    icon: "CalendarClock",
    title: "Pr\u00fcffristen \u00fcberschritten",
    description:
      "Elektrische Betriebsmittel, Leitern, Regale \u2013 Pr\u00fcffristen sind abgelaufen und niemand hat den \u00dcberblick.",
  },
];

// -----------------------------------------------------------
// Services Section (Homepage)
// -----------------------------------------------------------

export const servicesSectionContent = {
  tagline: "Unsere Leistungen",
  headline: "Unsere Leistungen f\u00fcr Ihren Arbeitsschutz",
  subline: "Von der Erstanalyse bis zur laufenden Betreuung",
  cta: "Welche L\u00f6sung passt zu Ihnen? \u2192 Jetzt beraten lassen",
  ctaHref: "/kontakt",
};

export interface HomeServiceCard {
  icon: string;
  title: string;
  boldIntro: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
}

export const homeServiceCards: HomeServiceCard[] = [
  {
    icon: "Shield",
    title: "Arbeitsschutzbetreuung",
    boldIntro: "Ihre externe Sifa nach ASiG.",
    description:
      "Regelm\u00e4\u00dfige Begehungen, ASA-Sitzungen, Beratung der Gesch\u00e4ftsf\u00fchrung \u2013 vollst\u00e4ndig dokumentiert.",
    href: "/leistungen#arbeitsschutzbetreuung",
    image: "/images/begehung.jpg",
    imageAlt: "Betriebsbegehung Arbeitssicherheit",
  },
  {
    icon: "ClipboardList",
    title: "Gef\u00e4hrdungsbeurteilungen",
    boldIntro: "Das zentrale Dokument im Arbeitsschutz.",
    description:
      "Wir erstellen und aktualisieren Ihre Gef\u00e4hrdungsbeurteilungen nach \u00a7 5 ArbSchG \u2013 auch die psychische.",
    href: "/leistungen#gefaehrdungsbeurteilungen",
    image: "/images/dokumentation.jpg",
    imageAlt: "Gef\u00e4hrdungsbeurteilung erstellen",
  },
  {
    icon: "Zap",
    title: "Pr\u00fcfungen (DGUV/UVV)",
    boldIntro: "Elektrische Betriebsmittel, Leitern, Regale.",
    description:
      "Termingerecht gepr\u00fcft und dokumentiert nach DGUV Vorschrift 3, BetrSichV und DIN EN 15635.",
    href: "/leistungen#pruefungen",
    image: "/images/pruefung.jpg",
    imageAlt: "DGUV Betriebsmittelpr\u00fcfung",
  },
  {
    icon: "GraduationCap",
    title: "Schulungen & Unterweisungen",
    boldIntro: "Erste Hilfe, Brandschutz, Staplerfahrer.",
    description:
      "Direkt bei Ihnen im Betrieb. Praxisnah, dokumentiert, mit Teilnahmenachweis.",
    href: "/leistungen#schulungen",
    image: "/images/schulung.jpg",
    imageAlt: "Sicherheitsschulung im Betrieb",
  },
  {
    icon: "Building2",
    title: "SiGeKo",
    boldIntro: "Sicherheitskoordination f\u00fcr Bauprojekte.",
    description:
      "SiGe-Plan, Baustellenkoordination und Unterlage f\u00fcr sp\u00e4tere Arbeiten nach BaustellV.",
    href: "/leistungen#sigeko",
    image: "/images/baustelle.jpg",
    imageAlt: "Baustellensicherheit SiGeKo",
  },
];

// -----------------------------------------------------------
// USP Section
// -----------------------------------------------------------

export const uspSectionContent = {
  headline: "Darum vertrauen uns \u00fcber 500 Unternehmen",
  subline: "Pers\u00f6nliche Betreuung, regionale N\u00e4he und rechtssichere L\u00f6sungen \u2013 alles aus einer Hand.",
};

export interface USPStat {
  value: number;
  suffix: string;
  label: string;
}

export const uspStats: USPStat[] = [
  { value: 1, suffix: "", label: "Ansprechpartner" },
  { value: 0, suffix: "\u20ac", label: "Erstberatung" },
  { value: 24, suffix: "h", label: "Reaktionszeit" },
  { value: 100, suffix: "%", label: "DGUV-konform" },
];

export interface USPItem {
  icon: string;
  title: string;
  description: string;
}

export const usps: USPItem[] = [
  {
    icon: "Layers",
    title: "Alles aus einer Hand",
    description:
      "Von der Erstanalyse bis zur laufenden Betreuung \u2013 ein Ansprechpartner f\u00fcr alles.",
  },
  {
    icon: "Gift",
    title: "Kostenfreie Erstberatung",
    description:
      "Kein Risiko, keine Verpflichtung. Wir analysieren Ihren Status quo.",
  },
  {
    icon: "MapPin",
    title: "Regionale N\u00e4he",
    description:
      "Schnell vor Ort in M\u00f6nchengladbach und Umgebung.",
  },
  {
    icon: "ShieldCheck",
    title: "Rechtssicherheit",
    description:
      "DGUV-konforme Betreuung. Unsere Dokumentation h\u00e4lt jeder Pr\u00fcfung stand.",
  },
];

// -----------------------------------------------------------
// Process Section
// -----------------------------------------------------------

export const processSectionContent = {
  headline: "In 4 Schritten zu Ihrem Arbeitsschutz",
  subline: "Einfach, transparent und auf Ihre Situation zugeschnitten",
  cta: "Starten Sie mit Schritt 1 \u2013 kostenfrei \u2192",
  ctaHref: "/kontakt",
};

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Erstanalyse anfragen",
    description:
      "Kostenlos und unverbindlich. Wir schauen uns Ihre aktuelle Situation an.",
  },
  {
    number: 2,
    title: "Begehung vor Ort",
    description:
      "Wir kommen in Ihren Betrieb und identifizieren Handlungsbedarf.",
  },
  {
    number: 3,
    title: "Ma\u00dfnahmenplan",
    description:
      "Sie erhalten ein transparentes Angebot mit konkreten Ma\u00dfnahmen.",
  },
  {
    number: 4,
    title: "Laufende Betreuung",
    description:
      "Dauerhaft abgesichert. Wir \u00fcberwachen Fristen und sind f\u00fcr Sie da.",
  },
];

// -----------------------------------------------------------
// Contact Section (Homepage)
// -----------------------------------------------------------

export const contactSectionContent = {
  title: "Jetzt kostenlose Erstanalyse anfordern",
  subtitle: "Schreiben Sie uns \u2013 wir melden uns innerhalb eines Werktages.",
  trustText:
    "Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben. Antwort innerhalb eines Werktages. 100% unverbindlich.",
};

// -----------------------------------------------------------
// Erstanalyse page content
// -----------------------------------------------------------

export interface ErstanalyseStep {
  title: string;
  description: string;
}

export interface ErstanalyseBenefit {
  icon: string;
  title: string;
  description: string;
}

export const erstanalyseContent = {
  title: "Kostenfreie Erstanalyse",
  intro:
    "Wir analysieren Ihre aktuelle Arbeitsschutzsituation \u2014 kostenlos und unverbindlich. Sie erhalten eine ehrliche Einsch\u00e4tzung und ein individuelles Angebot.",
  heroTrust: "Seit 25+ Jahren | 500+ betreute Unternehmen | DGUV-zertifiziert",
  whySection: {
    headline: "Warum eine Erstanalyse?",
    intro:
      "Viele Unternehmer wissen nicht, ob sie alle gesetzlichen Pflichten im Arbeitsschutz erf\u00fcllen. Das Risiko: Pers\u00f6nliche Haftung, Bu\u00dfgelder und Unfallfolgen.",
    points: [
      {
        title: "Gesetzliche Pflicht",
        description:
          "Das Arbeitsschutzgesetz (\u00a7\u00a73, 5 ArbSchG) und die DGUV Vorschrift\u00a02 verpflichten jeden Arbeitgeber zur Gef\u00e4hrdungsbeurteilung und sicherheitstechnischen Betreuung. Die Haftung liegt beim Gesch\u00e4ftsf\u00fchrer \u2013 pers\u00f6nlich.",
        icon: "Scale",
      },
      {
        title: "Bu\u00dfgelder vermeiden",
        description:
          "Verst\u00f6\u00dfe gegen das ArbSchG k\u00f6nnen mit Bu\u00dfgeldern bis zu 25.000\u00a0EUR geahndet werden. Bei Unf\u00e4llen drohen strafrechtliche Konsequenzen f\u00fcr die Unternehmensleitung.",
        icon: "AlertTriangle",
      },
      {
        title: "BG-Audit bestehen",
        description:
          "Die Berufsgenossenschaft pr\u00fcft regelm\u00e4\u00dfig. Eine vollst\u00e4ndige Dokumentation und nachweisbare Ma\u00dfnahmen sch\u00fctzen Sie vor Regressforderungen nach Arbeitsunf\u00e4llen.",
        icon: "ClipboardCheck",
      },
    ],
  },
  checkpoints: {
    headline: "Was wir bei der Erstanalyse pr\u00fcfen",
    intro:
      "In ca. 1\u20132 Stunden verschafft sich unsere Fachkraft f\u00fcr Arbeitssicherheit einen \u00dcberblick \u00fcber Ihren Betrieb. Diese Bereiche schauen wir uns an:",
    items: [
      "Gef\u00e4hrdungsbeurteilungen (vollst\u00e4ndig und aktuell?)",
      "Unterweisungsdokumentation (regelm\u00e4\u00dfig und nachweisbar?)",
      "Pr\u00fcffristen f\u00fcr Arbeitsmittel und Anlagen (DGUV V3, BetrSichV)",
      "Pers\u00f6nliche Schutzausr\u00fcstung (PSA) \u2013 Auswahl und Zustand",
      "Flucht- und Rettungswege, Brandschutzeinrichtungen",
      "Erste-Hilfe-Organisation und Sicherheitsbeauftragte",
      "Gefahrstoffmanagement und Betriebsanweisungen",
      "Arbeitsmedizinische Vorsorge (ArbMedVV)",
    ],
  },
  steps: [
    {
      title: "Kontakt aufnehmen",
      description:
        "Sie rufen an oder schreiben uns. Wir kl\u00e4ren kurz Ihre Situation und vereinbaren einen Termin \u2013 in der Regel innerhalb weniger Tage.",
    },
    {
      title: "Vor-Ort-Begehung",
      description:
        "Unsere Fachkraft kommt in Ihren Betrieb. In ca. 1\u20132 Stunden pr\u00fcfen wir systematisch alle relevanten Bereiche \u2013 von der Gef\u00e4hrdungsbeurteilung bis zur PSA.",
    },
    {
      title: "Ergebnis & Empfehlung",
      description:
        "Direkt im Anschluss besprechen wir die Ergebnisse mit Ihnen. Sie erfahren, wo Handlungsbedarf besteht und welche Ma\u00dfnahmen Priorit\u00e4t haben.",
    },
    {
      title: "Individuelles Angebot",
      description:
        "Innerhalb weniger Tage erhalten Sie ein transparentes Angebot \u2013 zugeschnitten auf Ihren tats\u00e4chlichen Bedarf. Keine Pauschalen, keine versteckten Kosten.",
    },
  ] as ErstanalyseStep[],
  benefits: [
    {
      icon: "Gift",
      title: "Kostenlos & unverbindlich",
      description: "Die Erstanalyse kostet Sie nichts. Erst danach entscheiden Sie in Ruhe, ob und wie wir zusammenarbeiten.",
    },
    {
      icon: "MapPin",
      title: "Pers\u00f6nlich vor Ort",
      description:
        "Wir kommen in Ihren Betrieb. Nur so k\u00f6nnen wir die reale Situation beurteilen \u2013 nicht vom Schreibtisch aus.",
    },
    {
      icon: "Zap",
      title: "Sofortige Klarheit",
      description:
        "Nach dem Termin wissen Sie genau, wo Sie stehen: Was ist in Ordnung, was muss angepackt werden.",
    },
    {
      icon: "ShieldCheck",
      title: "Rechtssicherheit",
      description:
        "Sie erfahren, ob Ihre Dokumentation einer BG-Pr\u00fcfung standh\u00e4lt \u2013 und was ggf. fehlt.",
    },
  ] as ErstanalyseBenefit[],
  erstanalyseFaqs: [
    {
      question: "Wie lange dauert die Erstanalyse?",
      answer:
        "In der Regel 1\u20132 Stunden, je nach Betriebsgr\u00f6\u00dfe. F\u00fcr kleine Betriebe (unter 20 Mitarbeitende) reicht oft eine Stunde. Die Besprechung der Ergebnisse findet direkt im Anschluss statt.",
    },
    {
      question: "Muss ich etwas vorbereiten?",
      answer:
        "Idealerweise halten Sie vorhandene Unterlagen bereit: Gef\u00e4hrdungsbeurteilungen, Unterweisungsnachweise, Pr\u00fcfprotokolle. Aber keine Sorge \u2013 wenn nichts da ist, wissen wir auch damit umzugehen.",
    },
    {
      question: "Bin ich danach zu etwas verpflichtet?",
      answer:
        "Nein. Die Erstanalyse ist v\u00f6llig unverbindlich. Sie erhalten ein Angebot und entscheiden dann in Ruhe. Kein Abo, kein Kleingedrucktes, kein Druck.",
    },
    {
      question: "F\u00fcr welche Betriebsgr\u00f6\u00dfen ist die Erstanalyse geeignet?",
      answer:
        "F\u00fcr alle. Vom Handwerksbetrieb mit 3 Mitarbeitenden bis zum Mittelst\u00e4ndler mit 200+ Besch\u00e4ftigten. Die gesetzliche Pflicht zur sicherheitstechnischen Betreuung gilt ab dem ersten Mitarbeiter.",
    },
    {
      question: "Was kostet die Betreuung danach?",
      answer:
        "Das h\u00e4ngt von der Betriebsgr\u00f6\u00dfe, der Branche und dem Betreuungsumfang ab. Nach der Erstanalyse erhalten Sie ein transparentes Angebot mit klarer Aufstellung \u2013 keine Pauschalen, keine \u00dcberraschungen.",
    },
  ],
};
