import Image from "next/image";
import Carousel from "@/components/Carousel";
import AlevianLogo from "@/components/AlevianLogo";
import NavBar from "@/components/NavBar";

/* ─── Data ────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Unmet Need", href: "#unmet-need" },
  { label: "Approach", href: "#approach" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Publications", href: "#publications" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

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

const PIPELINE = [
  { indication: "Acute Ischemic Stroke", progress: 50, phase: "Late Preclinical", candidate: "ALE-001" },
  { indication: "Intracerebral Hemorrhage", progress: 40, phase: "Mid Preclinical", candidate: "ALE-001" },
  { indication: "Traumatic Brain Injury", progress: 38, phase: "Mid Preclinical", candidate: "ALE-001" },
  { indication: "Chronic Stroke", progress: 25, phase: "Discovery", candidate: "ALE-002" },
  { indication: "Metabolic Disease", progress: 22, phase: "Discovery", candidate: "ALE-002" },
];

const LEADERSHIP = [
  { name: "Seb Giwa PhD", role: "Executive Chairman", img: "/images/team/seb-giwa.webp" },
  { name: "Tony Sandrasagra PhD", role: "Chief Science Officer", img: "/images/team/tony-sandrasagra.webp" },
  { name: "David Hoey", role: "Executive Advisor", img: "/images/team/david-hoey.png" },
];

const ADVISORS = [
  { name: "Lee Rubin PhD", role: "Professor, Stem Cell and Regenerative Biology, Harvard", img: "/images/advisory/lee-rubin.webp" },
  { name: "Amy Wagers PhD", role: "Professor, Stem Cell and Regenerative Biology, Harvard", img: "/images/advisory/amy-wagers.webp" },
  { name: "Rich Lee MD", role: "Professor, Stem Cell and Regenerative Biology, Harvard", img: "/images/advisory/rich-lee.webp" },
  { name: "Steven Cramer, MD", role: "Professor Neurology, UCLA; Medical Director, California Rehabilitation Institute", img: "/images/advisory/steven-cramer.webp" },
  { name: "Seth Finklestein, MD", role: "Mass General Hospital, Harvard Medical School", img: "/images/advisory/seth-finklestein.webp" },
  { name: "Rajiv Ratan MD, PhD", role: "CEO, Burke Neurological Institute; Professor Neurology, Weill Cornell Medicine", img: "/images/advisory/rajiv-ratan.jpg" },
  { name: "Mark Leslie", role: "Managing Director, Leslie Ventures, Stanford GSB", img: "/images/advisory/mark-leslie.webp" },
];

const PUBLICATIONS = [
  { title: "Stroke Journal Publication", img: "/images/publications/stroke-journal.jpg", pdf: "/publications/cohen-et-al-recombinant-gdf11.pdf" },
  { title: "ISC2025 Biomarkers Poster", img: "/images/publications/biomarkers-poster.png", pdf: "/publications/ISC2025-Biomarkers-Poster.pdf" },
  { title: "ISC2025 ICH and TBI Poster", img: "/images/publications/ich-tbi-poster.png", pdf: "/publications/ISC2025-ICH-TBI-Poster.pdf" },
];

const INDICATIONS = [
  {
    name: "Acute Ischemic Stroke",
    stage: "Entering Phase I Clinical Trials",
    desc: "Our most advanced program targets the acute phase of stroke recovery, where no approved therapies exist. ALE-001 is progressing toward first-in-human studies.",
  },
  {
    name: "Intracerebral Hemorrhage",
    stage: "Mid-Stage Preclinical",
    desc: "Hemorrhagic stroke carries even higher mortality and disability rates than ischemic stroke. ALE-001's anti-inflammatory and vascular-repair properties address secondary injury cascades.",
  },
  {
    name: "Chronic Ischemic Stroke",
    stage: "Discovery",
    desc: "Millions of stroke survivors live with long-term disability, with no approved therapies to restore brain function months to years after injury.",
  },
  {
    name: "Traumatic Brain Injury",
    stage: "Mid-Stage Preclinical",
    desc: "With over 2 million U.S. cases annually and no disease-modifying treatments available, TBI represents a substantial opportunity.",
  },
  {
    name: "Metabolic & Age-Related Disease",
    stage: "Discovery",
    desc: "Expanding our platform into indications driven by chronic inflammation, vascular decline, and impaired tissue maintenance.",
  },
];

/* ─── Page ────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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
              <div className="relative w-[620px] h-[500px]" style={{ maskImage: "radial-gradient(ellipse 65% 100% at center, black 35%, transparent 68%)", WebkitMaskImage: "radial-gradient(ellipse 65% 100% at center, black 35%, transparent 68%)" }}>
                <Image
                  src="/images/brain-hero.jpg"
                  alt="Brain neuroregeneration"
                  fill
                  className="object-contain mix-blend-lighten"
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

      {/* ── Vision & Mission + Approach ── */}
      <section id="approach" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-red mb-3">
                Vision &amp; Mission
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Restoring quality of life through regenerative biology
              </h2>
              <p className="text-slate-600 leading-relaxed">
                At Alevian, our vision is to restore quality of life for patients
                with debilitating neurological and aging-related diseases by
                precisely targeting biological mechanisms that promote repair and
                regeneration. Our mission is to develop innovative biologics that
                activate the body&apos;s intrinsic repair systems to reverse the
                damage caused by injury, chronic disease, and aging.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-red mb-3">
                Approach
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Targeting untapped therapeutic windows
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Alevian is pioneering a new class of regenerative therapeutics
                designed to modulate the molecular cascades activated in the
                critical hours, days, and weeks following neurological and systemic
                injury. Unlike traditional approaches that focus solely on restoring
                blood flow or providing nonspecific protection, Alevian&apos;s platform
                targets the precise signaling events that drive tissue damage and
                limit recovery.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Central to this strategy is our work on the GDF11 signaling pathway
                and its downstream effectors, which regulate cellular stress
                responses, inflammatory signaling, vascular remodeling, and
                regenerative capacity across multiple tissues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platform Built on Regenerative Science ── */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-green mb-3">
              Platform
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built on Regenerative Science
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Our programs harness GDF11, a naturally occurring growth factor in the
              TGF-&beta; superfamily that orchestrates the body&apos;s repair response.
              ALE-001 is an engineered recombinant form of GDF11 designed to
              reactivate repair mechanisms when patients need them most: after
              injury, when the window for conventional intervention has closed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { label: "Anti-inflammatory", desc: "Reduces harmful inflammation after injury" },
              { label: "Neurogenic", desc: "Supports growth of new neural tissue" },
              { label: "Angiogenic", desc: "Promotes vascular remodeling and blood flow" },
              { label: "Stem-cell driven", desc: "Activates endogenous stem cell repair" },
              { label: "Neuroprotective", desc: "Protects tissue from secondary damage" },
              { label: "Multi-mechanistic", desc: "One platform, multiple high-value indications" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-xl p-6 hover:bg-white/10 transition"
              >
                <p className="font-semibold text-white mb-1">{item.label}</p>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Indications ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-red mb-3">
              One Platform. Multiple High-Value Indications.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              ALE-001 Therapeutic Programs
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDICATIONS.map((ind) => (
              <div
                key={ind.name}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition"
              >
                <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue mb-4">
                  {ind.stage}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {ind.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pipeline ── */}
      <section id="pipeline" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-red mb-3">
              Pipeline
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Development Progress
            </h2>
          </div>

          {/* Desktop phase labels */}
          <div className="hidden md:grid grid-cols-[200px_1fr] gap-4 mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <div>Indication</div>
            <div className="grid grid-cols-4 text-center">
              <span>Discovery</span>
              <span>Preclinical</span>
              <span>Phase I</span>
              <span>Phase II/III</span>
            </div>
          </div>
          {/* Mobile phase labels */}
          <div className="md:hidden grid grid-cols-4 text-center mb-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            <span>Disc.</span>
            <span>Preclin.</span>
            <span>Ph I</span>
            <span>Ph II/III</span>
          </div>

          <div className="space-y-4">
            {PIPELINE.map((p) => (
              <div
                key={p.indication}
                className="grid md:grid-cols-[200px_1fr] gap-4 items-center bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm"
              >
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    {p.indication}
                  </p>
                  <p className="text-xs text-slate-500">{p.phase}</p>
                  <p className="text-xs text-slate-500">{p.candidate}</p>
                </div>
                <div className="relative h-4 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="pipeline-bar h-full transition-all duration-700"
                    style={{ width: `${p.progress}%` }}
                  />
                  <div className="absolute top-0 left-1/4 w-px h-full bg-slate-300/60" />
                  <div className="absolute top-0 left-2/4 w-px h-full bg-slate-300/60" />
                  <div className="absolute top-0 left-3/4 w-px h-full bg-slate-300/60" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Publications ── */}
      <section id="publications" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-red mb-3">
              Research
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Publications &amp; Poster Presentations
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {PUBLICATIONS.map((pub) => (
              <a
                key={pub.title}
                href={pub.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition block"
              >
                <div className="h-48 bg-slate-100 relative overflow-hidden">
                  <Image
                    src={pub.img}
                    alt={pub.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-800">
                    {pub.title}
                  </p>
                  <svg className="w-4 h-4 text-brand-blue shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section id="team" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-red mb-3">
              Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Leadership
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {LEADERSHIP.map((person) => (
              <div key={person.name} className="text-center group">
                <div className="w-40 h-40 mx-auto mb-5 rounded-full bg-gradient-to-br from-slate-100 to-slate-50 border-2 border-slate-200 overflow-hidden relative">
                  <Image
                    src={person.img}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <h3 className="font-bold text-slate-900">{person.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scientific & Medical Advisory Board ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-red mb-3">
              Advisors
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Scientific &amp; Medical Advisory Board
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {ADVISORS.map((a) => (
              <div key={a.name} className="text-center">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-100 to-slate-50 border-2 border-slate-200 overflow-hidden relative">
                  <Image
                    src={a.img}
                    alt={a.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <h3 className="font-semibold text-sm text-slate-900">
                  {a.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {a.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / Footer ── */}
      <footer id="contact" className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-green mb-3">
                Contact
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Contact Us
              </h2>
              <p className="text-slate-400 mb-8 max-w-md">
                Get in touch to learn more.
              </p>
              <a
                href="mailto:luis@alevian.bio?subject=Alevian%20Interest"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-brand-blue font-semibold text-sm hover:bg-slate-100 transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
            <div className="flex flex-col items-end gap-6">
              <AlevianLogo height={48} dark />
              <div className="flex flex-wrap justify-end gap-x-6 gap-y-2">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-xs text-slate-400 hover:text-white transition"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500">
            <span>&copy; 2025 Alevian. All rights reserved.</span>
            <span>Stroke Therapeutics &amp; Neuroregeneration</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
