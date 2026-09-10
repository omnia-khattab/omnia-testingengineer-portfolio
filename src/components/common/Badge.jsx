import React from 'react';

export default function Badge({ children, variant = 'slate', size = 'sm', dot = false, className = '' }) {
  const variantStyles = {
    emerald: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30',
    indigo: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/30',
    amber: 'bg-amber-500/10 text-amber-800 dark:text-amber-400 border-amber-500/30',
    red: 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/30',
    blue: 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/30',
    slate: 'bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/60',
  };

  const dotColors = {
    emerald: 'bg-emerald-500 dark:bg-emerald-400',
    indigo: 'bg-indigo-500 dark:bg-indigo-400',
    amber: 'bg-amber-500 dark:bg-amber-400',
    red: 'bg-rose-500 dark:bg-rose-400',
    blue: 'bg-sky-500 dark:bg-sky-400',
    slate: 'bg-slate-400',
  };

  const sizeStyles = {
    xs: 'text-[11px] px-2 py-0.5',
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border ${variantStyles[variant] || variantStyles.slate} ${sizeStyles[size] || sizeStyles.sm} ${className}`}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant] || dotColors.slate} animate-pulse-subtle`} />
      )}
      {children}
    </span>
  );
}
