import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles, TrendingUp, Users, Globe2, CheckCircle2 } from 'lucide-react';

const floatingStats = [
  { icon: TrendingUp, value: '300%', label: 'Avg. Growth' },
  { icon: Users, value: '120+', label: 'Happy Clients' },
  { icon: Globe2, value: '250+', label: 'Websites Built' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-blue-50/40" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-blue-400/25 blur-3xl animate-blob" />
      <div className="absolute top-1/2 -right-32 w-[32rem] h-[32rem] rounded-full bg-indigo-400/20 blur-3xl animate-blob animation-delay-4000" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-cyan-300/20 blur-3xl animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-12 gap-10 items-center">
        {/* Left text */}
        <div className="lg:col-span-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-200/60 text-xs font-semibold text-blue-700 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            Trusted by 120+ Growing Businesses
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05]"
          >
            Affordable Websites
            <br />
            That <span className="text-shine">Grow Your Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed"
          >
            Professional Website Design & Social Media Management for businesses that want more customers and better online visibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.03] transition-all"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold text-slate-900 bg-white border-2 border-slate-200 rounded-full hover:border-green-500 hover:text-green-600 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Contact on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600"
          >
            {['No hidden fees', 'Delivered in 7 days', '100% Mobile-friendly'].map((t) => (
              <div key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>{t}</span>
              </div>
            ))}
          </motion.div>

          {/* Marquee of clients */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 pt-8 border-t border-slate-200/70"
          >
            <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">
              Powering Brands Across Industries
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 opacity-70">
              {['TechFlow', 'Bloom&Co', 'Nexora', 'Pulsewave', 'Urbanlyft'].map((b) => (
                <span key={b} className="text-lg font-bold tracking-tight text-slate-400 hover:text-slate-700 transition">
                  {b}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right visual */}
        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative ring */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/20 via-transparent to-indigo-500/20 rounded-[2.5rem] blur-2xl" />

            <div className="relative rounded-3xl overflow-hidden glow-ring bg-white">
              <img
                src="/images/hero.jpg"
                alt="Modern digital workspace with laptop, mobile and analytics"
                className="w-full h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
            </div>

            {/* Floating card 1 — Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="hidden sm:flex absolute -left-8 top-10 animate-float"
            >
              <div className="glass rounded-2xl px-5 py-4 shadow-xl border border-white/60 flex items-center gap-3 min-w-[220px]">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">New Project</div>
                  <div className="text-sm font-bold text-slate-900">Launched Successfully 🚀</div>
                </div>
              </div>
            </motion.div>

            {/* Floating card 2 — Growth */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="hidden sm:flex absolute -right-6 bottom-16 animate-float animation-delay-1500"
            >
              <div className="glass rounded-2xl p-4 shadow-xl border border-white/60">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-semibold text-slate-700">Traffic Growth</span>
                </div>
                <div className="flex items-end gap-1 h-12 mb-2">
                  {[35, 48, 42, 62, 55, 78, 92].map((h, i) => (
                    <div
                      key={i}
                      className="w-2 rounded-t bg-gradient-to-t from-blue-600 to-blue-400"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="text-xl font-extrabold text-slate-900">+142%</div>
              </div>
            </motion.div>

            {/* Floating stats bottom strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[92%] glass rounded-2xl px-5 py-4 shadow-xl border border-white/60 hidden md:block"
            >
              <div className="grid grid-cols-3 divide-x divide-slate-200/80">
                {floatingStats.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 px-2 justify-center">
                    <s.icon className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-base font-extrabold text-slate-900 leading-tight">{s.value}</div>
                      <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
