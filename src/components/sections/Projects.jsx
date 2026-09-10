import React, { useState } from 'react';
import {
  Globe,
  Network,
  Cpu,
  Database,
  Code2,
  FileCheck,
  CheckCircle2,
  ChevronRight,
  Info,
  Layers
} from 'lucide-react';
import { projectBlueprints, devProjects } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import Modal from '../common/Modal';

const iconMap = {
  Globe,
  Network,
  Cpu,
  Database,
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('case-studies');
  const [selectedBlueprint, setSelectedBlueprint] = useState(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="06. Projects & Case Studies"
          title="Testing Case Studies &"
          accent="Development Work"
          subtitle="Intentional case study blueprints and proven production web development experience."
        />

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <button
              onClick={() => setActiveTab('case-studies')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'case-studies'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
              <span>QA Testing Case Studies (Coming Soon)</span>
            </button>
            <button
              onClick={() => setActiveTab('dev-foundation')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'dev-foundation'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4 text-sky-500 dark:text-sky-400" />
              <span>Web Development Foundation</span>
            </button>
          </div>
        </div>

        {/* TAB 1: QA Case Studies */}
        {activeTab === 'case-studies' && (
          <div>
            {/* QA Blueprint Transparency Banner */}
            <div className="mb-8 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 flex items-start gap-3 text-xs text-indigo-800 dark:text-indigo-300">
              <Info className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <p>
                <strong>Testing Case Studies Status:</strong> As part of my transition, these project blueprints represent the structured testing methodology, tools, and test suites I execute. More real testing case studies will be published as my QA portfolio expands through current DEPI training and freelance QA projects.
              </p>
            </div>

            {/* Blueprints Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectBlueprints.map((item) => {
                const Icon = iconMap[item.icon] || Globe;

                return (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all group shadow-sm"
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <Badge variant="amber" size="xs" dot>
                          {item.status}
                        </Badge>
                      </div>

                      <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-indigo-600 dark:group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.summary}
                      </p>

                      {/* Structured Preview Metrics */}
                      <div className="mt-5 space-y-2.5 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 text-xs font-mono">
                        <div className="flex justify-between">
                          <span className="text-slate-500 dark:text-slate-400">Application Type:</span>
                          <span className="text-slate-800 dark:text-slate-200 font-semibold">{item.appType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500 dark:text-slate-400">Testing Scope:</span>
                          <span className="text-emerald-600 dark:text-emerald-400 text-right truncate max-w-[200px]">{item.scope}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500 dark:text-slate-400">Test Scenarios:</span>
                          <span className="text-sky-600 dark:text-sky-300">{item.testCasesPlanned}</span>
                        </div>
                      </div>

                      {/* Tools Tag list */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                      <button
                        onClick={() => setSelectedBlueprint(item)}
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-700/60"
                      >
                        <span>Inspect Case Study Blueprint</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400 font-mono">
              * More testing case studies will be added as my QA portfolio grows.
            </div>
          </div>
        )}

        {/* TAB 2: Web Dev Foundation */}
        {activeTab === 'dev-foundation' && (
          <div>
            <div className="mb-8 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300 shadow-sm">
              <Code2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
              <p>
                <strong>The Developer Foundation:</strong> Real applications built and deployed in production. This hands-on programming experience informs my testing precision, from state mutations to database queries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {devProjects.map((proj) => (
                <div
                  key={proj.title}
                  className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all shadow-sm"
                >
                  <div>
                    <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400">
                      {proj.company} • {proj.role}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                      {proj.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-emerald-800 dark:text-emerald-300/90 leading-relaxed">
                      <strong className="text-slate-900 dark:text-white block mb-1">QA Takeaway:</strong>
                      {proj.testingRelevance}
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
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

        {/* Modal for Blueprint Details */}
        {selectedBlueprint && (
          <Modal
            isOpen={!!selectedBlueprint}
            onClose={() => setSelectedBlueprint(null)}
            title={selectedBlueprint.title}
            subtitle={selectedBlueprint.category}
          >
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Badge variant="amber" size="sm" dot>
                  {selectedBlueprint.status}
                </Badge>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Target App: {selectedBlueprint.appType}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1">
                  Testing Scope & Coverage
                </h4>
                <p className="text-slate-800 dark:text-slate-200">
                  {selectedBlueprint.scope}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1">
                  Testing Approach & Methodology
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedBlueprint.approach}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1">
                  Key Planned Highlights
                </h4>
                <div className="space-y-1.5 mt-2">
                  {selectedBlueprint.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-mono">Tools: {selectedBlueprint.tools.join(', ')}</span>
                <button
                  onClick={() => setSelectedBlueprint(null)}
                  className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                  Close
                </button>
              </div>
            </div>
          </Modal>
        )}

      </div>
    </section>
  );
}
