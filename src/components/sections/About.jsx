import React from 'react';
import { GraduationCap, Code2, ShieldCheck } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const highlights = [
  {
    icon: GraduationCap,
    label: 'Computer Science',
    sub: 'Cairo University · 2018',
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-500/10 border-indigo-500/20',
  },
  {
    icon: Code2,
    label: '3+ Years',
    sub: 'Web Development',
    color: 'text-sky-600 dark:text-sky-400',
    bg: 'bg-sky-500/10 border-sky-500/20',
  },
  {
    icon: ShieldCheck,
    label: 'QA Focus',
    sub: 'Manual · API · Database · Automation',
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
        <SectionHeading
          tag="01. About"
          title="From Development to"
          accent="Quality"
          img={true}
        />

        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center">
            My background in Computer Science and 3+ years of hands-on web development give me a practical
            understanding of how applications are built — from UI and APIs to databases and user workflows.
            Now, I'm applying that perspective to Software Testing and Quality Assurance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {highlights.map(({ icon: Icon, label, sub, color, bg }) => (
              <div
                key={label}
                className={`flex flex-col items-center text-center p-5 rounded-2xl bg-white dark:bg-slate-900/80 border ${bg} shadow-sm`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${bg}`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div className="font-bold text-slate-900 dark:text-white text-base">{label}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">{sub}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
