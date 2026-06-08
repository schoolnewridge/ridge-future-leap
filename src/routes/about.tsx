import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { About } from "@/components/sections/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — New Ridge School Khammam" },
      { name: "description", content: "Our story, vision and mission at New Ridge School Khammam." },
      { property: "og:title", content: "About — New Ridge School Khammam" },
      { property: "og:description", content: "Our story, vision and mission at New Ridge School Khammam." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A school focused on steady learning"
        description="New Ridge School serves Nursery to Class X with a balanced academic and activity-based environment."
      />
      <About />
    </>
  );
}
