import React, { useState, useMemo } from 'react';
import {
  CheckSquare,
  PlayCircle,
  Network,
  Database,
  Smartphone,
  Wrench,
  Layers,
  Compass,
  Search,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { skillsCategories } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';

const iconMap = {
  CheckSquare,
  PlayCircle,
  Network,
  Database,
  Smartphone,
  Wrench,
  Layers,
  Compass,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    return skillsCategories
      .map(cat => {
        if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
          return null;
        }
        if (!searchQuery.trim()) return cat;

        const q = searchQuery.toLowerCase();
        const matchesCategory = cat.name.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q);
        const matchingSkills = cat.skills.filter(s =>
          s.name.toLowerCase().includes(q) ||
          (s.level && s.level.toLowerCase().includes(q)) ||
          (s.status && s.status.toLowerCase().includes(q))
        );

        if (matchesCategory || matchingSkills.length > 0) {
          return {
            ...cat,
            skills: matchingSkills.length > 0 ? matchingSkills : cat.skills
          };
        }
        return null;
      })
      .filter(Boolean);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 bg-slate-100/60 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="03. Technical Competencies"
          title="Testing Capabilities &"
          accent="Technical Tooling"
          subtitle="Organized across specialized QA disciplines with full transparency on proficiency levels."
        />

        {/* Filter Bar & Search */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-full overflow-x-auto shadow-sm">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              All Disciplines
            </button>
            {skillsCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Postman, SQL, Selenium)..."
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[11px] text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 absolute right-3 top-1/2 -translate-y-1/2"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || CheckSquare;
            const isExploring = !!cat.isExploring;

            return (
              <div
                key={cat.id}
                className={`rounded-2xl bg-white dark:bg-slate-900/80 border p-6 flex flex-col justify-between transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm ${
                  isExploring ? 'border-amber-500/40 bg-amber-50/50 dark:border-amber-500/30 dark:bg-amber-950/10' : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isExploring
                            ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                            : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {cat.name}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          {cat.skills.length} competencies
                        </span>
                      </div>
                    </div>

                    {isExploring && (
                      <Badge variant="amber" size="xs">
                        Exploring
                      </Badge>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between py-1 px-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/70 text-xs"
                      >
                        <div className="flex items-center gap-2">
                          {isExploring ? (
                            <AlertCircle className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                          ) : (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                          )}
                          <span className="font-medium text-slate-800 dark:text-slate-200">{skill.name}</span>
                        </div>
                        <span
                          className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded ${
                            isExploring
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-300 border border-amber-300 dark:border-amber-500/20'
                              : 'bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          {skill.status || skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {isExploring && (
                  <div className="mt-4 pt-3 border-t border-amber-300 dark:border-amber-500/20 text-[11px] text-amber-800 dark:text-amber-300/80 italic font-mono">
                    * Actively exploring fundamentals; not presented as established professional expertise.
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
