import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_IMAGES, LEADERSHIP_IMAGES } from "@/lib/images";

const HIGHLIGHTS = [
  { src: ABOUT_IMAGES.campus, title: "Campus Life" },
  { src: ABOUT_IMAGES.classroom, title: "Digital Class Rooms" },
  { src: LEADERSHIP_IMAGES.director, title: "Colours Day" },
];

export function VideoGallery() {
  return (
    <section className="py-24 sm:py-32 bg-soft-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="School Life"
          title="School moments"
          description="A small look at campus life, digital class rooms and Colours Day."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-elegant"
            >
              <div className="relative aspect-video">
                <img src={v.src} alt={v.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] uppercase tracking-wider">
                    <Camera className="h-3.5 w-3.5 text-gold" /> School Highlights
                  </div>
                  <div className="mt-3 text-lg font-semibold">{v.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
