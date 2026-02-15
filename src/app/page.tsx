import Image from "next/image";
import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import BelowFoldSections from "@/components/BelowFoldSections";

const Carousel = dynamic(() => import("@/components/Carousel"), {
  loading: () => <div className="min-h-[480px] bg-navy" />,
});

/* ─── Above-fold data only ────────────────────────────────────────── */

const STATS = [
  {
    value: "$890B",
    label: "Health economic impact each year",
    sub: "Massive financial strain",
    color: "text-accent-green",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    value: "$1T",
    label: "Disease cost by 2034",
    sub: "First trillion-dollar disease",
    color: "text-accent-purple",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    value: "30 Yrs",
    label: "Since last new treatment",
    sub: "Innovation stagnation in ischemic stroke",
    color: "text-brand-red",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    value: "900K",
    label: "Annual strokes in the US",
    sub: "70% addressable market",
    color: "text-brand-blue",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

/* ─── Structured Data (JSON-LD) ───────────────────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Alevian",
  url: "https://alevian.bio",
  description:
    "Preclinical-stage biotechnology company developing GDF11-based regenerative therapeutics for stroke and neurological disease. Lead candidate ALE-001 targets a $14 billion US market in acute ischemic stroke with a 72-hour treatment window.",
  foundingDate: "2024",
  industry: "Biotechnology",
  email: "luis@alevian.bio",
  areaServed: "US",
  sameAs: [],
  knowsAbout: [
    "GDF11",
    "Stroke Therapeutics",
    "Neuroregeneration",
    "Regenerative Medicine",
    "Neuroprotection",
    "Traumatic Brain Injury",
    "Intracerebral Hemorrhage",
    "Preclinical Drug Development",
    "Phase I Clinical Trials",
    "Neurology Pipeline",
    "Biotech Investment",
    "Series A Fundraising",
    "Venture Capital Life Sciences",
  ],
  member: [
    { "@type": "Person", name: "Seb Giwa PhD", jobTitle: "Executive Chairman" },
    { "@type": "Person", name: "Tony Sandrasagra PhD", jobTitle: "Chief Science Officer" },
    { "@type": "Person", name: "David Hoey", jobTitle: "Executive Advisor" },
  ],
  funding: {
    "@type": "MonetaryGrant",
    name: "Series A Financing",
    description: "Series A fundraising round for advancing ALE-001 through Phase I clinical trials for acute ischemic stroke.",
    funder: {
      "@type": "Organization",
      name: "Alevian",
    },
  },
};

const medicalJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Alevian",
  url: "https://alevian.bio",
  description:
    "Developing ALE-001, a recombinant GDF11 therapeutic for acute ischemic stroke with a 72-hour treatment window. Addressing an unmet medical need with no approved therapies in the acute stroke setting.",
  medicalSpecialty: "Neurology",
};

const investmentJsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchProject",
  name: "ALE-001 Stroke Therapeutics Program",
  description:
    "Preclinical regenerative therapeutic targeting the GDF11 pathway for acute ischemic stroke. 72-hour treatment window vs 4.5 hours for current standard of care. $14 billion addressable US market. Backed by Harvard research from Lee Rubin, Amy Wagers, and Rich Lee laboratories.",
  url: "https://alevian.bio/#pipeline",
  funder: { "@type": "Organization", name: "Alevian" },
  sponsor: { "@type": "Organization", name: "Alevian" },
};

const bioChemEntityJsonLd = {
  "@context": "https://schema.org",
  "@type": "ChemicalSubstance",
  name: "ALE-001",
  description:
    "Recombinant GDF11-based regenerative therapeutic for acute ischemic stroke. Extends the treatment window from 4.5 hours to 72 hours by reducing inflammation, promoting neovascularization, stimulating neurogenesis, and improving functional recovery.",
  url: "https://alevian.bio/#pipeline",
  chemicalRole: "Therapeutic",
  potentialAction: {
    "@type": "Action",
    name: "Neuroprotective and regenerative treatment for acute ischemic stroke",
    target: "Acute Ischemic Stroke",
  },
};

/* ─── Page ────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(investmentJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bioChemEntityJsonLd) }}
      />

      {/* ── Navigation ── */}
      <NavBar />

      {/* ── Hero ── */}
      <section id="home" className="relative pt-16 overflow-hidden">
        <div className="hero-gradient relative min-h-[43vh] flex items-center">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-brand-blue/30 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
                Unlock the Brain&apos;s{" "}
                <span className="bg-gradient-to-r from-accent-green to-accent-purple bg-clip-text text-transparent">
                  Regenerative
                </span>{" "}
                Pathway
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-lg mb-10">
                The brain can rewire itself&nbsp;&mdash;&nbsp;we provide the signal.
              </p>
              <div className="flex gap-4">
                <a
                  href="#approach"
                  className="px-6 py-3 rounded-lg bg-white text-brand-blue font-semibold text-sm hover:bg-slate-100 transition"
                >
                  Our Approach
                </a>
                <a
                  href="#pipeline"
                  className="px-6 py-3 rounded-lg border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition"
                >
                  View Pipeline
                </a>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="relative w-[620px] h-[500px]" style={{ maskImage: "radial-gradient(ellipse 70% 70% at center, black 35%, transparent 68%)", WebkitMaskImage: "radial-gradient(ellipse 70% 70% at center, black 35%, transparent 68%)" }}>
                <Image
                  src="/images/brain-hero.webp"
                  alt="Brain neuroregeneration"
                  fill
                  className="object-contain mix-blend-lighten"
                  sizes="620px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Unmet Need — Stats ── */}
      <section id="unmet-need" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-red mb-3">
              Unmet Need
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Opportunity to Improve Quality of Life
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div
                key={s.value}
                className="stat-card bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm"
              >
                <div className={`${s.color} mb-4`}>{s.icon}</div>
                <p className={`text-3xl font-bold ${s.color} mb-1`}>{s.value}</p>
                <p className="text-sm font-semibold text-slate-800 mb-1">
                  {s.label}
                </p>
                <p className="text-xs text-slate-500">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Carousel / Slideshow ── */}
      <section>
        <Carousel />
      </section>

      {/* ── Lazy-loaded below-fold content ── */}
      <BelowFoldSections />
    </div>
  );
}
