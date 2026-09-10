import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Terminal,
  ArrowRight,
  Sparkles,
  Play,
  RotateCcw,
  Code2,
  Check,
  Cpu,
  Layers
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import Badge from '../common/Badge';

export default function Hero() {
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [activeStep, setActiveStep] = useState(4);

  const sampleTestSteps = [
    { name: 'Auth: Multi-step registration & regex validation', duration: '124ms', status: 'PASS' },
    { name: 'API: GET /api/v1/students - schema & status 200', duration: '68ms', status: 'PASS' },
    { name: 'DB: Relational foreign key & constraint check', duration: '34ms', status: 'PASS' },
    { name: 'UI: Cross-browser responsive viewport rendering', duration: '92ms', status: 'PASS' },
  ];

  const handleRunSimulation = () => {
    if (isRunningSim) return;
    setIsRunningSim(true);
    setActiveStep(0);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setActiveStep(current);
      if (current >= sampleTestSteps.length) {
        clearInterval(interval);
        setIsRunningSim(false);
      }
    }, 400);
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Visual Accent Badge */}
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse-subtle" />
                {personalInfo.visualAccents.badge}
              </span>
              <span className="hidden sm:inline-flex text-xs font-mono text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                {personalInfo.visualAccents.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                {personalInfo.name}
              </h1>
              <div className="mt-2 text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-600 dark:from-indigo-400 dark:via-sky-300 dark:to-emerald-400">
                {personalInfo.title}
              </div>
            </div>

            {/* Primary USP */}
            <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 leading-snug">
              {personalInfo.usp}
            </p>

            {/* Supporting Copy */}
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              {personalInfo.supportingCopy}
            </p>

            {/* Core Pillars Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm">
                <Code2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>CS Graduate (Cairo University)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm">
                <Layers className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>3+ Years Web Dev Foundation</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>DEPI Software Testing Diploma</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md hover:shadow-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-950"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-slate-100 text-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-200 dark:hover:text-white border border-slate-300 dark:border-slate-700/80 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <span>Let's Connect</span>
              </a>
            </div>
          </div>

          {/* Right Column: Subtle Decorative QA Dashboard Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-800/60 dark:to-slate-900/90 border border-slate-200 dark:border-slate-800 p-1 shadow-2xl backdrop-blur-md">
              
              {/* Header Bar */}
              <div className="px-4 py-3 bg-slate-100 dark:bg-slate-950/70 rounded-t-xl border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-2">
                    QA-Suite-Runner.spec
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleRunSimulation}
                    disabled={isRunningSim}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-mono text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700 disabled:opacity-50 transition-colors shadow-xs"
                    title="Simulate automated test execution"
                  >
                    {isRunningSim ? (
                      <>
                        <RotateCcw className="w-3 h-3 animate-spin text-emerald-500 dark:text-emerald-400" />
                        <span>Running</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 text-emerald-500 dark:text-emerald-400 fill-current" />
                        <span>Re-run Suite</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Decorative Notice */}
              <div className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-950/30 border-b border-indigo-100 dark:border-indigo-900/30 flex items-center justify-between text-[11px] font-mono text-indigo-700 dark:text-indigo-300">
                <span>// Decorative Testing Workflow Visualization</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Ready</span>
              </div>

              {/* Dashboard Content */}
              <div className="p-5 space-y-4">
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Test Cases</div>
                    <div className="text-lg font-bold font-mono text-slate-900 dark:text-white mt-0.5">48</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/30">
                    <div className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 uppercase">Passed</div>
                    <div className="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-300 mt-0.5">
                      {activeStep >= sampleTestSteps.length ? 48 : activeStep * 12}
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Failed</div>
                    <div className="text-lg font-bold font-mono text-slate-400 mt-0.5">0</div>
                  </div>
                </div>

                {/* Workflow Status Chips */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80">
                    <span className="text-slate-500 dark:text-slate-400">API Contract:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="w-3 h-3" /> 200 OK
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80">
                    <span className="text-slate-500 dark:text-slate-400">Automation:</span>
                    <span className="text-sky-600 dark:text-sky-400 font-semibold">Selenium+TestNG</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80">
                    <span className="text-slate-500 dark:text-slate-400">Regression:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Validated</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80">
                    <span className="text-slate-500 dark:text-slate-400">DB Queries:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Verified</span>
                  </div>
                </div>

                {/* Simulated Test Case Log Console */}
                <div className="rounded-xl bg-slate-900 border border-slate-800 p-3 space-y-2 text-slate-100">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800 pb-1.5">
                    <span className="flex items-center gap-1">
                      <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Execution Trace</span>
                    </span>
                    <span className="text-emerald-400 text-[10px]">
                      {activeStep >= sampleTestSteps.length ? 'Status: 100% Passed' : 'Executing...'}
                    </span>
                  </div>

                  <div className="space-y-1.5 font-mono text-[11px]">
                    {sampleTestSteps.map((step, idx) => {
                      const isExecuted = idx < activeStep;
                      return (
                        <div
                          key={step.name}
                          className={`flex items-center justify-between p-1.5 rounded transition-all duration-200 ${
                            isExecuted
                              ? 'bg-emerald-500/10 text-slate-200'
                              : 'text-slate-600 opacity-40'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate pr-2">
                            {isExecuted ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            ) : (
                              <span className="w-3.5 h-3.5 rounded-full border border-slate-700 shrink-0" />
                            )}
                            <span className="truncate">{step.name}</span>
                          </div>
                          <span className="text-[10px] text-slate-400 shrink-0">
                            {step.duration}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="text-[11px] text-center text-slate-500 dark:text-slate-400 font-mono">
                  Software Quality • Precision • Reliability
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
