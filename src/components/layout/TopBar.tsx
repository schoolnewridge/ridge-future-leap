import { Phone, Mail, Facebook, Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";

export function TopBar() {
  return (
    <div className="hidden md:block border-b border-white/10 bg-[linear-gradient(90deg,rgba(7,17,41,0.94)_0%,rgba(11,16,32,0.92)_45%,rgba(30,27,22,0.92)_100%)] text-xs text-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-5">
          <a href={`tel:${SITE.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-1.5 transition-colors hover:text-yellow-300">
            <Phone className="h-3 w-3" /> {SITE.phones[0]}
          </a>
          <a href={`tel:${SITE.phones[1].replace(/\s/g, "")}`} className="hidden items-center gap-1.5 transition-colors hover:text-yellow-300 lg:flex">
            <Phone className="h-3 w-3" /> {SITE.phones[1]}
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 transition-colors hover:text-yellow-300">
            <Mail className="h-3 w-3" /> {SITE.email}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-300/20 bg-white/10 px-3 py-1 font-semibold text-yellow-200 shadow-[0_0_18px_rgba(250,204,21,0.18)]">
            <Sparkles className="h-3 w-3" /> Admissions Open 2025-26
          </span>
          <div className="flex items-center gap-3 text-white/70">
            <a href={SITE.socials.facebook} aria-label="Facebook" className="transition-colors hover:text-yellow-300"><Facebook className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
