"use client";

import { useState } from "react";
import Image from "next/image";
import BioModal from "./BioModal";

export interface TeamMember {
  name: string;
  role: string;
  img: string;
  bio: string;
}

interface TeamSectionProps {
  leadership: TeamMember[];
  advisors: TeamMember[];
}

export default function TeamSection({ leadership, advisors }: TeamSectionProps) {
  const [active, setActive] = useState<TeamMember | null>(null);

  return (
    <>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto items-start">
            {leadership.map((person) => (
              <button
                key={person.name}
                type="button"
                onClick={() => person.bio && setActive(person)}
                className={`text-center group ${person.bio ? "cursor-pointer" : "cursor-default"}`}
              >
                <div className="w-40 h-40 mx-auto mb-5 rounded-full bg-gradient-to-br from-slate-100 to-slate-50 border-2 border-slate-200 overflow-hidden relative shrink-0 group-hover:border-brand-blue/50 group-hover:shadow-lg transition-all duration-300">
                  <Image
                    src={person.img}
                    alt={person.name}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                  {person.name}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{person.role}</p>
                {person.bio && (
                  <p className="text-xs text-brand-blue mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click for bio
                  </p>
                )}
              </button>
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
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-start">
            {advisors.map((a) => (
              <button
                key={a.name}
                type="button"
                onClick={() => a.bio && setActive(a)}
                className={`text-center group ${a.bio ? "cursor-pointer" : "cursor-default"}`}
              >
                <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-100 to-slate-50 border-2 border-slate-200 overflow-hidden relative shrink-0 group-hover:border-brand-blue/50 group-hover:shadow-lg transition-all duration-300">
                  <Image
                    src={a.img}
                    alt={a.name}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <h3 className="font-semibold text-sm text-slate-900 group-hover:text-brand-blue transition-colors">
                  {a.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {a.role}
                </p>
                {a.bio && (
                  <p className="text-xs text-brand-blue mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click for bio
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bio Modal ── */}
      {active && (
        <BioModal
          name={active.name}
          role={active.role}
          bio={active.bio}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}
