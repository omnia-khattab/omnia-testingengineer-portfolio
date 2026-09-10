import React, { useState } from 'react';
import {
  Code2,
  ShieldAlert,
  Database,
  MessageSquareCode,
  CheckCircle2,
  Quote,
  Sparkles,
  Layers,
  Check
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';

const iconMap = {
  Code2,
  ShieldAlert,
  Database,
  MessageSquareCode,
};

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="01. About Me"
          title="From Development to"
          accent="Quality Engineering"
          subtitle="How 3+ years of building web applications fuels a sharper, more effective testing mindset."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative with Small Elegant Portrait Card */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-5 shadow-sm">
              
              {/* Refined Small Profile Card Header (Option B) */}
              <div className="flex items-center gap-4 pb-5 border-b border-slate-200 dark:border-slate-800/80">
                {/* Small Head & Shoulders Photo */}
                <div className="relative shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-indigo-500/30 dark:border-indigo-500/40 shadow-sm">
                    {!imgError ? (
                      <img
                        src={personalInfo.avatar || "/omnia.jpg"}
                        alt={personalInfo.name}
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-indigo-700 to-emerald-600 text-white font-bold text-lg font-mono">
                        OK
                      </div>
                    )}
                  </div>
                  {/* Subtle live status dot */}
                  <span
                    className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 shadow-xs"
                    title="Available for Software Testing"
                  />
                </div>

                {/* Profile Identity Text */}
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {personalInfo.name}
                    </h3>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                      QA Engineer
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                    CS Graduate • 3+ Years Web Dev Foundation
                  </p>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>From Development to Quality Engineering</span>
                  </div>
                </div>
              </div>

              {/* Story Description */}
              <div className="space-y-4 pt-1 text-slate-700 dark:text-slate-300">
                <p>
                  I am a <strong>Software Testing Engineer</strong> with a strong foundation in Manual Testing, API Testing, Database Testing, and Automation Testing using <strong>Selenium WebDriver</strong> and <strong>TestNG</strong>. My background in Computer Science and hands-on experience building web applications with <strong>React.js</strong> and <strong>Laravel</strong> give me a strong understanding of how software is designed, developed, and validated.
                </p>

                <p>
                  After several years working in web development, I am now focusing on Software Testing and Quality Assurance, combining my development experience with a quality-focused mindset.
                </p>

                <div className="pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <Quote className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <p className="italic text-sm text-slate-700 dark:text-slate-200">
                      "{personalInfo.supportingCopy}"
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Personality statement */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-50 via-white to-emerald-50 dark:from-indigo-950/40 dark:via-slate-900/70 dark:to-emerald-950/30 border border-indigo-200 dark:border-indigo-900/40 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                "I enjoy finding the details others might miss and turning them into better, more reliable user experiences."
              </p>
            </div>

            {/* What this means in practice */}
            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Why Development Background Matters for QA:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>Understand code architectures</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>Analyze edge cases intuitively</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>Pinpoint root causes, not just symptoms</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>Communicate effortlessly with developers</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Capability Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Key Engineering Pillars
            </h3>

            {personalInfo.storyPillars.map((pillar) => {
              const Icon = iconMap[pillar.icon] || Code2;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-slate-700 transition-all hover:translate-x-1 group shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 group-hover:border-indigo-500/40 transition-colors">
                      <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-emerald-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
