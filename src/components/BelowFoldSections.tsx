import Image from "next/image";
import AlevianLogo from "@/components/AlevianLogo";
import TeamSection from "@/components/TeamSection";
import type { TeamMember } from "@/components/TeamSection";

/* ─── Build Timestamp ─────────────────────────────────────────────── */

const BUILD_TIMESTAMP = (() => {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const time = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  const date = `${pad(d.getDate())}:${months[d.getMonth()]}:${String(d.getFullYear()).slice(2)}`;
  return `Build ${time} || ${date}`;
})();

/* ─── Data ────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Unmet Need", href: "#unmet-need" },
  { label: "Approach", href: "#approach" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Publications", href: "#publications" },
  { label: "GDF11 Science", href: "#gdf11-science" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const PIPELINE = [
  { indication: "Acute Ischemic Stroke", progress: 50, phase: "Late Preclinical", candidate: "ALE-001" },
  { indication: "Intracerebral Hemorrhage", progress: 40, phase: "Mid Preclinical", candidate: "ALE-001" },
  { indication: "Traumatic Brain Injury", progress: 38, phase: "Mid Preclinical", candidate: "ALE-001" },
  { indication: "Chronic Stroke", progress: 25, phase: "Discovery", candidate: "ALE-002" },
  { indication: "Metabolic Disease", progress: 22, phase: "Discovery", candidate: "ALE-002" },
];

const LEADERSHIP: TeamMember[] = [
  {
    name: "Sebastian Eriksson Giwa, PhD, MBA",
    role: "Chairman & Co-Founder",
    img: "/images/team/seb-giwa.webp",
    bio: "Dr. Sebastian Eriksson Giwa is Chairman and Co-Founder of Alevian Inc. and an experienced biotech entrepreneur with a strong track record of company formation, capital raising, and strategic execution. A Harvard MBA and Baker Scholar, Dr. Giwa has helped raise more than $250 million from venture capital, strategic partners, and federal funding sources across multiple biotechnology ventures.\n\nHe is currently Founder and CEO of Expanse Bio and Sylvatica Biotech. Previously, he was the founding CEO of Ossium Inc. (now Ossium Health), where he led the company from inception through the buildout of a fully industrialized cGMP manufacturing platform and FDA clearance across multiple clinical indications. Ossium is backed by leading investors including General Catalyst, Village Global, First Round Capital, and Vivo Capital.\n\nDr. Giwa also served as Executive Chairman and Co-Founder of Harvard spin-out Elevian Inc., where he helped lead venture financings and in-license a broad intellectual property portfolio focused on age-related diseases, including stroke, Alzheimer\u2019s disease, and metabolic disorders. Earlier, he was Founding CEO of the Organ Preservation Alliance and a founding executive team member of the American Society of Transplantation\u2019s Organ Preservation and Procurement Community of Practice.\n\nAt Alevian, Dr. Giwa leverages his expertise in capital formation, governance, and strategic growth to support the company\u2019s mission of advancing first-in-class therapies for stroke recovery and regenerative medicine.",
  },
  {
    name: "Anthony Sandrasagra, PhD",
    role: "Chief Scientific Officer & Co-Founder",
    img: "/images/team/tony-sandrasagra.webp",
    bio: "Dr. Anthony Sandrasagra is Chief Scientific Officer and Co-Founder of Alevian Inc., where he leads the company\u2019s scientific strategy and oversees advancement of its therapeutic pipeline toward clinical development. He brings more than 25 years of pharmaceutical and biopharmaceutical R&D experience, with a proven track record of progressing drug programs from target identification through early clinical studies (Phase I/II). Dr. Sandrasagra is a named inventor on more than 20 issued patents and patent applications. Prior to Alevian, Dr. Sandrasagra served as Senior Vice President of R&D at Elevian, where he helped define the company\u2019s research direction and advance its GDF11-focused pipeline for stroke and aging-related diseases.\n\nDr. Sandrasagra has held senior leadership roles across multiple successful biotechnology companies, including VP of R&D at Mesoblast, CSO of Provasculon, and CSO of EpiGenesis Pharmaceuticals. Earlier in his career, he led small-molecule discovery programs at XTL Biopharmaceuticals and as Head of Gene Expression and Protein Sciences at HRPI/HMR/Aventis (now Sanofi), led the Bridgewater NJ site biotechnology function and contributed to drug discovery programs from target identification and screening through to drug candidate selection for the US CNS, Respiratory, and Oncology Disease Groups.\n\nThroughout his career, Dr. Sandrasagra has built and led integrated R&D organizations spanning protein sciences, discovery, preclinical development, toxicology, CMC/manufacturing, biomarker development, and clinical pharmacology. At Alevian, he has assembled a highly experienced team of biotech executives, scientists, and clinical experts to efficiently advance recombinant GDF11 toward clinical proof of concept and value inflection.",
  },
  {
    name: "David Hoey",
    role: "Executive Advisor",
    img: "/images/team/david-hoey.webp",
    bio: "",
  },
  {
    name: "Ori S. Cohen, PhD",
    role: "Senior Director, Preclinical & Translational Research & Co-Founder",
    img: "/images/team/ori-cohen.webp",
    bio: "Dr. Ori S. Cohen is Senior Director of Preclinical & Translational Research and Co-Founder of Alevian Inc., where he leads execution of the company\u2019s preclinical and translational development strategy. He brings more than 20 years of experience in translational medicine, with deep expertise in biomarker discovery, pharmacology, toxicology, and IND-enabling preclinical development.\n\nAt Alevian, Dr. Cohen oversees all preclinical programs, sponsored research, and external CRO and academic collaborations, ensuring disciplined study design, capital efficiency, and alignment with regulatory and clinical objectives. His work spans translational biomarker strategy, pharmacokinetics, biodistribution, dose optimization, toxicology, and the design and execution of disease-relevant in vivo models to guide dose selection and clinical translation. Dr. Cohen integrates scientific rigor with operational execution, helping position Alevian\u2019s programs for efficient progression toward clinical milestones and value creation.\n\nDr. Cohen has extensive hands-on experience designing and executing biochemical and cell-based assays, as well as conducting histological and imaging-based analyses in neuroscience and regenerative medicine. Prior to co-founding Alevian, he was a Senior Scientist at Elevian, where he played a key role in advancing recombinant GDF11 protein therapeutics for stroke recovery. Earlier in his career, he held research and leadership positions at The Scripps Research Institute, SUNY Upstate Medical University, and Massachusetts General Hospital.",
  },
];

const ADVISORS: TeamMember[] = [
  { name: "Rajiv R. Ratan, MD, PhD", role: "CEO, Burke Neurological Institute; Professor Neurology, Weill Cornell Medicine", img: "/images/advisory/rajiv-ratan.webp", bio: "Dr. Rajiv R. Ratan is the Burke Professor of Neurology and Neuroscience at Weill Cornell Medicine and Chief Executive Officer of the Burke Neurological Institute. His research focuses on the molecular programs that enable the brain to respond to injury and promote repair following intracerebral hemorrhage (ICH), ischemic stroke, and chronic stroke.\n\nSince 2003, Dr. Ratan leads the world class efforts at the Burke Neurological Institute dedicated to curing neurological disability after patients have exhausted standard treatment options. His expertise spans both preclinical models and clinical trial development in stroke and spinal cord injury, bringing a uniquely translational perspective to Alevian\u2019s neurorestorative programs." },
  { name: "Steven C. Cramer, MD", role: "Professor Neurology, UCLA; Medical Director, California Rehabilitation Institute", img: "/images/advisory/steven-cramer.webp", bio: "Dr. Steven C. Cramer is Professor of Neurology and the Susan and David Wilstein Chair in Rehabilitation Medicine at UCLA. He also serves as Medical Director of Research at California Rehabilitation Institute, co-PI of the NIH StrokeNet clinical trials network, and Associate Editor for Neurorehabilitation and Neural Repair.\n\nDr. Cramer\u2019s research focuses on neural repair after central nervous system injury, particularly stroke, with an emphasis on recovery of movement. His work integrates drug therapies, brain stimulation, robotics, cellular therapies, and biomarker-guided rehabilitation strategies. He is the author of more than 350 scientific publications and co-editor of Brain Repair After Stroke. His clinical and translational insights are critical to Alevian\u2019s approach to post-stroke recovery." },
  { name: "Seth Finklestein, MD", role: "Neurologist, Mass General Hospital; Senior Lecturer, Harvard Medical School", img: "/images/advisory/seth-finklestein.webp", bio: "Dr. Seth Finklestein is a practicing neurologist at Massachusetts General Hospital, Senior Lecturer at Harvard Medical School, and CEO of Recovery Therapeutics, Inc. A recognized authority in ischemic stroke recovery, Dr. Finklestein has spent decades studying growth factors and repair mechanisms in the injured brain.\n\nPreviously, he directed the NIH-funded CNS Growth Factor Research Laboratory at MGH and served as VP and Head of Neuroscience at ViaCell. He also founded Biotrofix, a preclinical CRO. His extensive experience in neurology, translational research, and drug development makes him a key advisor to Alevian\u2019s rGDF11 stroke program." },
  { name: "Lee Rubin, PhD", role: "Professor, Stem Cell and Regenerative Biology, Harvard", img: "/images/advisory/lee-rubin.webp", bio: "Dr. Lee Rubin is Professor of Stem Cell and Regenerative Biology at Harvard University and Director of Translational Medicine at the Harvard Stem Cell Institute. With nearly two decades of CNS drug development experience across industry and academia, Dr. Rubin is a leader in neurodegenerative disease modeling and translational neuroscience.\n\nHis research focuses on developing advanced preclinical systems to discover therapies for neurodegeneration and brain aging. He has held senior roles at Athena Neurosciences, Eisai, and Curis and serves on numerous scientific advisory boards. Dr. Rubin provides Alevian with deep expertise in translational strategy and CNS drug discovery." },
  { name: "Richard T. Lee, MD", role: "Professor, Stem Cell and Regenerative Biology, Harvard", img: "/images/advisory/rich-lee.webp", bio: "Dr. Richard T. Lee is Professor of Stem Cell and Regenerative Biology at Harvard University and Professor of Medicine at Harvard Medical School. He is also Leader of the Cardiovascular Program at the Harvard Stem Cell Institute and a practicing cardiologist at Brigham and Women\u2019s Hospital.\n\nDr. Lee\u2019s research focuses on the molecular mechanisms underlying heart failure, metabolic disease, and aging. His work has been instrumental in understanding how systemic factors influence cardiovascular decline and regenerative capacity, directly informing Alevian\u2019s studies on GDF11 and systemic aging." },
  { name: "Amy Wagers, PhD", role: "Professor, Stem Cell and Regenerative Biology, Harvard", img: "/images/advisory/amy-wagers.webp", bio: "Dr. Amy Wagers is the Forst Family Professor of Stem Cell and Regenerative Biology at Harvard University and a leading authority on stem cell aging and regeneration. Her research explores how inter-tissue communication and blood-borne factors regulate stem cell function and tissue repair across the lifespan.\n\nDr. Wagers\u2019 pioneering work demonstrated that age-related decline in muscle, heart, and brain function can be reversed through modulation of circulating factors, including GDF11. Her discoveries have helped shape modern understanding of systemic aging and regenerative biology and provide foundational scientific insight for Alevian\u2019s therapeutic strategy." },
  { name: "Mark Leslie", role: "Managing Director, Leslie Ventures; Lecturer, Stanford GSB", img: "/images/advisory/mark-leslie.webp", bio: "Mark Leslie is Managing Director of Leslie Ventures and a seasoned technology executive, entrepreneur, and investor. He is also a Lecturer in Management at Stanford Graduate School of Business, where he teaches entrepreneurship, ethics, and sales organization.\n\nMr. Leslie was Founder, Chairman, and CEO of Veritas Software, which he led for eleven years, growing it to 6,000 employees and $1.5 billion in annual revenue. Over the past 25 years, he has served on more than 50 public and private boards and currently sits on the boards of Stanford Health Care and the NYU Board of Trustees.\n\nMr. Leslie brings extensive experience in scaling organizations, governance, and strategic leadership to support Alevian\u2019s long-term growth." },
];

const PUBLICATIONS = [
  { title: "Stroke Journal Publication", img: "/images/publications/stroke-journal.webp", pdf: "/publications/cohen-et-al-recombinant-gdf11.pdf" },
  { title: "ISC2025 Biomarkers Poster", img: "/images/publications/biomarkers-poster.webp", pdf: "/publications/ISC2025-Biomarkers-Poster.pdf" },
  { title: "ISC2025 ICH and TBI Poster", img: "/images/publications/ich-tbi-poster.webp", pdf: "/publications/ISC2025-ICH-TBI-Poster.pdf" },
  { title: "Mendelian Randomization Summary of GDF11", img: "/images/publications/mr-summary.webp", pdf: "/publications/GDF11-MR-Summary-Alevian.pdf" },
];

const GDF11_BRAIN: {
  title: string;
  authors: string;
  journal: string;
  year: number;
  url: string;
  badge?: string;
}[] = [
  {
    title: "Identification of Novel Therapeutic Targets for Cognitive Performance and Associations with Brain Health",
    authors: "Zhang, Liu et al.",
    journal: "Translational Psychiatry",
    year: 2025,
    url: "https://doi.org/10.1038/s41398-025-03437-w",
    badge: "Mendelian Randomization Study",
  },
  {
    title: "Novel Insights into the Pleiotropic Health Effects of Growth Differentiation Factor 11 Gained from Genome-Wide Association Studies in Population Biobanks",
    authors: "Strosahl, Ye, Pazdro",
    journal: "BMC Genomics",
    year: 2024,
    url: "https://doi.org/10.1186/s12864-024-10710-7",
    badge: "GWAS / PheWAS Study",
  },
  {
    title: "GDF11 Rejuvenates Cerebrovascular Structure and Function in an Animal Model of Alzheimer's Disease",
    authors: "Zhang et al.",
    journal: "Journal of Alzheimer's Disease",
    year: 2018,
    url: "https://doi.org/10.3233/JAD-170474",
  },
  {
    title: "GDF11 Improves Neurobehavioral Recovery and Stimulates Angiogenesis in Rats Subjected to Cerebral Ischemia/Reperfusion",
    authors: "Ma et al.",
    journal: "Brain Research",
    year: 2018,
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0361923017306007",
  },
  {
    title: "GDF11 Promotes Neurovascular Recovery After Stroke in Mice",
    authors: "Xiao et al.",
    journal: "Frontiers in Cellular Neuroscience",
    year: 2018,
    url: "https://dx.doi.org/10.3389/fncel.2018.00205",
  },
  {
    title: "Growth Differentiation Factor-11 Supplementation Improves Survival and Promotes Recovery After Ischemic Stroke in Aged Mice",
    authors: "Hudobenko et al.",
    journal: "Aging",
    year: 2020,
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7244081/",
  },
];

const GDF11_METABOLIC = [
  {
    title: "GDF11 Attenuates Development of Type 2 Diabetes via Improvement of Islet \u03B2-Cell Function and Survival",
    authors: "Li et al.",
    journal: "Diabetes",
    year: 2017,
    url: "http://diabetes.diabetesjournals.org/content/66/7/1914",
  },
  {
    title: "Neuroprotective Potential of GDF11 in Experimental Intracerebral Hemorrhage in Elderly Rats",
    authors: "Xiao et al.",
    journal: "Journal of Clinical Neuroscience",
    year: 2019,
    url: "https://www.jocn-journal.com/article/S0967-5868(18)31760-0/fulltext",
  },
  {
    title: "GDF11 Improves Angiogenic Function of EPCs in Diabetic Limb Ischemia",
    authors: "Zhang et al.",
    journal: "Diabetes",
    year: 2018,
    url: "https://doi.org/10.2337/db17-1583",
  },
  {
    title: "Systemic GDF11 Stimulates the Secretion of Adiponectin and Induces a Calorie Restriction-Like Phenotype in Aged Mice",
    authors: "Katsimpardi et al.",
    journal: "Aging Cell",
    year: 2019,
    url: "https://doi.org/10.1111/acel.13038",
  },
  {
    title: "Exogenous GDF11, but Not GDF8, Reduces Body Weight and Improves Glucose Homeostasis in Mice",
    authors: "Walker, RG et al.",
    journal: "Scientific Reports",
    year: 2020,
    url: "https://www.nature.com/articles/s41598-020-61443-y",
  },
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

/* ─── Component ───────────────────────────────────────────────────── */

export default function BelowFoldSections() {
  return (
    <>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    loading="lazy"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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

      {/* ── GDF11 Science ── */}
      <section id="gdf11-science" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-red mb-3">
              GDF11 Science
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Peer-Reviewed Research
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A growing body of published research demonstrates GDF11&apos;s potential to promote neuroregeneration, improve stroke recovery, and address metabolic disease.
            </p>
          </div>

          {/* Brain / Neurological */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.47 4.306a2.25 2.25 0 01-2.133 1.544H8.603a2.25 2.25 0 01-2.134-1.544L5 14.5m14 0H5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Brain &amp; Neurological Recovery</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {GDF11_BRAIN.map((paper) => (
                <a
                  key={paper.title}
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex gap-4 p-5 bg-white rounded-xl border shadow-sm hover:shadow-md transition ${paper.badge ? "border-brand-blue/40 ring-1 ring-brand-blue/10" : "border-slate-200/80 hover:border-brand-blue/30"}`}
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-blue/5 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    {paper.badge && (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue mb-1.5">
                        {paper.badge}
                      </span>
                    )}
                    <p className="text-sm font-semibold text-slate-900 group-hover:text-brand-blue transition-colors leading-snug mb-1">
                      {paper.title}
                    </p>
                    <p className="text-xs text-slate-500">
                      {paper.authors} &middot; <span className="italic">{paper.journal}</span>, {paper.year}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-brand-blue shrink-0 mt-1 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Metabolic Disease */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Metabolic &amp; Age-Related Disease</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {GDF11_METABOLIC.map((paper) => (
                <a
                  key={paper.title}
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 p-5 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-accent-green/30 transition"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-green/5 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 group-hover:text-accent-green transition-colors leading-snug mb-1">
                      {paper.title}
                    </p>
                    <p className="text-xs text-slate-500">
                      {paper.authors} &middot; <span className="italic">{paper.journal}</span>, {paper.year}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-accent-green shrink-0 mt-1 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership + Advisory Board (with bio modals) ── */}
      <TeamSection leadership={LEADERSHIP} advisors={ADVISORS} />

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
              <div className="flex flex-wrap justify-end gap-x-4 gap-y-2">
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
            <span>&copy; 2025 Alevian. All rights reserved. &nbsp;|&nbsp; {BUILD_TIMESTAMP}</span>
            <span>Stroke Therapeutics &amp; Neuroregeneration</span>
          </div>
        </div>
      </footer>
    </>
  );
}
