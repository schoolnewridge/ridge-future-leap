import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const HIGHLIGHTS = [
  { Icon: Users, title: "Parent Partnership", desc: "Regular communication and support that keeps families informed." },
  { Icon: ShieldCheck, title: "Safe Learning", desc: "A secure campus where children can learn with confidence." },
  { Icon: Sparkles, title: "Holistic Development", desc: "Academics and activities that support each child’s growth." },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="School Promise"
          title="What families can expect"
          description="Support, safety and balanced development at school."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="h-12 w-12 rounded-2xl bg-gold-gradient grid place-items-center text-gold-foreground shadow-gold">
                <item.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center text-sm text-muted-foreground">
          Supportive learning · Safe campus · Balanced development
        </div>
      </div>
    </section>
  );
}
