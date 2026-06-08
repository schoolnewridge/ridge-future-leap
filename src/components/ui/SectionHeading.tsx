import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase border ${
            light ? "bg-white/10 text-gold border-white/10" : "bg-blue-50 text-primary border-blue-100"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className={`mt-4 font-display text-responsive-h2 font-semibold tracking-tight ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`mt-4 text-responsive-p leading-relaxed ${
            light ? "text-white/70" : "text-slate-600"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
