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
  ShieldCheck,
  Copy,
  Check
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';

// Default to the provided Web3Forms key from .env or configured key
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "f53e85c9-61df-49e4-b686-27e2a98328d7";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
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
      // Direct Web3Forms API submission (delivers directly to omniakhattab17@gmail.com)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio QA Inquiry] ${formData.subject}`,
          message: formData.message,
          from_name: formData.name
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed. Please check your network or try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Unable to deliver message right now. Please copy my email below.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="08. Get In Touch"
          title="Connect &"
          accent="Start a Conversation"
          subtitle="Whether you have an open QA role, need freelance software testing, or want to connect — reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Direct Email */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
              <div>
                <span className="text-xs font-mono uppercase text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider">
                  Contact Profile
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {personalInfo.name}
                </h3>
                <p className="text-sm font-mono text-emerald-600 dark:text-emerald-400">
                  {personalInfo.title}
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-200 dark:border-slate-800">
                {/* Location */}
                <div className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 text-slate-500 dark:text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Location</div>
                    <div className="text-sm font-medium text-slate-900 dark:text-white">{personalInfo.location}</div>
                  </div>
                </div>

                {/* Email with copy button */}
                <div className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Email Address</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-sm font-medium text-slate-900 dark:text-white break-all">
                        {personalInfo.email}
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="p-1 rounded text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                        title="Copy email address"
                      >
                        {copiedEmail ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 text-sky-600 dark:text-sky-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Professional Network</div>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-300 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Omnia Khattab on LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* QA Assurance Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <p>
                  Available for full-time remote QA opportunities, international contracts, and freelance software test validation.
                </p>
              </div>

            </div>

          </div>

          {/* Right: Contact Form (Direct Online Submission) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
              
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send a Message
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse-subtle" />
                  Direct to Inbox
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out the fields below to send a message directly to my email.
              </p>

              {status === 'success' ? (
                <div className="p-6 sm:p-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-500/40 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      Message Sent Directly to Omnia!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out! Your message was delivered straight to <strong>{personalInfo.email}</strong>. I will review it and reply within 24 hours.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-500/30 text-xs text-rose-700 dark:text-rose-300 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">{errorMessage}</div>
                        <div className="mt-1 text-[11px] text-slate-600 dark:text-slate-400">
                          You can also email me directly at: <strong className="text-slate-900 dark:text-white">{personalInfo.email}</strong>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Your Name <span className="text-rose-500 dark:text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full bg-slate-50 dark:bg-slate-950 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 ${
                          errors.name
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500'
                            : 'border-slate-300 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500'
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-[11px] text-rose-600 dark:text-rose-400 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Email Address <span className="text-rose-500 dark:text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        placeholder="sarah@company.com"
                        className={`w-full bg-slate-50 dark:bg-slate-950 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500'
                            : 'border-slate-300 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-[11px] text-rose-600 dark:text-rose-400 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Subject <span className="text-rose-500 dark:text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      placeholder="QA Opportunity / Testing Project Inquiry"
                      className={`w-full bg-slate-50 dark:bg-slate-950 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 ${
                        errors.subject
                          ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500'
                          : 'border-slate-300 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500'
                      }`}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-[11px] text-rose-600 dark:text-rose-400 mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Message <span className="text-rose-500 dark:text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      placeholder="Hi Omnia, we have an application testing project we'd love to discuss..."
                      className={`w-full bg-slate-50 dark:bg-slate-950 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 resize-y ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500'
                          : 'border-slate-300 dark:border-slate-800 focus:border-indigo-500 focus:ring-indigo-500'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-[11px] text-rose-600 dark:text-rose-400 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md hover:shadow-emerald-500/20 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending message to Omnia...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-[11px] text-center text-slate-500 dark:text-slate-400 font-mono pt-1">
                    Delivered directly to {personalInfo.email} • Powered by Web3Forms
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
