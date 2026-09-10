import React from 'react';

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  accent,
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {tag && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium tracking-wider uppercase mb-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-400 ${isCenter ? 'justify-center' : ''}`}>
          <span className="text-emerald-500 dark:text-emerald-400 font-bold">✓</span>
          <span>{tag}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
        {title}{' '}
        {accent && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-600 dark:from-indigo-400 dark:via-sky-300 dark:to-emerald-400">
            {accent}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
