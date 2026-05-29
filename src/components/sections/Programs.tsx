import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BROCHURE_PROGRAMS } from "@/lib/brochure";
import { ABOUT_IMAGES } from "@/lib/images";

export function Programs() {
  return (
    <section className="py-16 sm:py-20 bg-soft-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Programs"
          title="Learning programs"
          description="Three programs that support early learning and hands-on learning."
        />

        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] items-stretch">
            <div className="relative min-h-[240px] sm:min-h-[300px]">
              <img src={ABOUT_IMAGES.classroom} alt="New Ridge classroom used for academic programs" className="h-full w-full object-cover" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-950/15 to-transparent" />
            </div>
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-[0.28em] text-primary font-semibold">Academic focus</div>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-slate-900">Programs built around real classroom learning</h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 max-w-xl">
                The classroom photo gives parents a direct view of the environment where ROBO RIDGE, STEMX Foundation and Play-Way Learning come to life.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BROCHURE_PROGRAMS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-3xl bg-card p-7 border border-border hover:shadow-elegant hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gold/10 blur-2xl group-hover:bg-gold/30 transition-colors" />
              <div className="relative">
                <div className="h-14 w-14 grid place-items-center rounded-2xl bg-accent text-primary group-hover:bg-gold-gradient group-hover:text-gold-foreground transition-colors">
                  <p.icon className="h-7 w-7" />
                </div>
                <div className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">{p.label}</div>
                <h3 className="mt-1 text-xl font-semibold text-primary">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
