import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_DATA } from '../data/content';

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
    
    // Validate inputs
    if (!formData.name.trim() || !formData.message.trim()) return;

    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address (e.g., name@domain.com)');
      return;
    }

    setEmailError('');
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
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

      if (response.ok) {
        setSubmitted(true);
        confetti({
          particleCount: 60,
          spread: 50,
          origin: { y: 0.8 },
          colors: ['#ffffff', '#a1a1aa', '#71717a']
        });
      } else {
        // Fallback to mailto link
        window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
        setSubmitted(true);
      }
    } catch (error) {
      // Fallback to mailto link
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#09090b] border-t border-zinc-900 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">// GET IN TOUCH</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans mt-1">
                {contact.heading}
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-3 font-normal">
                "{contact.text}"
              </p>
            </div>

            {/* Email Box */}
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center space-x-3.5 p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 group transform-gpu hover:scale-[1.02]"
            >
              <div className="p-2.5 rounded-lg bg-zinc-800 text-zinc-200 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Email Me Directly</p>
                <p className="text-sm font-semibold text-white font-mono">{contact.email}</p>
              </div>
            </a>

            {/* Socials */}
            <div className="pt-2 space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">Connect On Social</p>
              <div className="flex space-x-3">
                <a
                  href={contact.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-300 transform-gpu hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={contact.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-300 transform-gpu hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={contact.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-300 transform-gpu hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-sans uppercase">Thank You For Reaching Out</h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
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
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 font-sans text-sm transition-colors"
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
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-950 border text-white placeholder-zinc-600 focus:outline-none font-sans text-sm transition-colors ${
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
                      rows={4}
                      placeholder="How can I help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 font-sans text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 transform-gpu hover:scale-[1.01] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
