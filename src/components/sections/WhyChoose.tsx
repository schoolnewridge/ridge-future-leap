import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BROCHURE_FEATURES } from "@/lib/brochure";

export function WhyChoose() {
  return (
    <section id="programs" className="scroll-mt-24 py-16 sm:py-20 bg-soft-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why New Ridge"
          title="What families can expect"
          description="A clear look at the school’s learning spaces and programs."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BROCHURE_FEATURES.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="group relative rounded-xl bg-card p-6 border border-border transition-all duration-200 shadow-sm"
            >
              <div className="h-12 w-12 grid place-items-center rounded-md bg-gradient-to-br from-primary to-primary-glow text-white">
                  <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
