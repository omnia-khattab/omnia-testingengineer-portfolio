import React, { useState } from 'react';
import {
  ClipboardCheck,
  FileSpreadsheet,
  Terminal,
  Database,
  Bug,
  Globe,
  Cpu,
  Smartphone,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { offeredServices } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import Modal from '../common/Modal';

const iconMap = {
  ClipboardCheck,
  FileSpreadsheet,
  Terminal,
  Database,
  Bug,
  Globe,
  Cpu,
  Smartphone,
};

export default function Services() {
  const [activeModalService, setActiveModalService] = useState(null);

  return (
    <section id="services" className="py-20 bg-slate-100/60 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="05. QA Solutions"
          title="Offered Software Testing"
          accent="Services"
          subtitle="Specialized quality assurance and test validation services for modern web applications and APIs."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offeredServices.map((service) => {
            const Icon = iconMap[service.icon] || ClipboardCheck;

            return (
              <div
                key={service.id}
                className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:bg-slate-50 dark:hover:bg-slate-900/90 transition-all duration-200 group hover:-translate-y-1 shadow-sm"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Keywords Pills */}
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/70 flex flex-wrap gap-1.5">
                    {service.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-3 border-t border-slate-200 dark:border-slate-800/60">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="w-full flex items-center justify-between text-xs font-medium text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors py-1"
                  >
                    <span>Inspect Deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal for Service Details */}
        {activeModalService && (
          <Modal
            isOpen={!!activeModalService}
            onClose={() => setActiveModalService(null)}
            title={activeModalService.title}
            subtitle="Testing Service Scope & Deliverables"
          >
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1">
                  Service Description
                </h4>
                <p className="text-sm text-slate-800 dark:text-slate-200">
                  {activeModalService.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-mono font-semibold uppercase text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Key Deliverables & Artifacts</span>
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeModalService.deliverables}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 mb-2">
                  Keywords & Capabilities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalService.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/40"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <a
                  href="#contact"
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Request This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </Modal>
        )}

      </div>
    </section>
  );
}
