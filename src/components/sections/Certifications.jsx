import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  Eye
} from 'lucide-react';
import { certifications } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import Modal from '../common/Modal';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="achievements" className="py-20 bg-slate-100/60 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="07. Credentials"
          title="Achievements &"
          accent="Certifications"
          subtitle="Verifiable testing credentials and ongoing professional certifications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert) => {
            const isCompleted = cert.badgeColor === 'emerald';

            return (
              <div
                key={cert.id}
                className={`rounded-2xl bg-white dark:bg-slate-900/80 border p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm ${
                  isCompleted ? 'border-emerald-500/40 dark:border-emerald-500/30' : 'border-amber-500/40 dark:border-amber-500/30'
                }`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant={cert.badgeColor} dot>
                      {cert.badge}
                    </Badge>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {cert.date}
                    </span>
                  </div>

                  {/* Header Title */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        isCompleted
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                          : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mt-1">
                        Issued by {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Topics Covered */}
                  <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                      Curriculum Competencies:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 dark:hover:text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Credential Details</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Certifications Notice */}
        <div className="mt-10 max-w-2xl mx-auto text-center p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-mono shadow-xs">
          * Additional official Software Testing & ISTQB credentials will be published upon completion of the MCIT DEPI program.
        </div>

        {/* Modal for Certificate Preview */}
        {selectedCert && (
          <Modal
            isOpen={!!selectedCert}
            onClose={() => setSelectedCert(null)}
            title={selectedCert.title}
            subtitle={`Issuer: ${selectedCert.issuer}`}
          >
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-2 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Issuing Organization:</span>
                  <span className="text-slate-900 dark:text-white font-semibold">{selectedCert.issuer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Credential Status:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{selectedCert.badge}</span>
                </div>
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

              <div>
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1">
                  Course Content & Key Learning
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 mb-2">
                  Skills Validated
                </h4>
                <div className="space-y-1.5">
                  {selectedCert.topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

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
