import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SITE } from "@/lib/site";
import { BROCHURE_POSITIONING } from "@/lib/brochure";
import { ABOUT_IMAGES } from "@/lib/images";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-sm sm:row-span-2">
                <img src={ABOUT_IMAGES.classroom} alt="Inside a New Ridge classroom" className="h-full w-full object-cover object-[center_72%]" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
              </div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
                <img src={ABOUT_IMAGES.campus} alt="New Ridge School campus exterior" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
              </div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
                <img src={ABOUT_IMAGES.community} alt="New Ridge School students gathered together" className="h-full w-full object-contain bg-slate-50" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-gold/20 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              About New Ridge
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-primary leading-tight">
              A school focused on steady learning and care.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
              {SITE.name} offers CBSE & State integrated learning from Nursery to Class X, with expert faculty, practical learning spaces and a warm campus environment.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 max-w-sm">
              {BROCHURE_POSITIONING.map((p) => (
                <div key={p} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="grid place-items-center h-6 w-6 rounded-full bg-gold-gradient text-gold-foreground">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {p}
                </div>
              ))}
            </div>

            <Link to="/programs" className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
              View programs
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
