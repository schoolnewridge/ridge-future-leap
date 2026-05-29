import { motion } from "framer-motion";
import { ReactNode } from "react";

export function PageHero({ eyebrow, title, description, children }: { eyebrow?: string; title: string; description?: string; children?: ReactNode }) {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-white overflow-hidden border-b border-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,78,216,0.08),transparent_38%),radial-gradient(circle_at_80%_70%,rgba(250,204,21,0.12),transparent_34%)]" />
      <div className="absolute inset-0 opacity-[0.45] school-grid" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
          className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}
            className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        <div className="mt-8 mx-auto h-1.5 w-32 rounded-full bg-gold-gradient" />
        {children}
      </div>
    </section>
  );
}
