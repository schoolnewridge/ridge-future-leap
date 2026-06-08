import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { BookOpen, ShieldCheck, Users, Award, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

const FEATURES = [
  {
    icon: BookOpen,
    title: "CBSE & State Curriculum",
    desc: "Integrated learning framework designed for comprehensive understanding.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    desc: "Experienced educators dedicated to personal student growth.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Campus",
    desc: "Secure, nurturing environment for peace of mind.",
  },
  {
    icon: Award,
    title: "Holistic Development",
    desc: "Focus on academics, arts, sports, and overall character.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 lg:py-32 bg-background overflow-hidden">
      {/* Premium Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full -z-10 pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-gold/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-70" />
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50/80 border border-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-sm">
              Welcome to New Ridge
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] tracking-tight max-w-4xl">
            A foundation of excellence for the leaders of tomorrow.
          </motion.h2>
          
          <motion.p variants={itemVariants} className="mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
            {SITE.name} is dedicated to cultivating an environment where academic rigor meets holistic growth. From Nursery to Class X, our modern facilities and nurturing culture empower students to achieve their highest potential.
          </motion.p>

          {/* Feature Cards Grid - 4 Columns on large screens, 2 on tablet */}
          <motion.div variants={itemVariants} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
            {FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex flex-col gap-4 p-6 sm:p-8 rounded-[2rem] bg-white/70 backdrop-blur-md border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-100 transition-all duration-300 group">
                  <div className="flex-shrink-0 grid place-items-center h-14 w-14 rounded-2xl bg-blue-50 text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm border border-blue-100/50">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg">{feature.title}</h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16">
            <Link 
              to="/programs" 
              className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-10 py-5 text-base sm:text-lg font-semibold shadow-elegant hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              Explore Academic Programs
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
