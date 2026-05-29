import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BROCHURE_PROGRAMS } from "@/lib/brochure";

export function StemRobotics() {
  return (
    <section className="relative py-16 sm:py-20 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(29,78,216,0.06),transparent_42%),radial-gradient(circle_at_82%_70%,rgba(250,204,21,0.10),transparent_38%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Learning Programs"
          title="ROBO RIDGE, STEMX Foundation and Play-Way Learning"
          description="Three programs that support hands-on and early learning."
        />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BROCHURE_PROGRAMS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-3xl p-7 bg-white border border-slate-200 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
            >
              <div className="h-14 w-14 grid place-items-center rounded-2xl bg-[linear-gradient(135deg,#1d4ed8_0%,#60a5fa_100%)] text-white shadow-elegant">
                <p.icon className="h-7 w-7" />
              </div>
              <div className="mt-5 text-xs uppercase tracking-wider text-slate-500">{p.label}</div>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
