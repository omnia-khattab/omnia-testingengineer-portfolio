import React, { useState } from 'react';
import {
  Globe,
  Network,
  Cpu,
  Code2,
  FileCheck,
  Layers,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { projectBlueprints, devProjects } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';

const iconMap = { Globe, Network, Cpu };

export default function Projects() {
  const [activeTab, setActiveTab] = useState('case-studies');

  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          tag="06. Selected Work"
          title="Testing Case Studies &"
          accent="Development Work"
        />

        {/* Tab Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <button
              onClick={() => setActiveTab('case-studies')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'case-studies'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileCheck className="w-4 h-4 text-emerald-400" />
              <span>QA Case Studies</span>
            </button>
            <button
              onClick={() => setActiveTab('dev-foundation')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'dev-foundation'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4 text-sky-400" />
              <span>Development Work</span>
            </button>
          </div>
        </div>

        {/* TAB 1: QA Case Studies */}
        {activeTab === 'case-studies' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projectBlueprints.map((item) => {
                const Icon = iconMap[item.icon] || Globe;
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm group"
                  >
                    {/* Icon + badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-[10px] font-mono font-semibold text-amber-700 dark:text-amber-300">
                        <Clock className="w-3 h-3" />
                        Coming Soon
                      </div>
                    </div>

                    {/* Category + title */}
                    <div>
                      <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400 font-mono">
              More QA case studies will be added as my testing portfolio grows.
            </p>
          </div>
        )}

        {/* TAB 2: Development Work */}
        {activeTab === 'dev-foundation' && (
          <div>
            <div className="mb-6 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300 shadow-sm">
              <Code2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
              <p>
                <strong>Developer Foundation:</strong> Real applications built and deployed in production.
                This hands-on experience informs my testing precision — from state mutations to database queries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {devProjects.map((proj) => (
                <div
                  key={proj.title}
                  className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-5 flex flex-col gap-3 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all shadow-sm"
                >
                  <div>
                    <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400">
                      {proj.company} · {proj.role}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">{proj.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
