import React from 'react';
import { MessageSquare, Briefcase, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 dark:via-indigo-950/20 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-3xl bg-gradient-to-br from-white via-slate-50 to-indigo-50/60 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/40 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 md:p-16 text-center shadow-xl dark:shadow-2xl relative overflow-hidden">
          
          {/* Subtle decoration lines */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 mb-6">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Available for QA Roles & Testing Projects</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Let's Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-600 dark:from-indigo-400 dark:via-sky-300 dark:to-emerald-400">
              Better Software
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Looking for a detail-oriented Software Testing Engineer who understands both development and quality? Let's talk about your project.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md hover:shadow-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-950"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Start a Conversation</span>
            </a>
            <a
              href="#experience"
              onClick={(e) => handleScrollTo(e, 'experience')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-slate-100 text-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:text-slate-200 dark:hover:text-white border border-slate-300 dark:border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-xs"
            >
              <Briefcase className="w-4 h-4" />
              <span>View My Experience</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
