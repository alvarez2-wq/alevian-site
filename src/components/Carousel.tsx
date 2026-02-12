"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

/* ── Slide 1: CTA ── */
function SlideCTA() {
  return (
    <div className="bg-navy flex flex-col items-center justify-center text-center px-8 md:px-20 py-16 md:py-24 min-h-[480px]">
      <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-6">
        Join us in making stroke a treatable condition
      </h2>
      <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
        Together we can expand the treatment window, protect the brain, and
        restore quality of life for millions.
      </p>
      <a
        href="#contact"
        className="px-6 py-3 rounded-lg bg-white text-brand-blue font-semibold text-sm hover:bg-slate-100 transition"
      >
        Get in Touch
      </a>
    </div>
  );
}

/* ── Slide 2: Stroke by the Numbers ── */
const GLOBAL_STATS = [
  { value: "Every 40s", label: "Someone has a stroke", sub: "Constant global urgency", color: "text-brand-red", border: "border-t-brand-red" },
  { value: "12 Million", label: "New strokes this year globally", sub: "Incidence rate rising", color: "text-brand-blue", border: "border-t-brand-blue" },
  { value: "100 Million", label: "Stroke survivors living with disability", sub: "Long-term care burden", color: "text-amber-500", border: "border-t-amber-500" },
  { value: "$890 Billion", label: "Health economic impact each year", sub: "Massive financial strain", color: "text-accent-green", border: "border-t-accent-green" },
  { value: "$1 Trillion", label: "Disease cost by 2034", sub: "First trillion dollar disease", color: "text-accent-purple", border: "border-t-accent-purple" },
  { value: "30 Years", label: "Since last new treatment approved", sub: "Innovation stagnation in ischemic stroke", color: "text-slate-700", border: "border-t-slate-400" },
];

function SlideNumbers() {
  return (
    <div className="bg-white px-8 md:px-20 py-12 md:py-16 min-h-[480px] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-navy mb-1">
          STROKE BY THE NUMBERS
        </h2>
        <p className="text-brand-blue font-medium mb-8">Globally</p>
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {GLOBAL_STATS.map((s) => (
            <div key={s.value} className={`border-t-4 ${s.border} pt-4`}>
              <p className={`text-xl md:text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs md:text-sm font-medium text-slate-800 mt-1">{s.label}</p>
              <p className="text-[10px] md:text-xs text-slate-500 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Slide 3: Opportunity to Beat Stroke ── */
function SlideOpportunity() {
  return (
    <div className="bg-white px-8 md:px-20 py-12 md:py-16 min-h-[480px] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-navy mb-8">
          OPPORTUNITY TO BEAT STROKE
        </h2>

        {/* Timeline */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2 text-xs md:text-sm">
            <span className="px-3 py-1 rounded-full border border-slate-300 text-slate-700 font-medium">Stroke Onset</span>
            <span className="px-3 py-1 rounded-full border border-brand-red text-brand-red font-medium">4.5 Hours</span>
            <div className="flex-1" />
            <span className="px-3 py-1 rounded-full border border-brand-blue text-brand-blue font-medium">1 to 3 Days</span>
          </div>
          <div className="flex h-4 rounded-full overflow-hidden">
            <div className="bg-brand-red w-[30%]" />
            <div className="bg-accent-green flex-1" />
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-xs text-brand-red font-medium">Hyperacute tPA window</span>
            <span className="text-xs text-brand-blue font-medium">Acute window</span>
          </div>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="border-t-2 border-brand-red pt-4">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Racing the Clock</h3>
            <p className="text-sm text-slate-600">Today&apos;s treatments (tPA and TNK) are limited by a strict time window.</p>
            <p className="text-sm text-slate-600 mt-2">Many patients miss the ideal window for tPA, leaving them without options.</p>
          </div>
          <div className="border-t-2 border-brand-blue pt-4">
            <h3 className="text-lg font-bold text-slate-900 mb-2">The Hidden Damage</h3>
            <p className="text-sm text-slate-600">Even after a clot is gone, the damage continues for several days and weeks.</p>
            <p className="text-sm text-slate-600 mt-2">Substantial neural damage occurs in the days after a clot is treated (reperfusion injury).</p>
          </div>
        </div>

        <p className="text-sm md:text-base font-semibold text-slate-800">
          No options currently exist to treat the <span className="text-brand-red">acute</span> window. We target what happens after you remove the clot.
        </p>
      </div>
    </div>
  );
}

/* ── Slide 4: How We Do It ── */
function SlideHowWeDoIt() {
  return (
    <div className="bg-white px-8 md:px-20 py-12 md:py-16 min-h-[480px] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-navy mb-3">
          HOW WE DO IT
        </h2>
        <p className="text-sm md:text-base text-slate-600 mb-8 max-w-2xl">
          ALE-001 targets the acute phase (post 24 hours) <span className="text-accent-green font-semibold">where no other therapies are available</span> by reducing inflammation, promoting neovascularization, stimulating neurogenesis, and improving functional recovery.
        </p>

        <div className="grid md:grid-cols-[1fr_320px] gap-8 items-start">
          {/* Steps */}
          <div className="space-y-4">
            {[
              { color: "border-l-brand-red bg-red-50", icon: "text-brand-red", title: "The Trigger", desc: "Hypoxia triggers cellular pathways that lead to rapid cell death and widespread inflammation." },
              { color: "border-l-amber-400 bg-amber-50", icon: "text-amber-500", title: "ALE-001 Intervention", desc: "Stops the damage cycle where it starts by significantly reducing inflammation and cell death." },
              { color: "border-l-accent-green bg-green-50", icon: "text-accent-green", title: "ALE-001 Regeneration & Repair", desc: "Promotes neovascularization, enhances neurogenesis, neural plasticity & functional recovery." },
            ].map((step) => (
              <div key={step.title} className={`border-l-4 ${step.color} rounded-r-lg p-4`}>
                <h4 className={`font-bold text-slate-900 text-sm`}>{step.title}</h4>
                <p className="text-xs md:text-sm text-slate-600 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Time Window Card */}
          <div className="bg-navy rounded-xl p-6 text-white">
            <h3 className="text-lg font-bold mb-4">The Time Window Advantage</h3>
            <div className="space-y-3 mb-4">
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Current Standard (tPA)</span>
                  <span>4.5 Hours</span>
                </div>
                <div className="h-2.5 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-400 rounded-full" style={{ width: "25%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-brand-red font-medium">ALE-001</span>
                  <span className="text-slate-300">72 Hours</span>
                </div>
                <div className="h-2.5 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-accent-green rounded-full" style={{ width: "100%" }} />
                </div>
                <p className="text-[10px] text-accent-green mt-1 text-right">16x Longer Window</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              By extending the treatment window to 3 days, we can treat patients who miss the initial tPA cutoff.
            </p>
            <div className="bg-accent-green/20 rounded-lg p-3 text-center">
              <p className="text-sm font-semibold text-accent-green">Ready for First in Human Studies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 5: Market Opportunity ── */
function SlideMarket() {
  return (
    <div className="bg-white px-8 md:px-20 py-12 md:py-16 min-h-[480px] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-navy mb-8">
          OPPORTUNITY TO IMPROVE QUALITY OF LIFE
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Economic Impact */}
          <div className="border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-4 text-sm">Economic Impact per Patient</h3>
            <div className="flex items-end gap-4 mb-2">
              <div className="flex flex-col items-center">
                <p className="text-xs text-slate-500 mb-2">Total: $150,000</p>
                <div className="w-16 bg-accent-green rounded-t" style={{ height: "160px" }} />
                <div className="w-16 bg-slate-300 rounded-b" style={{ height: "30px" }} />
              </div>
              <div className="flex-1 space-y-2">
                <div className="border border-dashed border-accent-green rounded px-3 py-1 inline-block">
                  <p className="text-[10px] text-slate-500">ALE-001 TARGET</p>
                </div>
                <p className="text-xl font-bold text-accent-green">$125,000</p>
                <p className="text-xs text-slate-500">Addressable health impact (Neuroprotection)</p>
                <div className="mt-4">
                  <p className="text-lg font-bold text-slate-700">$25,000</p>
                  <p className="text-xs text-slate-500">Initial treatment cost (Standard of Care)</p>
                </div>
              </div>
            </div>
          </div>

          {/* US Market Potential */}
          <div className="border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-4 text-sm">US Market Potential</h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="border border-slate-200 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-brand-blue">900,000</p>
                <p className="text-xs text-slate-600">Annual Strokes in the US</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-brand-red">70%</p>
                <p className="text-xs text-slate-600">Addressable Market (Expanded Window)</p>
              </div>
            </div>
            <div className="bg-navy rounded-xl p-5 text-center">
              <p className="text-xs uppercase tracking-wider text-accent-green font-semibold mb-1">
                Annual US Market Opportunity
              </p>
              <p className="text-4xl font-bold text-white">$14 Billion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Carousel ── */
const SLIDE_COMPONENTS = [SlideCTA, SlideNumbers, SlideOpportunity, SlideHowWeDoIt, SlideMarket];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 8000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {SLIDE_COMPONENTS.map((SlideComponent, i) => (
            <div key={i} className="embla__slide">
              <SlideComponent />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDE_COMPONENTS.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === selectedIndex
                ? "bg-brand-blue w-8"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>

      {/* Prev / Next */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 backdrop-blur flex items-center justify-center text-slate-600 transition"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 backdrop-blur flex items-center justify-center text-slate-600 transition"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
