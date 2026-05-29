import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — New Ridge School Khammam" },
      { name: "description", content: "Facilities at New Ridge School Khammam: computer lab, science lab, digital class rooms and a safe campus." },
      { property: "og:title", content: "Facilities — New Ridge School Khammam" },
      { property: "og:description", content: "Computer lab, science lab, digital class rooms and a safe campus." },
      { property: "og:url", content: "/#facilities" },
    ],
    links: [{ rel: "canonical", href: "/#facilities" }],
  }),
  component: FacilitiesRedirect,
});

function FacilitiesRedirect() {
  useEffect(() => {
    window.location.replace("/#facilities");
  }, []);

  return null;
}
