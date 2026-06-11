import { createFileRoute } from "@tanstack/react-router";
import { StemRobotics } from "@/components/sections/StemRobotics";
import { motion } from "framer-motion";
import roboImage from "../../nr_robo.png";

export const Route = createFileRoute("/stem-robotics")({
  head: () => ({
    meta: [
      { title: "STEM & Robotics — New Ridge School" },
      { name: "description", content: "Official learning programs at New Ridge School Khammam: ROBO RIDGE, STEMX Foundation Program and Play-Way Learning." },
      { property: "og:title", content: "STEM & Robotics — New Ridge School" },
      { property: "og:description", content: "ROBO RIDGE, STEMX Foundation Program and Play-Way Learning." },
      { property: "og:url", content: "/stem-robotics" },
    ],
    links: [{ rel: "canonical", href: "/stem-robotics" }],
  }),
  component: StemPage,
});

function StemHero() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-white overflow-hidden border-b border-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,78,216,0.08),transparent_38%),radial-gradient(circle_at_80%_70%,rgba(250,204,21,0.12),transparent_34%)]" />
      <div className="absolute inset-0 opacity-[0.45] school-grid" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="text-left text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> STEM & Robotics
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900"
            >
              Innovation Through Robotics
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}
              className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Hands-on learning with robotics, coding, STEM exploration, and future technologies.
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 mx-auto lg:mx-0 h-1.5 w-32 rounded-full bg-gold-gradient" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-gold/20 blur-2xl rounded-full opacity-60" />
            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-white/40 bg-white"
            >
              <img src={roboImage} alt="STEM and Robotics at New Ridge School" className="w-full h-auto object-cover aspect-square sm:aspect-[4/3] lg:aspect-[4/3] hover:scale-105 transition-transform duration-700 ease-out" style={{ objectPosition: "center top" }} />
              
              <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-white flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider">Future-Ready Learning</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function StemPage() {
  return (
    <>
      <StemHero />
      <StemRobotics />
    </>
  );
}
