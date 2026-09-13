import React from 'react';
import {
  ClipboardCheck,
  Terminal,
  Globe,
  FileSpreadsheet,
  Cpu,
} from 'lucide-react';
import { offeredServices } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';

const iconMap = {
  ClipboardCheck,
  Terminal,
  Globe,
  FileSpreadsheet,
  Cpu,
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 bg-slate-100/60 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          tag="05. Services"
          title="Offered Software Testing"
          accent="Services"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {offeredServices.map((service) => {
            const Icon = iconMap[service.icon] || ClipboardCheck;
            return (
              <div
                key={service.id}
                className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200 shadow-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors leading-snug">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            Interested in a service? Let's talk →
          </a>
        </div>

      </div>
    </section>
  );
}