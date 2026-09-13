import React, { useState } from 'react';
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Code2,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { workExperience, personalInfo } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';

export default function Experience() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (idx) => setExpanded(expanded === idx ? null : idx);

  return (
    <section id="experience" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          tag="04. Professional Background"
          title="Work Experience &"
          accent="Career Evolution"
        />

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-32 space-y-6">
          {workExperience.map((job, idx) => {
            const isTraining = !!job.isTraining;
            const isOpen = expanded === idx;

            return (
              <div key={job.company + job.period} className="relative pl-6 sm:pl-8 group">

                {/* Timeline dot */}
                <div
                  className={`absolute -left-[9px] top-5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                    isTraining
                      ? 'bg-emerald-500 border-emerald-300'
                      : 'bg-white border-indigo-600 dark:bg-slate-900 dark:border-indigo-500'
                  }`}
                />

                {/* Period label (desktop) */}
                <div className="hidden sm:block absolute -left-36 top-4 text-right w-28 text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
                  {job.period}
                </div>

                {/* Card */}
                <div
                  className={`rounded-2xl bg-white dark:bg-slate-900/80 border p-5 transition-all duration-200 shadow-sm ${
                    isTraining
                      ? 'border-emerald-500/40 dark:border-emerald-500/30'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant={job.badgeColor} dot={isTraining}>{job.badge}</Badge>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{job.type}</span>
                    </div>
                    <div className="sm:hidden flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{job.period}</span>
                    </div>
                  </div>

                  {/* Role & Company */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{job.role}</h3>
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      @ {job.company}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {job.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                          isTraining
                            ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/20'
                            : 'bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expand toggle */}
                  <button
                    onClick={() => toggle(idx)}
                    className="flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                  >
                    {isOpen ? (
                      <>
                        <ChevronUp className="w-3.5 h-3.5" />
                        <span>Hide Details</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </>
                    )}
                  </button>

                  {/* Expandable details */}
                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
                      {job.details.map((point, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isTraining ? 'text-emerald-500 dark:text-emerald-400' : 'text-indigo-600 dark:text-indigo-400'
                            }`}
                          />
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Career transition visual */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-indigo-300 dark:to-indigo-700" />
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
            <span>Development Background</span>
            <span className="text-slate-400 dark:text-slate-600">→</span>
            <span>Testing Mindset</span>
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
          </div>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-emerald-300 dark:to-emerald-700" />
        </div>

      </div>
    </section>
  );
}
