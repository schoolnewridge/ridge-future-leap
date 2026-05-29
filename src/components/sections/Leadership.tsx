import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LEADERSHIP_IMAGES } from "@/lib/images";

const MESSAGES = [
  {
    eyebrow: "Director's Message",
    title: "Discipline, care and steady growth",
    image: LEADERSHIP_IMAGES.director,
    alt: "Director of New Ridge School",
    message:
      "At New Ridge School, we believe children grow best when structure, encouragement and values move together. Our focus is on building confidence, habits of responsibility, and a strong foundation for the years ahead.",
  },
  {
    eyebrow: "Principal's Message",
    title: "A school where every child is seen",
    image: LEADERSHIP_IMAGES.principal,
    alt: "Principal of New Ridge School",
    message:
      "We aim to create a calm, disciplined and engaging environment where students can learn with confidence. Every classroom, activity and interaction is designed to help children feel supported and ready to succeed.",
  },
] as const;

export function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-24 py-16 sm:py-20 lg:py-24 bg-soft-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title="Guidance from the school leadership"
          description="Meet the people leading New Ridge School with a focus on discipline, values and student growth."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {MESSAGES.map((leader, idx) => (
            <motion.article
              key={leader.eyebrow}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              <div className="grid md:grid-cols-[0.95fr_1.05fr] h-full">
                <div className="relative min-h-[260px] sm:min-h-[300px] md:h-full aspect-[4/3] md:aspect-auto">
                  <img src={leader.image} alt={leader.alt} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                    {leader.eyebrow}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-slate-900 leading-tight">{leader.title}</h3>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">{leader.message}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
