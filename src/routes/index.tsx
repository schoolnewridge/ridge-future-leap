import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Results } from "@/components/sections/Results";
import { Leadership } from "@/components/sections/Leadership";
import { Gallery } from "@/components/sections/Gallery";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";
import { AdmissionsForm } from "@/components/sections/AdmissionsForm";
import { HERO_SLIDES } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "New Ridge School Khammam — The Right Path to Success" },
      { name: "description", content: "CBSE and State integrated school in Khammam for Nursery to Class X." },
      { property: "og:title", content: "New Ridge School Khammam — The Right Path to Success" },
      { property: "og:description", content: "CBSE and State integrated school in Khammam · Nursery to Class X." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: HERO_SLIDES[0].src },
      { name: "twitter:image", content: HERO_SLIDES[0].src },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <WhyChoose />
      <Results />
      <Leadership />
      <Gallery />
      <AdmissionsCTA />
      <div id="admissions" className="scroll-mt-24">
        <AdmissionsForm />
      </div>
    </>
  );
}
