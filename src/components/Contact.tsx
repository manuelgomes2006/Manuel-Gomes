import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Send, CheckCircle, Loader2, AlertCircle, Copy, Check, Clock, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_DATA } from '../data/content';
import { SpaceGlassPanel } from './ui/SpaceGlassPanel';

export const Contact: React.FC = () => {
  const { contact } = PERSONAL_DATA;
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [emailError, setEmailError] = useState('');
  const [copied, setCopied] = useState(false);

  // Strict email regex validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData({ ...formData, email: val });
    if (emailError) {
      if (validateEmail(val)) {
        setEmailError('');
      }
    }
  };

  const handleEmailBlur = () => {
    if (formData.email.trim() && !validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address (e.g., name@domain.com)');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) return;

    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address (e.g., name@domain.com)');
      return;
    }

    setEmailError('');
    setIsSubmitting(true);

    try {
      // 1. Try Vercel Serverless / Custom API Backend
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        })
      });

      if (response.ok) {
        setSubmitted(true);
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#ffffff', '#a855f7', '#3b82f6']
        });
        return;
      }

      // 2. Fallback to FormSubmit AJAX
      const fallbackResponse = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _subject: `Portfolio Message from ${formData.name.trim()}`,
          _template: 'table'
        })
      });

      if (fallbackResponse.ok) {
        setSubmitted(true);
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#ffffff', '#a855f7', '#3b82f6']
        });
      } else {
        window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
        setSubmitted(true);
      }
    } catch (error) {
      // Fallback
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">// GET IN TOUCH</span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans mt-1">
                {contact.heading}
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-3 font-normal">
                {contact.text}
              </p>
            </div>

            {/* Direct Email Box with One-Click Copy */}
            <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 flex items-center justify-between shadow-xl">
              <div className="flex items-center space-x-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-zinc-900 text-white shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">DIRECT EMAIL</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-xs sm:text-sm font-semibold text-white font-mono hover:underline truncate block"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                title="Copy email address"
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white transition-all transform-gpu hover:scale-105 shrink-0 ml-2"
              >
                {copied ? (
                  <span className="flex items-center text-emerald-400 text-xs font-mono">
                    <Check className="w-4 h-4 mr-1" />
                    <span>Copied!</span>
                  </span>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location & Timezone Details */}
            <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-2 text-xs font-mono text-zinc-400">
              <div className="flex items-center space-x-2">
                <Globe className="w-3.5 h-3.5 text-zinc-400" />
                <span>Location: <strong className="text-zinc-200">Kolkata, India</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-3.5 h-3.5 text-zinc-400" />
                <span>Timezone: <strong className="text-zinc-200">IST (UTC +5:30)</strong></span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">CONNECT ON SOCIAL</p>
              <div className="flex space-x-3">
                <a
                  href={contact.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300 transform-gpu hover:scale-110 shadow-lg"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={contact.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300 transform-gpu hover:scale-110 shadow-lg"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={contact.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300 transform-gpu hover:scale-110 shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <SpaceGlassPanel>
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/60 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-sans uppercase tracking-tight">
                    Thank You For Reaching Out
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed font-normal">
                    Your message has been delivered directly. I will review your note and respond as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950/90 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 font-sans text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={handleEmailChange}
                      onBlur={handleEmailBlur}
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-950/90 border text-white placeholder-zinc-600 focus:outline-none font-sans text-sm transition-colors ${
                        emailError ? 'border-red-500/80 focus:border-red-500' : 'border-zinc-800 focus:border-zinc-500'
                      }`}
                    />
                    {emailError && (
                      <p className="text-xs font-mono text-red-400 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5 mr-1 inline shrink-0" />
                        <span>{emailError}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project, team, or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950/90 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 font-sans text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transform-gpu hover:scale-[1.01]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </SpaceGlassPanel>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
