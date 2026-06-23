import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Globe, Palette, FileCode2, MonitorSmartphone, Sparkles, Search,
  Users, TrendingUp, MessageSquare, Megaphone, Calendar, Camera, ThumbsUp
} from 'lucide-react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const webServices = [
  { icon: Globe, title: 'Business Websites', desc: 'Professional sites that build trust.' },
  { icon: Palette, title: 'Portfolio Websites', desc: 'Showcase your work beautifully.' },
  { icon: FileCode2, title: 'Landing Pages', desc: 'High-converting campaign pages.' },
  { icon: MonitorSmartphone, title: 'Responsive Design', desc: 'Perfect on every device.' },
  { icon: Sparkles, title: 'Website Redesign', desc: 'Modernize your existing site.' },
  { icon: Search, title: 'SEO-Friendly', desc: 'Built to rank on Google.' },
];

const socialServices = [
  { icon: Calendar, title: 'Daily Content', desc: 'Consistent engaging posts.' },
  { icon: MessageSquare, title: 'Story Creation', desc: 'Stories that stop the scroll.' },
  { icon: FacebookIcon, title: 'Facebook Management', desc: 'Grow your Facebook presence.' },
  { icon: InstagramIcon, title: 'Instagram Management', desc: 'Aesthetic, on-brand feed.' },
  { icon: Users, title: 'Group Promotions', desc: 'Reach targeted communities.' },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" ref={ref} className="relative py-24 sm:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-blue-200/20 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-xs font-semibold text-blue-700 mb-5">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Everything You Need to <span className="text-shine">Win Online</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Two powerful pillars — stunning websites and smart social media — working together to grow your brand.
          </p>
        </motion.div>

        {/* Website Design Section */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/30 to-indigo-400/20 rounded-3xl blur-2xl" />
              <img
                src="https://images.pexels.com/photos/4087479/pexels-photo-4087479.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
                alt="Website mockup on multiple devices"
                className="relative rounded-3xl shadow-2xl w-full h-[420px] object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden sm:block animate-float">
                <div className="glass rounded-2xl p-4 shadow-xl border border-white/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500">Avg. load time</div>
                    <div className="text-lg font-extrabold text-slate-900">1.2s ⚡</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/60 border border-blue-200 text-[11px] font-semibold text-blue-700 uppercase tracking-widest mb-4">
                01 · Web Design
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
                Websites That Sell, 24/7.
              </h3>
              <p className="mt-3 text-slate-600">Beautifully designed, lightning-fast, and optimized to turn visitors into customers.</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {webServices.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                  className="group p-5 bg-white rounded-2xl border border-slate-200/70 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all card-shine cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/60 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all">
                    <s.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="mt-4 font-bold text-slate-900">{s.title}</div>
                  <div className="text-sm text-slate-500 mt-1">{s.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100/60 border border-indigo-200 text-[11px] font-semibold text-indigo-700 uppercase tracking-widest mb-4">
                02 · Social Media
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
                Brands That People Love to Follow.
              </h3>
              <p className="mt-3 text-slate-600">Strategic content, beautiful visuals, and consistent posting that builds real engagement.</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {socialServices.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                  className="group p-5 bg-white rounded-2xl border border-slate-200/70 hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 transition-all card-shine cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200/60 flex items-center justify-center group-hover:from-indigo-600 group-hover:to-blue-700 transition-all">
                    <s.icon className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="mt-4 font-bold text-slate-900">{s.title}</div>
                  <div className="text-sm text-slate-500 mt-1">{s.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-400/30 to-pink-400/20 rounded-3xl blur-2xl" />
              <img
                src="https://images.pexels.com/photos/7662060/pexels-photo-7662060.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
                alt="Social media on smartphone and laptop"
                className="relative rounded-3xl shadow-2xl w-full h-[420px] object-cover"
              />
              {/* Floating icons */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center shadow-xl animate-float">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-6 hidden sm:flex w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 items-center justify-center shadow-xl animate-float animation-delay-1500">
                <ThumbsUp className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-1/3 -right-5 hidden sm:block animate-float animation-delay-3000">
                <div className="glass rounded-2xl px-4 py-3 shadow-xl border border-white/60 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <div>
                    <div className="text-[10px] font-semibold text-slate-500 uppercase">Engagement</div>
                    <div className="text-sm font-extrabold text-slate-900">+320%</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
