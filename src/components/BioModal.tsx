"use client";

import { useEffect, useCallback } from "react";

interface BioModalProps {
  name: string;
  role: string;
  bio: string;
  onClose: () => void;
}

export default function BioModal({ name, role, bio, onClose }: BioModalProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition text-slate-500 hover:text-slate-700 z-10"
          aria-label="Close"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-6 pr-8">
            <h3 className="text-2xl font-bold text-slate-900">{name}</h3>
            <p className="text-sm text-brand-blue font-medium mt-1">{role}</p>
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-200 mb-6" />

          {/* Bio paragraphs */}
          <div className="space-y-4">
            {bio.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-sm text-slate-600 leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
