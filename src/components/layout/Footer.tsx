import { Link } from "@tanstack/react-router";
import { SITE, NAV } from "@/lib/site";
import { BRANDING_IMAGE } from "@/lib/images";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[linear-gradient(135deg,#1e3a8a_0%,#0f172a_100%)] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_38%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src={BRANDING_IMAGE} alt="New Ridge School logo" className="h-14 w-14 rounded-2xl ring-2 ring-gold/50 object-cover" loading="lazy" decoding="async" />
              <div>
                <div className="font-display text-xl font-semibold">New Ridge School</div>
                <div className="text-xs text-gold tracking-wider uppercase">{SITE.tagline}</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/75 leading-relaxed max-w-sm">
              A CBSE and State integrated school in Khammam for Nursery to Class X.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider">Explore</h4>
            <ul className="mt-4 space-y-2">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-sm text-white/80 hover:text-gold transition-colors">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>{SITE.address.line1}, {SITE.address.city}, {SITE.address.state} {SITE.address.postal}</span></li>
              {SITE.phones.map((p) => (
                <li key={p} className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /><a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-gold">{p}</a></li>
              ))}
              <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /><a href={`mailto:${SITE.email}`} className="hover:text-gold">{SITE.email}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider">Find Us</h4>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <div className="font-semibold text-white">New Ridge School</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {SITE.address.line1}, {SITE.address.city}, {SITE.address.state} {SITE.address.postal}
                  </p>
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-gold-foreground transition-colors hover:bg-gold/90"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70">
          <div>© {new Date().getFullYear()} New Ridge School, Khammam. All rights reserved.</div>
          <div>Manasa Educational Society · CBSE & State Integrated · Nursery – X</div>
        </div>
      </div>
    </footer>
  );
}
