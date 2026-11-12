'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Info } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import { LinkedinIcon, TwitterIcon, InstagramIcon, FacebookIcon } from '@/components/SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'activation'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setFeedbackMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (data.needsActivation) {
        setStatus('activation');
        setFeedbackMessage(data.error);
      } else {
        setStatus('error');
        setFeedbackMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setFeedbackMessage('Could not reach the email service. Please reach out directly to ' + personalInfo.email);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('${personalInfo.heroBackground}')` }}
    >
      {/* Signature Blue Parallax Overlay matching .overlay-mf */}
      <div className="absolute inset-0 bg-[#0078ff]/85" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* White Card matching .box-shadow-full */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 lg:p-12 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Left Column: Form */}
            <div className="md:col-span-6 space-y-6">
              <div className="relative pb-3">
                <h3 className="text-2xl font-bold text-[#1e1e1e]">
                  Send Message Us
                </h3>
                <div className="w-16 h-1 bg-[#0078ff] mt-2 rounded-full" />
              </div>

              {/* Success Notification */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-emerald-900">Message Delivered!</p>
                    <p className="text-xs text-emerald-700 mt-0.5">
                      Your message has been sent directly to {personalInfo.email}. I will respond shortly!
                    </p>
                  </div>
                </div>
              )}

              {/* Activation Required Notification */}
              {status === 'activation' && (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm flex items-start gap-3">
                  <Info className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-amber-900">One-Time Activation Needed</p>
                    <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                      {feedbackMessage}
                    </p>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-rose-900">Unable to Send</p>
                    <p className="text-xs text-rose-700 mt-0.5">{feedbackMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    suppressHydrationWarning
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-[#1e1e1e] placeholder-slate-400 focus:outline-none focus:border-[#0078ff] focus:ring-1 focus:ring-[#0078ff] transition-colors text-sm"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email"
                    suppressHydrationWarning
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-[#1e1e1e] placeholder-slate-400 focus:outline-none focus:border-[#0078ff] focus:ring-1 focus:ring-[#0078ff] transition-colors text-sm"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subject"
                    suppressHydrationWarning
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-[#1e1e1e] placeholder-slate-400 focus:outline-none focus:border-[#0078ff] focus:ring-1 focus:ring-[#0078ff] transition-colors text-sm"
                  />
                </div>

                <div>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Message"
                    suppressHydrationWarning
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-[#1e1e1e] placeholder-slate-400 focus:outline-none focus:border-[#0078ff] focus:ring-1 focus:ring-[#0078ff] transition-colors text-sm resize-none"
                  ></textarea>
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    suppressHydrationWarning
                    className="px-8 py-3 rounded-full bg-[#0078ff] hover:bg-[#0062d3] text-white font-semibold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto cursor-pointer disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Contact Details */}
            <div className="md:col-span-6 space-y-6 pt-6 md:pt-0">
              <div className="relative pb-3">
                <h3 className="text-2xl font-bold text-[#1e1e1e]">
                  Get in Touch
                </h3>
                <div className="w-16 h-1 bg-[#0078ff] mt-2 rounded-full" />
              </div>

              {/* Direct Info List */}
              <ul className="space-y-4 text-sm text-[#4e4e4e]">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0078ff] shrink-0 mt-0.5" />
                  <span>{personalInfo.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#0078ff] shrink-0" />
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-[#0078ff]">
                    {personalInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#0078ff] shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="text-[#0078ff] hover:underline break-all">
                    {personalInfo.email}
                  </a>
                </li>
              </ul>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-4">
                  Connect with me
                </h4>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-[#0078ff] flex items-center justify-center text-[#0078ff] hover:bg-[#0078ff] hover:text-white transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-[#0078ff] flex items-center justify-center text-[#0078ff] hover:bg-[#0078ff] hover:text-white transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-[#0078ff] flex items-center justify-center text-[#0078ff] hover:bg-[#0078ff] hover:text-white transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-[#0078ff] flex items-center justify-center text-[#0078ff] hover:bg-[#0078ff] hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
