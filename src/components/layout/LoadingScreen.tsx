import { motion } from "framer-motion";
import { BRANDING_IMAGE } from "@/lib/images";

export function LoadingScreen() {
  return (
    <div className="min-h-screen grid place-items-center bg-soft-gradient px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-sm rounded-3xl border border-border bg-card/95 p-8 text-center shadow-elegant"
      >
        <img src={BRANDING_IMAGE} alt="New Ridge School logo" className="mx-auto h-20 w-20 rounded-2xl shadow-sm" />
        <div className="mt-5 font-display text-2xl font-semibold text-primary">New Ridge School</div>
        <p className="mt-2 text-sm text-muted-foreground">Loading the school experience…</p>
        <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-blue-100">
          <div className="h-full w-1/2 rounded-full bg-gold-gradient animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
}