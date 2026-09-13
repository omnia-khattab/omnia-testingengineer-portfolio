import React, { useState } from 'react';
import { Award, Eye, ExternalLink } from 'lucide-react';
import { certifications } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import Modal from '../common/Modal';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="achievements" className="py-16 bg-slate-100/60 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          tag="07. Certifications"
          title="Credentials &"
          accent="Achievements"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {certifications.map((cert) => {
            const isCompleted = cert.badgeColor === 'emerald';
            return (
              <div
                key={cert.id}
                className={`rounded-2xl bg-white dark:bg-slate-900/80 border p-5 flex flex-col gap-4 transition-all duration-200 shadow-sm ${
                  isCompleted
                    ? 'border-emerald-500/40 dark:border-emerald-500/30'
                    : 'border-amber-500/40 dark:border-amber-500/30'
                }`}
              >
                {/* Icon + badges */}
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                      isCompleted
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                    }`}
                  >
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge variant={cert.badgeColor} dot>{cert.badge}</Badge>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">{cert.date}</span>
                  </div>
                </div>

                {/* Title + issuer */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {/* Action */}
                <div className="mt-auto pt-3 border-t border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400 font-mono">
          Additional certifications will be published upon completion of ISTQB and DEPI program.
        </p>

        {/* Modal */}
        {selectedCert && (
          <Modal
            isOpen={!!selectedCert}
            onClose={() => setSelectedCert(null)}
            title={selectedCert.title}
            subtitle={`Issued by ${selectedCert.issuer}`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant={selectedCert.badgeColor} dot>{selectedCert.badge}</Badge>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{selectedCert.date}</span>
              </div>

              {selectedCert.certificateImage && (
                <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                  <img
                    src={selectedCert.certificateImage}
                    alt={`${selectedCert.title} certificate`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}

              {selectedCert.topics && (
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 mb-2">
                    Topics Covered
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white"
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
