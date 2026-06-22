import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
            <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
            <div className="absolute inset-0 rounded-xl bg-blue-400/30 blur-lg -z-10" />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-slate-900 tracking-tight text-base">Web Proxy</div>
            <div className="text-[10px] font-semibold tracking-[0.2em] text-blue-600 uppercase">Solutions</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1 glass rounded-full px-2 py-1.5 border border-slate-200/70">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.03] transition-all"
          >
            Get Free Quote
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mx-5 mt-3 glass rounded-2xl border border-slate-200 p-4"
        >
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 rounded-xl"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl"
            >
              Get Free Quote
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
