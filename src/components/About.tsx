import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Palette, Zap, ShieldCheck } from 'lucide-react';

const features = [
  { icon: Palette, label: 'Creative Design' },
  { icon: Rocket, label: 'Fast Delivery' },
  { icon: Zap, label: 'Performance First' },
  { icon: ShieldCheck, label: 'Trusted Results' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section id="about" ref={ref} className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200/40 to-indigo-200/40 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7212946/pexels-photo-7212946.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
                alt="Team collaborating at digital agency"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
            </div>

            {/* Feature chips */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[94%] grid grid-cols-2 sm:grid-cols-4 gap-2">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="glass rounded-xl px-3 py-3 flex items-center gap-2 border border-white/60 shadow-lg"
                >
                  <f.icon className="w-4 h-4 text-blue-600" />
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-800">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 mb-5">
              About Web Proxy Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Smart Digital Solutions <br />
              at <span className="text-blue-600">Affordable Prices</span>.
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We help businesses grow online with affordable website development and effective social media management. From first click to loyal customer — we craft digital experiences that convert.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { n: '5+', l: 'Years of Experience' },
                { n: '250+', l: 'Projects Delivered' },
                { n: '120+', l: 'Happy Clients' },
                { n: '98%', l: 'Client Retention' },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                  className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/70 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="text-3xl font-extrabold text-slate-900">{s.n}</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{s.l}</div>
                </motion.div>
              ))}
            </div>

            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:gap-3 transition-all"
            >
              Explore Our Services →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
