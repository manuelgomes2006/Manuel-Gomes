import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Send, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_DATA } from '../data/content';

export const Contact: React.FC = () => {
  const { contact } = PERSONAL_DATA;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#ffffff', '#a1a1aa', '#71717a']
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#09090b] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">// START A CONVERSATION</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-sans mt-2">
                {contact.headline}
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mt-4 font-normal">
                {contact.text}
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pt-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-zinc-800 text-zinc-200 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Email Me Directly</p>
                  <p className="text-sm font-semibold text-white font-mono mt-0.5">{contact.email}</p>
                </div>
              </a>

              {/* Social Channels List */}
              <div className="pt-4 space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">Connect On Social</p>
                <div className="flex space-x-3">
                  <a
                    href={contact.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={contact.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={contact.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-zinc-900/40 border border-zinc-800/80 p-8 sm:p-10 backdrop-blur-xl shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-sans uppercase">Message Sent Successfully!</h3>
                  <p className="text-sm font-mono text-zinc-400 max-w-md mx-auto">
                    Thank you for reaching out, Manuel will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 font-sans text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 font-sans text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project, idea, or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 font-sans text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
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
