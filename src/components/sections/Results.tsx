import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BROCHURE_POSITIONING } from "@/lib/brochure";

export function Results() {
  return (
    <section id="facilities" className="scroll-mt-24 py-12 sm:py-16 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Learning at a glance"
          title="A calm, structured school environment"
          description="Key parts of the school experience families can expect."
        />

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {BROCHURE_POSITIONING.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-xl p-4 bg-gradient-to-br from-primary to-primary-glow text-white shadow-sm"
            >
              <div className="font-semibold text-sm leading-relaxed">{item}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
