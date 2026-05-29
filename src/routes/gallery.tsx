import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { Gallery } from "@/components/sections/Gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — New Ridge School Khammam" },
      { name: "description", content: "Gallery at New Ridge School Khammam: computer lab, science lab, digital class rooms, karate, yoga, chess, indoor games, Colours Day and skill development." },
      { property: "og:title", content: "Gallery — New Ridge School Khammam" },
      { property: "og:description", content: "Computer Lab, Science Lab, Digital Class Rooms, Karate, Yoga, Chess, Indoor Games, Colours Day and Skill Development." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Campus life" description="Computer Lab, Science Lab, Digital Class Rooms, Karate, Yoga, Chess, Indoor Games, Colours Day and Skill Development." />
      <Gallery />
    </>
  );
}
