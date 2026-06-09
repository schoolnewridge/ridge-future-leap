import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Youtube } from "lucide-react";

// Latest videos from the New Ridge School Khammam YouTube channel
const VIDEOS = {
  featured: "Y6_UxsReLsQ",
  grid: [
    "8oYApWjuG_A",
    "mFHxtkEHaAU",
    "Y8mwt9_Lpsk",
  ]
};

export function Videos() {
  return (
    <section id="videos" className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="VIDEOS"
          title="Experience New Ridge School"
          description="Explore our classrooms, STEM learning, cultural programs, annual day celebrations, sports activities, and student achievements through video highlights from New Ridge School."
        />

        <div className="mt-14 flex flex-col gap-6 lg:gap-8">
          {/* Featured Large Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:shadow-elegant group"
          >
            <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 h-full w-full border-0"
                src={`https://www.youtube.com/embed/${VIDEOS.featured}`}
                title="New Ridge School Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Grid Videos */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {VIDEOS.grid.map((videoId, index) => (
              <motion.div
                key={`${videoId}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="w-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:shadow-elegant group"
              >
                <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                  <iframe
                    className="absolute top-0 left-0 h-full w-full border-0"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`New Ridge School Video Highlight ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://youtube.com/@newridgeschoolkhammam4249?si=KStTPY93ph3ZJyWI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF0000] px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#CC0000] hover:shadow-xl active:scale-95"
          >
            <Youtube className="h-5 w-5" />
            Visit Our YouTube Channel
          </a>
        </motion.div>
      </div>
    </section>
  );
}
