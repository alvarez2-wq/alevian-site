"use client";

import { useState, useEffect } from "react";
import AlevianLogo from "./AlevianLogo";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Unmet Need", href: "#unmet-need" },
  { label: "Approach", href: "#approach" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Publications", href: "#publications" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  /* close menu on route-hash change (when user taps a link) */
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [open]);

  /* lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <AlevianLogo height={46} />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-slate-700"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            {/* Animated bars → X */}
            <span
              className={`absolute h-0.5 w-6 bg-current rounded transition-all duration-300 ${
                open ? "rotate-45 translate-y-0" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-current rounded transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-current rounded transition-all duration-300 ${
                open ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu — rendered as a sibling so it escapes the nav stacking context */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-50 bg-white transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-8 gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-slate-700 hover:text-brand-blue py-3 border-b border-slate-100 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
