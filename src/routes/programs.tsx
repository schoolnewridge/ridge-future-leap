import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { Programs } from "@/components/sections/Programs";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Academic Programs — New Ridge School" },
      { name: "description", content: "Learning programs at New Ridge School Khammam: ROBO RIDGE, STEMX Foundation Program and Play-Way Learning." },
      { property: "og:title", content: "Academic Programs — New Ridge School" },
      { property: "og:description", content: "ROBO RIDGE, STEMX Foundation Program and Play-Way Learning." },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <>
      <PageHero eyebrow="Academic Programs" title="Learning programs" description="ROBO RIDGE, STEMX Foundation Program and Play-Way Learning." />
      <Programs />
      <AdmissionsCTA />
    </>
  );
}
