import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Send, CheckCircle, Loader2, AlertCircle, Sun } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_DATA } from '../data/content';
import { SpaceGlassPanel } from './ui/SpaceGlassPanel';

export const Contact: React.FC = () => {
  const { contact } = PERSONAL_DATA;
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [emailError, setEmailError] = useState('');

  // Strict email regex validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
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

      // 2. Fallback to FormSubmit AJAX if API is not deployed locally
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
          _subject: `New Portfolio Message from ${formData.name.trim()}`,
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
      // 3. Fallback to FormSubmit direct
      try {
        await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
            _subject: `New Portfolio Message from ${formData.name.trim()}`
          })
        });
      } catch (err) {
        window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
      }
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-violet-400">// DESTINATION — GALAXY CORE</span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-sans mt-1">
                {contact.heading}
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-3 font-normal">
                {contact.text}
              </p>
            </div>

            {/* Direct Email Box */}
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center space-x-3.5 p-4 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-violet-500/50 transition-all duration-300 group transform-gpu hover:scale-[1.02] shadow-xl"
            >
              <div className="p-3 rounded-xl bg-zinc-900 text-violet-400 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">DIRECT INBOX</p>
                <p className="text-sm font-semibold text-white font-mono">{contact.email}</p>
              </div>
            </a>

            {/* Socials */}
            <div className="pt-2 space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">CONNECT ON SOCIAL</p>
              <div className="flex space-x-3">
                <a
                  href={contact.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 text-zinc-400 hover:text-white hover:border-violet-500/50 transition-all duration-300 transform-gpu hover:scale-110 shadow-lg"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={contact.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 text-zinc-400 hover:text-white hover:border-violet-500/50 transition-all duration-300 transform-gpu hover:scale-110 shadow-lg"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={contact.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-zinc-950/80 border border-white/10 text-zinc-400 hover:text-white hover:border-violet-500/50 transition-all duration-300 transform-gpu hover:scale-110 shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Space Glass Form */}
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
                    Your message has been successfully received. A team member will review your inquiry and follow up with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950/90 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 font-sans text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="Your email address (e.g., name@domain.com)"
                      value={formData.email}
                      onChange={handleEmailChange}
                      onBlur={handleEmailBlur}
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-950/90 border text-white placeholder-zinc-600 focus:outline-none font-sans text-sm transition-colors ${
                        emailError ? 'border-red-500/80 focus:border-red-500' : 'border-zinc-800 focus:border-violet-500'
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
                      rows={4}
                      placeholder="How can I help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950/90 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 font-sans text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 transform-gpu hover:scale-[1.01] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>SENDING TRANSMISSION...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND TRANSMISSION</span>
                        <Send className="w-3.5 h-3.5 ml-1" />
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
