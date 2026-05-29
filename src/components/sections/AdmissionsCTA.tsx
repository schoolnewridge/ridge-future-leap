import { ArrowRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { SITE } from "@/lib/site";

export function AdmissionsCTA() {
  return (
    <section className="relative overflow-hidden bg-soft-gradient py-12 sm:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(29,78,216,0.06),transparent_40%),radial-gradient(circle_at_82%_72%,rgba(250,204,21,0.08),transparent_38%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm">
              Admissions Open
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold leading-tight text-slate-900">
              Talk to the admissions team.
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-lg">
              Ask about Nursery to Class X, the learning programs and the admission process.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/#admissions"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-3 font-semibold text-gold-foreground shadow-sm"
            >
              <ArrowRight className="h-4 w-4" /> Apply Now
            </a>
            <a
              href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-3 font-semibold text-gold-foreground shadow-sm"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phones[0]}
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 font-semibold text-primary shadow-sm"
            >
              <FaWhatsapp className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
