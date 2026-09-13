import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { educationAndTraining } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';

export default function Education() {
  return (
    <section id="education" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          tag="02. Education & Training"
          title="Academic Background &"
          accent="Specialized Training"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {educationAndTraining.map((item) => {
            const isTraining = item.type === 'professional-training';
            const Icon = isTraining ? Award : GraduationCap;

            return (
              <div
                key={item.title}
                className={`rounded-2xl bg-white dark:bg-slate-900/80 border p-6 transition-all duration-200 shadow-sm ${
                  isTraining
                    ? 'border-emerald-500/40 dark:border-emerald-500/30'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                      isTraining
                        ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                        : 'bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <Badge variant={item.badgeColor} dot={isTraining}>
                        {item.badge}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{item.institution}</p>
                    {item.subtitle && (
                      <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mt-0.5">{item.subtitle}</p>
                    )}
                  </div>
                </div>

                {/* Training tags */}
                {isTraining && item.tags && (
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
