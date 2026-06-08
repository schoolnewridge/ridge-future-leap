import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { Download } from "lucide-react";
import brochureFront from "../../brochure_front.png";
import brochureBack from "../../brochure_back.png";

export const Route = createFileRoute("/brochure")({
  head: () => ({
    meta: [
      { title: "New Ridge School Brochure | New Ridge School Khammam" },
      { name: "description", content: "Download and view the official New Ridge School brochure covering admissions, academics, STEM programs, campus facilities, and student life." },
      { property: "og:title", content: "New Ridge School Brochure | New Ridge School Khammam" },
      { property: "og:description", content: "Download and view the official New Ridge School brochure covering admissions, academics, STEM programs, campus facilities, and student life." },
      { property: "og:url", content: "/brochure" },
    ],
    links: [{ rel: "canonical", href: "/brochure" }],
  }),
  component: BrochurePage,
});

function BrochurePage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = brochureFront;
    link.download = "New_Ridge_School_Brochure.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <PageHero
        eyebrow="SCHOOL BROCHURE"
        title="New Ridge School Brochure"
        description="Explore our academic programs, campus facilities, STEM education, admissions process, and student life."
      />

      <section className="relative bg-slate-50 py-16 sm:py-24">
        {/* Background glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.06),transparent_60%)]" />
          <div className="absolute top-[20%] right-[0%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.08),transparent_60%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* CTA Section */}
          <div className="mb-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-100 lg:flex-row lg:p-10">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="font-display text-2xl font-semibold text-slate-900 sm:text-3xl">Download School Brochure</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Get complete information about New Ridge School including programs, admissions, campus facilities, STEM education, and student activities.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
              <button
                onClick={handleDownload}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                Download Brochure
              </button>
            </div>
          </div>

          {/* Brochure Viewer Layout */}
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="group overflow-hidden rounded-[2rem] bg-white p-2 shadow-[0_20px_40px_rgb(0,0,0,0.06)] ring-1 ring-slate-100 transition-all hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-slate-100">
                <img
                  src={brochureFront}
                  alt="Brochure Front Cover"
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
            
            <div className="group overflow-hidden rounded-[2rem] bg-white p-2 shadow-[0_20px_40px_rgb(0,0,0,0.06)] ring-1 ring-slate-100 transition-all hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-slate-100">
                <img
                  src={brochureBack}
                  alt="Brochure Back Cover"
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
