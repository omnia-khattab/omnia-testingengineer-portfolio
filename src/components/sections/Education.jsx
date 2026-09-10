import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Building
} from 'lucide-react';
import { educationAndTraining } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="02. Education & Training"
          title="Academic Grounding &"
          accent="Specialized Training"
          subtitle="A computer science degree complemented by intensive professional software testing specialization."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationAndTraining.map((item) => {
            const isTraining = item.type === 'professional-training';
            const Icon = isTraining ? Award : GraduationCap;

            return (
              <div
                key={item.title}
                className={`relative rounded-2xl bg-white dark:bg-slate-900/80 border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                  isTraining
                    ? 'border-emerald-500/40 dark:border-emerald-500/30 hover:border-emerald-500/60'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top Badge & Duration */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <Badge variant={item.badgeColor} dot={isTraining}>
                      {item.badge}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Header Title */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        isTraining
                          ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                          : 'bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 mt-1">
                        <Building className="w-4 h-4 text-slate-400" />
                        <span>{item.institution}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Topics Grid */}
                  <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      <span>{isTraining ? 'Training Curriculum Topics:' : 'Core Computer Science Disciplines:'}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.topics.map((topic) => (
                        <span
                          key={topic}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono ${
                            isTraining
                              ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20'
                              : 'bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
                          }`}
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-500 dark:text-emerald-400 shrink-0" />
                          <span>{topic}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer note */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/60 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  {isTraining ? (
                    <span>* Presented as rigorous professional training under MCIT initiative</span>
                  ) : (
                    <span>* 4-Year Bachelor of Science Degree in Computer Science</span>
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
