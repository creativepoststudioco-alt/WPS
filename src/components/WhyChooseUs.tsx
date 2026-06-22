import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Wallet, Rocket, Smartphone, Headphones, Wrench, Target } from 'lucide-react';

const features = [
  { icon: Wallet, title: 'Affordable Pricing', desc: 'Premium quality without premium price tags.' },
  { icon: Rocket, title: 'Fast Delivery', desc: 'Most projects delivered within 7 working days.' },
  { icon: Smartphone, title: 'Mobile-Friendly', desc: 'Beautiful on every screen, every device.' },
  { icon: Headphones, title: 'Professional Support', desc: 'Dedicated support before & after launch.' },
  { icon: Wrench, title: 'Custom Solutions', desc: 'Tailored to your brand, not templates.' },
  { icon: Target, title: 'Growth Focused', desc: 'Designed to convert visitors into customers.' },
];

function Counter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf: number;
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 bg-slate-900 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-light opacity-40" />
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-indigo-600/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-xs font-semibold text-blue-300 mb-5">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Built for Growth. <span className="text-shine">Priced for You.</span>
          </h2>
          <p className="mt-5 text-lg text-slate-400">
            Six reasons why businesses trust Web Proxy Solutions to power their online success.
          </p>
        </motion.div>

        {/* Stat counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { v: 250, s: '+', l: 'Websites Delivered' },
            { v: 120, s: '+', l: 'Happy Clients' },
            { v: 98, s: '%', l: 'Client Satisfaction' },
            { v: 7, s: ' Days', l: 'Avg. Delivery' },
          ].map((st, i) => (
            <div
              key={i}
              className="glass-dark rounded-2xl p-6 text-center hover:border-blue-400/40 transition-colors"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-white">
                <Counter target={st.v} suffix={st.s} />
              </div>
              <div className="mt-2 text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                {st.l}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
              className="group relative p-6 rounded-2xl glass-dark hover:border-blue-400/40 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="mt-5 text-lg font-bold text-white">{f.title}</h4>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
