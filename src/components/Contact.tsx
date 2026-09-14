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
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 md:py-24 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading & Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4 sm:space-y-6"
          >
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#2997ff] font-semibold">Get In Touch</span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-sans mt-1">
                {contact.heading}.
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed mt-2 sm:mt-3 font-normal">
                {contact.text}
              </p>
            </div>

            {/* Direct Email Box with One-Click Copy */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#161618]/70 border border-white/10 flex items-center justify-between shadow-md backdrop-blur-md">
              <div className="flex items-center space-x-3 min-w-0">
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.08] text-white shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-zinc-500">DIRECT EMAIL</p>
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
                className="p-2 sm:p-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 text-zinc-300 hover:text-white transition-all active:scale-95 shrink-0 ml-2"
              >
                {copied ? (
                  <span className="flex items-center text-emerald-400 text-[11px] sm:text-xs font-mono">
                    <Check className="w-3.5 h-3.5 mr-1" />
                    <span>Copied!</span>
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                )}
              </button>
            </div>

            {/* Location & Timezone Details */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#161618]/70 border border-white/10 space-y-2 text-xs font-mono text-zinc-400 backdrop-blur-md shadow-sm">
              <div className="flex items-center space-x-2">
                <Globe className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>Location: <strong className="text-zinc-200">Kolkata, India</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>Timezone: <strong className="text-zinc-200">IST (UTC +5:30)</strong></span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-1 space-y-2">
              <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">CONNECT ON SOCIAL</p>
              <div className="flex space-x-2.5 sm:space-x-3">
                <a
                  href={contact.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-zinc-400 hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href={contact.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-zinc-400 hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href={contact.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-zinc-400 hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
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
            <SpaceGlassPanel className="!p-4 sm:!p-8">
              {submitted ? (
                <div className="py-10 sm:py-12 text-center space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-950/80 border border-emerald-500/60 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-sans uppercase tracking-tight">
                    Thank You For Reaching Out
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed font-normal">
                    Your message has been delivered directly. I will review your note and respond as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="space-y-1 sm:space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#2997ff] focus:ring-1 focus:ring-[#2997ff] font-sans text-base sm:text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={handleEmailChange}
                      onBlur={handleEmailBlur}
                      className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.04] border text-white placeholder-zinc-500 focus:outline-none font-sans text-base sm:text-sm transition-all ${
                        emailError ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#2997ff] focus:ring-1 focus:ring-[#2997ff]'
                      }`}
                    />
                    {emailError && (
                      <p className="text-xs font-mono text-red-400 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5 mr-1 inline shrink-0" />
                        <span>{emailError}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1 sm:space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project, team, or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#2997ff] focus:ring-1 focus:ring-[#2997ff] font-sans text-base sm:text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full bg-white hover:bg-zinc-200 text-black font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-md flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Note</span>
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
