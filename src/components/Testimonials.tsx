import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Founder, Bloom & Co',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    text: "Web Proxy Solutions transformed our online presence. Our new website looks stunning and our sales have grown 3x in just two months. Highly recommend!",
  },
  {
    name: 'Rohan Mehta',
    role: 'CEO, Nexora Tech',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    text: 'Professional, fast, and affordable — exactly what they promised. The team truly understands modern web design and social media strategy.',
  },
  {
    name: 'Ananya Kapoor',
    role: 'Marketing Lead, Urbanlyft',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    text: "Our Instagram grew from 500 to 10K followers in 4 months. Their content strategy and design work are truly top-notch.",
  },
  {
    name: 'David Chen',
    role: 'Owner, Pulsewave Fitness',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    text: "The landing page they built converts like crazy. Clean, fast, and built exactly for our audience. Worth every penny.",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" ref={ref} className="relative py-24 sm:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-xs font-semibold text-blue-700 mb-5">
            ⭐ Client Love
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            What Our Clients <span className="text-shine">Say About Us</span>
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="relative glass rounded-3xl p-8 sm:p-12 border border-white/60 shadow-2xl"
          >
            <Quote className="absolute top-6 left-6 w-12 h-12 text-blue-200" />

            <div className="relative">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[idx].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-800 text-center leading-relaxed tracking-tight">
                "{testimonials[idx].text}"
              </p>

              <div className="mt-10 flex items-center justify-center gap-4">
                <img
                  src={testimonials[idx].avatar}
                  alt={testimonials[idx].name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-lg"
                />
                <div>
                  <div className="font-bold text-slate-900">{testimonials[idx].name}</div>
                  <div className="text-sm text-slate-500">{testimonials[idx].role}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Nav buttons */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl border border-slate-200 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl border border-slate-200 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === i ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
