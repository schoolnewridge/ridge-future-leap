import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { StemRobotics } from "@/components/sections/StemRobotics";

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

function StemPage() {
  return (
    <>
      <PageHero eyebrow="STEM & Robotics" title="Learning programs" description="ROBO RIDGE, STEMX Foundation Program and Play-Way Learning." />
      <StemRobotics />
    </>
  );
}
