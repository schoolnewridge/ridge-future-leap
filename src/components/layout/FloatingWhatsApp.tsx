import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi, I'd like to know more about admissions at New Ridge School.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping" />
      <span className="relative grid place-items-center h-14 w-14 rounded-full bg-green-500 text-white shadow-xl group-hover:scale-110 transition-transform">
        <MessageCircle className="h-6 w-6" />
      </span>
    </a>
  );
}
