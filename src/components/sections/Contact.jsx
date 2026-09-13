import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "f53e85c9-61df-49e4-b686-27e2a98328d7";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio Inquiry] from ${formData.name}`,
          message: formData.message,
          from_name: formData.name,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Unable to send right now. Please email me directly.');
    }
  };

  const fieldClass = (field) =>
    `w-full bg-slate-50 dark:bg-slate-950 border rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 ${
      errors[field]
        ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500'
        : 'border-slate-300 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500'
    }`;

  return (
    <section id="contact" className="py-16 bg-slate-100/60 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          tag="08. Get In Touch"
          title="Start a"
          accent="Conversation"
          subtitle="Have a project in mind or looking for software testing support? I'd love to hear about it."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Contact Info */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-5 shadow-sm">

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{personalInfo.name}</h3>
                <p className="text-sm font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">{personalInfo.title}</p>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 text-slate-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">{personalInfo.location}</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-2 min-w-0">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate"
                    >
                      {personalInfo.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-1 rounded text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors shrink-0"
                      title="Copy email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 text-sky-600 dark:text-sky-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-300 transition-colors inline-flex items-center gap-1"
                  >
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">

              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Send a Message</h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-subtle" />
                  Direct to Inbox
                </span>
              </div>

              {status === 'success' ? (
                <div className="p-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Message Sent!</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Thank you for reaching out. I'll reply to <strong>{personalInfo.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', message: '' }); }}
                    className="mt-2 px-5 py-2 rounded-xl text-xs font-semibold bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-500/30 text-xs text-rose-700 dark:text-rose-300 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">{errorMessage}</div>
                        <div className="mt-0.5 text-[11px] text-slate-600 dark:text-slate-400">
                          Or email me directly: <strong className="text-slate-900 dark:text-white">{personalInfo.email}</strong>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text" id="name" name="name"
                        value={formData.name} onChange={handleChange}
                        aria-required="true" aria-invalid={!!errors.name}
                        placeholder="Your full name"
                        className={fieldClass('name')}
                      />
                      {errors.name && <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email" id="email" name="email"
                        value={formData.email} onChange={handleChange}
                        aria-required="true" aria-invalid={!!errors.email}
                        placeholder="you@company.com"
                        className={fieldClass('email')}
                      />
                      {errors.email && <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message" name="message" rows={5}
                      value={formData.message} onChange={handleChange}
                      aria-required="true" aria-invalid={!!errors.message}
                      placeholder="Hi Omnia, we have a testing project we'd love to discuss..."
                      className={`${fieldClass('message')} resize-y`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md hover:shadow-emerald-500/20 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                      {status === 'loading' ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /><span>Sending...</span></>
                      ) : (
                        <><Send className="w-4 h-4" /><span>Send Message</span></>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
