import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, MessageCircle, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "0d2908b7-d0ea-4563-9fdc-6f79ed29993c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        e.currentTarget.reset(); // Form ko clear karne ke liye
        setTimeout(() => setSent(false), 5000);
      } else {
        alert("Kuch galat hua. Kripya dobara prayas karein.");
      }
    } catch (error) {
      alert("Error! Connection check karein.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-indigo-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 mb-5">
            Let's Work Together
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Ready to Grow Your Business <span className="text-shine">Online?</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Drop us a message or reach out instantly on WhatsApp — we respond within hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="relative rounded-3xl overflow-hidden p-8 bg-gradient-to-br from-slate-900 to-blue-900 text-white shadow-2xl">
              <div className="absolute inset-0 bg-grid-light opacity-30" />
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/30 rounded-full blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-semibold text-blue-200 uppercase tracking-widest mb-5">
                  Get in Touch
                </div>
                <h3 className="text-2xl font-extrabold leading-tight">Let's build something amazing together.</h3>
                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                  Free consultation. No obligations. Get a quote within 24 hours.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    { icon: Phone, label: 'Phone', value: '+91 99999 99999' },
                    { icon: Mail, label: 'Email', value: 'hello@webproxy.in' },
                    { icon: MapPin, label: 'Office', value: 'Mumbai, India' },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                        <c.icon className="w-4 h-4 text-blue-200" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-blue-200 uppercase tracking-wider">{c.label}</div>
                        <div className="text-sm font-medium text-white mt-0.5">{c.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-3">
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-sm font-semibold transition-all hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="relative rounded-3xl p-8 sm:p-10 bg-white border border-slate-200/80 shadow-xl"
            >
              <h4 className="text-xl font-extrabold text-slate-900 mb-6">Send us a message</h4>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 text-sm outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Phone</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 text-sm outline-none transition-all"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 text-sm outline-none transition-all"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Service Required</label>
                  <select
                    required
                    name="service"
                    defaultValue=""
                    className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 text-sm outline-none transition-all"
                  >
                    <option value="" disabled>Select a service</option>
                    <option>Website Design & Development</option>
                    <option>Social Media Management</option>
                    <option>Landing Page Design</option>
                    <option>Website Redesign</option>
                    <option>Both — Full Package</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 text-sm outline-none transition-all resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || sent}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-xl hover:shadow-blue-500/30 text-white rounded-xl text-sm font-semibold transition-all hover:scale-[1.01] disabled:opacity-80"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" /> Message Sent!
                  </>
                ) : isSubmitting ? (
                  <>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>

              <p className="mt-4 text-xs text-slate-500 text-center">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
