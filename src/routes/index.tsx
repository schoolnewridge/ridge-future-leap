import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyChoose } from "@/components/sections/WhyChoose";

import { Gallery } from "@/components/sections/Gallery";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";
import { AdmissionsForm } from "@/components/sections/AdmissionsForm";
import { META_IMAGE } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "New Ridge School Khammam — The Right Path to Success" },
      { name: "description", content: "CBSE and State integrated school in Khammam for Nursery to Class X." },
      { property: "og:title", content: "New Ridge School Khammam — The Right Path to Success" },
      { property: "og:description", content: "CBSE and State integrated school in Khammam · Nursery to Class X." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: META_IMAGE },
      { name: "twitter:image", content: META_IMAGE },
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

      <Gallery />
      <AdmissionsCTA />
      <div id="admissions" className="scroll-mt-24">
        <AdmissionsForm />
      </div>
    </>
  );
}
