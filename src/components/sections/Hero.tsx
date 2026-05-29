import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { HERO_SLIDES } from "@/lib/images";
import { SITE } from "@/lib/site";

const SLIDES = HERO_SLIDES;

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="scroll-mt-24 relative overflow-hidden bg-white pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute top-16 right-0 h-96 w-96 rounded-full bg-yellow-100/70 blur-3xl" />
        <div className="absolute inset-0 school-grid opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.04fr_0.96fr] gap-10 lg:gap-14 items-center min-h-[calc(100svh-9rem)] py-8 lg:py-0">
        <div className="max-w-3xl lg:flex lg:flex-col z-10">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-[11px] font-medium leading-tight tracking-wide text-primary shadow-sm max-w-[36rem]">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              {SLIDES[i].eyebrow}
            </span>
            <h1 className="mt-6 max-w-[12ch] font-display text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.02]">
              {SLIDES[i].title}
            </h1>
            <div className="mt-6 h-1.5 w-36 rounded-full bg-gold-gradient" />
            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed lg:min-h-[3.5rem]">
              {SLIDES[i].desc}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3 lg:mt-10"
          >
            <a
              href="/#admissions"
              className="group inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-7 py-3.5 font-semibold shadow-gold hover:scale-105 transition-transform"
            >
              Apply for Admission
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-elegant hover:scale-105 transition-transform"
            >
              Explore Programs
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-7 py-3.5 font-semibold text-primary shadow-sm hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-4 w-4" /> Contact Us
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-7 py-3.5 font-semibold text-green-700 hover:bg-green-50 transition-colors"
            >
              <FaWhatsapp className="h-4 w-4" /> WhatsApp
            </a>
          </motion.div>

        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[2rem] bg-white p-3 sm:p-4 shadow-elegant border border-slate-200 aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[600px] xl:h-[650px]"
            >
              <img src={SLIDES[i].src} alt={SLIDES[i].alt} className="h-full w-full object-cover rounded-[1.4rem]" loading={i === 0 ? "eager" : "lazy"} decoding="async" />
              <div className="absolute inset-4 rounded-[1.4rem] bg-gradient-to-t from-slate-950/65 via-slate-950/18 to-transparent pointer-events-none" />
              <div className="absolute left-8 bottom-8 right-8 rounded-2xl border border-white/70 bg-white/90 backdrop-blur-xl p-4 shadow-[0_16px_30px_rgba(15,23,42,0.12)]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-primary font-semibold">New Ridge School</div>
                    <div className="mt-1 font-display text-2xl font-semibold text-slate-900">{SLIDES[i].title}</div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary border border-blue-100">
                    {SLIDES[i].eyebrow}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              "ROBO RIDGE",
              "STEMX Foundation",
              "Play-Way Learning",
            ].map((label) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-600 shadow-sm">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden lg:flex flex-col gap-3">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-10 w-1 rounded-full transition-all ${idx === i ? "bg-primary h-14" : "bg-primary/20"}`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
