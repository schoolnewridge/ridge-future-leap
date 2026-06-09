import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LEADERSHIP_IMAGES } from "@/lib/images";

const LEADERS = [
  {
    name: "K. Padma",
    title: "Principal & Correspondent",
    image: LEADERSHIP_IMAGES.principal,
    focalPoint: "center 20%",
    message:
      "Our focus is on holistic learning and student growth. We believe in creating a nurturing and dynamic educational environment that encourages curiosity, critical thinking, and a lifelong love for learning. Together with our dedicated educators, we strive to shape confident and responsible global citizens.",
  },
  {
    name: "K. Rajasekhar",
    title: "Director",
    image: LEADERSHIP_IMAGES.director,
    focalPoint: "center 15%",
    message:
      "Education is not just about academic excellence; it is about building character, fostering innovation, and preparing students for the challenges of tomorrow. At New Ridge School, our mission is to provide an environment where every child feels valued, inspired, and equipped to achieve their highest potential.",
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title="Message from Our Leadership"
          description="Guiding New Ridge School towards academic excellence and holistic student development."
        />
        
        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {LEADERS.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-card border border-border shadow-sm transition-all hover:shadow-elegant"
            >
              <div className="flex flex-col sm:flex-row h-full">
                <div className="relative aspect-[4/5] w-full sm:aspect-auto sm:h-auto sm:w-2/5 shrink-0 overflow-hidden bg-slate-100">
                  <img
                    src={leader.image}
                    alt={`${leader.name} - ${leader.title}, New Ridge School`}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: leader.focalPoint }}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent sm:hidden" />
                </div>
                
                <div className="flex flex-col justify-center p-6 sm:p-8 sm:w-3/5">
                  <div className="mb-2 inline-flex">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      {leader.title}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    {leader.name}
                  </h3>
                  
                  <div className="mt-4 flex-1">
                    <p className="relative text-sm leading-relaxed text-slate-600 italic">
                      <span className="absolute -left-2 -top-2 text-4xl text-primary/10">"</span>
                      {leader.message}
                      <span className="absolute -bottom-4 right-0 text-4xl text-primary/10">"</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
