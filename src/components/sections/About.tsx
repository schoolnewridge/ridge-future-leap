import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { BookOpen, ShieldCheck, Users, Award, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { ABOUT_IMAGES } from "@/lib/images";

const FEATURES = [
  {
    icon: BookOpen,
    title: "CBSE & State Curriculum",
    desc: "Integrated learning framework",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    desc: "Experienced educators",
  },
  {
    icon: ShieldCheck,
    title: "Safe Campus",
    desc: "Secure nurturing environment",
  },
  {
    icon: Award,
    title: "Holistic Development",
    desc: "Focus on overall growth",
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
    <section id="about" className="scroll-mt-24 py-20 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Premium Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative lg:w-[110%] xl:w-[120%] mt-8 lg:mt-0"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
              <img src={ABOUT_IMAGES.campus} alt="New Ridge School campus exterior" className="h-full w-full object-cover" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 sm:-bottom-12 sm:-right-8 w-[55%] sm:w-[50%] aspect-[4/3] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border-4 border-white z-10"
            >
              <img src={ABOUT_IMAGES.classroom} alt="Classroom at New Ridge School" className="h-full w-full object-cover object-center" loading="lazy" decoding="async" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -top-6 -left-4 sm:-top-10 sm:-left-10 w-[55%] sm:w-[45%] aspect-[16/10] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border-4 border-white z-10 bg-slate-50"
            >
              <img src={ABOUT_IMAGES.community} alt="Student community at New Ridge School" className="h-full w-full object-contain bg-slate-50" loading="lazy" decoding="async" />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 lg:mt-0"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50/80 border border-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                Welcome to New Ridge
              </span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight">
              A foundation of excellence for the leaders of tomorrow.
            </motion.h2>
            
            <motion.p variants={itemVariants} className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              {SITE.name} is dedicated to cultivating an environment where academic rigor meets holistic growth. From Nursery to Class X, our modern facilities and nurturing culture empower students to achieve their highest potential.
            </motion.p>

            {/* Feature Cards Grid */}
            <motion.div variants={itemVariants} className="mt-10 grid sm:grid-cols-2 gap-4 lg:gap-6">
              {FEATURES.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all group">
                    <div className="flex-shrink-0 grid place-items-center h-12 w-12 rounded-xl bg-blue-50 text-primary group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-base">{feature.title}</h3>
                      <p className="mt-1 text-sm text-slate-500 leading-snug">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
              <Link 
                to="/programs" 
                className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 font-semibold shadow-elegant hover:scale-105 transition-transform"
              >
                Explore Academic Programs
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
