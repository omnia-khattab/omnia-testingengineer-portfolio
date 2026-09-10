import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Code2
} from 'lucide-react';
import { workExperience, personalInfo } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Visual USP Label */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium tracking-wider uppercase mb-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-400">
            <span className="text-emerald-500 dark:text-emerald-400 font-bold">✓</span>
            <span>04. Professional Background</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Work Experience &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-600 dark:from-indigo-400 dark:via-sky-300 dark:to-emerald-400">
              Career Evolution
            </span>
          </h2>

          {/* Visual USP Badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-xs sm:text-sm font-semibold text-indigo-700 dark:text-indigo-300">
            <Code2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>{personalInfo.visualAccents.pill}</span>
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Transparent breakdown of hands-on web development roles and specialized practical training in Software Quality Assurance.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-32 space-y-12">
          {workExperience.map((job) => {
            const isTraining = !!job.isTraining;

            return (
              <div key={job.company + job.period} className="relative pl-6 sm:pl-8 group">
                
                {/* Timeline Node Dot */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                    isTraining
                      ? 'bg-emerald-500 border-emerald-300 shadow-pass-glow'
                      : 'bg-white border-indigo-600 dark:bg-slate-900 dark:border-indigo-500'
                  }`}
                />

                {/* Left Period Label (on large screens) */}
                <div className="hidden sm:block absolute -left-36 top-1 text-right w-28 text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
                  {job.period}
                </div>

                {/* Experience Card */}
                <div
                  className={`rounded-2xl bg-white dark:bg-slate-900/80 border p-6 sm:p-8 transition-all duration-200 shadow-sm ${
                    isTraining
                      ? 'border-emerald-500/40 bg-emerald-50/30 dark:border-emerald-500/30 dark:bg-emerald-950/10 shadow-md'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {/* Top Badges & Mobile Period */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Badge variant={job.badgeColor} dot={isTraining}>
                        {job.badge}
                      </Badge>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        {job.type}
                      </span>
                    </div>

                    <div className="sm:hidden flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{job.period}</span>
                    </div>
                  </div>

                  {/* Role & Company */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      <span>@ {job.company}</span>
                      <span className="text-xs text-slate-500">• {job.location}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {job.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      {isTraining ? 'Key Training Modules & Practical Focus:' : 'Accomplishments & Scope:'}
                    </div>
                    {job.highlights.map((point, hIdx) => (
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

                  {isTraining && (
                    <div className="mt-5 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-300 font-mono">
                      * Clearly distinguished as specialized professional software testing practical training under MCIT initiative.
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
