import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/ui/Lightbox";
import { GALLERY_CATEGORIES as FALLBACK_CATEGORIES } from "@/lib/images";
import { useSanityData } from "@/sanity/hooks";
import { galleryQuery } from "@/sanity/queries";

type OpenImage = { src: string; alt: string } | null;

export function Gallery() {
  const [open, setOpen] = useState<OpenImage>(null);
  const { data: sanityGallery } = useSanityData<any[]>(galleryQuery);

  const hasSanityData = sanityGallery && sanityGallery.length > 0;

  let categoriesToDisplay: any[] = [];

  if (hasSanityData) {
    // Dynamically group gallery items by their Sanity category
    const grouped = sanityGallery.reduce((acc: any, item: any) => {
      const catName = item.category || "Uncategorized";
      if (!acc[catName]) {
        acc[catName] = {
          name: catName,
          description: "", // Fallback description for dynamic categories
          items: []
        };
      }
      acc[catName].items.push({
        src: item.imageUrl,
        alt: item.title || catName,
        caption: item.title,
        focalPoint: "center center" // Default focal point
      });
      return acc;
    }, {});
    
    categoriesToDisplay = Object.values(grouped);
  } else {
    // Fallback strictly to hardcoded data if Sanity is empty
    categoriesToDisplay = FALLBACK_CATEGORIES;
  }

  return (
    <section id="gallery" className="scroll-mt-24 py-12 sm:py-14 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Campus Life"
          title="Campus spaces and activities"
          description="A look at the school’s classrooms, celebrations and student activities."
        />

        <div className="mt-10 space-y-10">
          {categoriesToDisplay.map((category, categoryIndex) => (
            <motion.section
              key={category.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.05 }}
              className="space-y-4"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900">{category.name}</h3>
                {category.description && (
                  <p className="text-sm text-slate-600 max-w-2xl">{category.description}</p>
                )}
              </div>
              <div className={`grid gap-3 sm:grid-cols-2 ${category.items.length === 4 ? 'lg:grid-cols-4' : category.items.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} auto-rows-[190px]`}>
                {category.items.map((item: any, idx: number) => (
                  <motion.button
                    key={`${category.name}-${item.caption || idx}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.05 }}
                    onClick={() => setOpen({ src: item.src, alt: item.alt })}
                    className="relative group overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-elegant transition-shadow"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={item.focalPoint ? { objectPosition: item.focalPoint } : undefined}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent opacity-85 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-left text-white">
                      <div className="text-[11px] uppercase tracking-[0.24em] text-white/70">{category.name}</div>
                      <div className="mt-1 font-semibold leading-tight">{item.caption}</div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
      <Lightbox src={open?.src ?? null} alt={open?.alt} onClose={() => setOpen(null)} />
    </section>
  );
}
