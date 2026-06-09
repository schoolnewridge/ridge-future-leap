import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Youtube } from "lucide-react";

const VIDEO_ID = "Y6_UxsReLsQ";

export function Videos() {
  return (
    <section id="videos" className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="VIDEOS"
          title="Experience New Ridge School"
          description="Explore our classrooms, STEM learning, cultural programs, annual day celebrations, sports activities, and student achievements through video highlights from New Ridge School."
        />

        <div className="mt-14 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:shadow-elegant group"
          >
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 h-full w-full border-0"
                src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                title="New Ridge School Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
