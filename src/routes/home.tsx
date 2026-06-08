import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/home")({
  component: HomeRedirect,
});

function HomeRedirect() {
  useEffect(() => {
    window.location.replace("/");
  }, []);

  return null;
}
