import React from 'react';
import {
  CheckSquare,
  Network,
  PlayCircle,
  Database,
  Smartphone,
} from 'lucide-react';
import { skillsCategories, toolsList } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';

const iconMap = {
  CheckSquare,
  Network,
  PlayCircle,
  Database,
  Smartphone,
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-slate-100/60 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          tag="03. Testing Skills"
          title="Testing Capabilities &"
          accent="Technical Tooling"
        />

        {/* 5 Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {skillsCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || CheckSquare;
            return (
              <div
                key={cat.id}
                className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-5 flex flex-col gap-3 hover:border-indigo-300 dark:hover:border-slate-700 transition-all shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4.5 h-4.5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{cat.name}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-200 dark:border-slate-800">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools Row */}
        <div className="mt-8 flex flex-wrap items-center gap-3 justify-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-1">
            Tools:
          </span>
          {toolsList.map((tool, i) => (
            <React.Fragment key={tool}>
              <span className="text-sm font-mono text-slate-700 dark:text-slate-300">{tool}</span>
              {i < toolsList.length - 1 && (
                <span className="text-slate-300 dark:text-slate-700 select-none">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
