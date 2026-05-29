import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — New Ridge School Khammam" },
      { name: "description", content: "Submit the school admission enquiry online for Nursery to Class X." },
      { property: "og:title", content: "Admissions — New Ridge School Khammam" },
      { property: "og:description", content: "Submit the school admission enquiry online for Nursery to Class X." },
      { property: "og:url", content: "/#admissions" },
    ],
    links: [{ rel: "canonical", href: "/#admissions" }],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  useEffect(() => {
    window.location.replace("/#admissions");
  }, []);

  return null;
}
