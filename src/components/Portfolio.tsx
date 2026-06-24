import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Urbanlyft Real Estate',
    category: 'Business Website',
    image: 'https://images.pexels.com/photos/3850237/pexels-photo-3850237.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Pulsewave Fitness',
    category: 'Landing Page',
    image: 'https://images.pexels.com/photos/6289025/pexels-photo-6289025.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Nexora Tech Agency',
    category: 'Portfolio',
    image: 'https://images.pexels.com/photos/7653569/pexels-photo-7653569.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Savory Bistro',
    category: 'Restaurant Website',
    image: 'https://images.pexels.com/photos/8886104/pexels-photo-8886104.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    color: 'from-amber-500 to-red-500',
  },
  {
    title: 'Luna Wellness',
    category: 'Social Media',
    image: 'https://images.pexels.com/photos/3850265/pexels-photo-3850265.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    color: 'from-cyan-500 to-blue-600',
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" ref={ref} className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 mb-5">
            Our Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Recent Work, <span className="text-shine">Real Results</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            A curated selection of websites and campaigns that delivered measurable growth.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                active === f
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t ${p.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500`} />
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex justify-end">
                  <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/80 uppercase tracking-widest mb-1">{p.category}</div>
                  <div className="text-xl font-extrabold text-white">{p.title}</div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity">
                <div className="text-[10px] font-semibold text-white/70 uppercase tracking-widest">{p.category}</div>
                <div className="text-base font-bold text-white mt-0.5 flex items-center gap-2">
                  {p.title}
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
