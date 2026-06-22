import { Sparkles, MessageCircle } from 'lucide-react';

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
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      <div className="absolute inset-0 bg-grid-light opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[30rem] bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="font-extrabold text-white tracking-tight text-base">Web Proxy</div>
                <div className="text-[10px] font-semibold tracking-[0.2em] text-blue-400 uppercase">Solutions</div>
              </div>
            </a>
            <p className="mt-5 text-sm text-slate-400 leading-relaxed">
              Smart digital solutions at affordable prices. Helping businesses grow online through beautiful websites and strategic social media management.
            </p>
            <div className="mt-6 flex gap-2">
              {[InstagramIcon, FacebookIcon, TwitterIcon, LinkedInIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4 text-slate-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Quick Links</h5>
            <ul className="space-y-3 text-sm">
              {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Services</h5>
            <ul className="space-y-3 text-sm">
              {[
                'Business Websites',
                'Landing Pages',
                'Portfolio Sites',
                'Website Redesign',
                'Social Media Management',
                'Content Creation',
              ].map((l) => (
                <li key={l}>
                  <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Contact</h5>
            <ul className="space-y-3 text-sm">
              <li className="text-slate-400">📞 +91 99999 99999</li>
              <li className="text-slate-400">✉ hello@webproxy.in</li>
              <li className="text-slate-400">📍 Mumbai, India</li>
            </ul>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg text-xs font-semibold hover:bg-green-500 hover:text-white hover:border-green-500 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 text-center sm:text-left">
            Web Proxy Solutions — <span className="text-slate-300">Smart Digital Solutions at Affordable Prices</span>
          </p>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Web Proxy Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
