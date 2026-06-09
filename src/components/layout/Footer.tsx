import { Link } from "@tanstack/react-router";
import { SITE, NAV } from "@/lib/site";
import { BRANDING_IMAGE } from "@/lib/images";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { useSanityData } from "@/sanity/hooks";
import { contactQuery } from "@/sanity/queries";

export function Footer() {
  const { data: sanityContact } = useSanityData<any>(contactQuery);

  const address = sanityContact?.address || `${SITE.address.line1}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.postal}`;
  const phones = sanityContact ? [sanityContact.phone1, sanityContact.phone2].filter(Boolean) : SITE.phones;
  const email = sanityContact?.email || SITE.email;

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
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>{address}</span></li>
              {phones.map((p) => (
                <li key={p} className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /><a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-gold">{p}</a></li>
              ))}
              <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /><a href={`mailto:${email}`} className="hover:text-gold">{email}</a></li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-xs font-semibold text-gold/80 uppercase tracking-wider mb-4">Follow Us</h4>
              <div className="flex items-center gap-3">
                <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/80 transition-all hover:scale-110 hover:border-gold hover:text-gold"><Facebook className="h-4 w-4" /></a>
                <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/80 transition-all hover:scale-110 hover:border-gold hover:text-gold"><Instagram className="h-4 w-4" /></a>
                <a href={SITE.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube channel" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/80 transition-all hover:scale-110 hover:border-gold hover:text-gold"><Youtube className="h-4 w-4" /></a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider">Find Us</h4>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <div className="font-semibold text-white">New Ridge School</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {address}
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

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div className="text-center sm:text-left">© {new Date().getFullYear()} New Ridge School, Khammam. All rights reserved.</div>
          <div className="text-center sm:text-right">Manasa Educational Society · CBSE & State Integrated · Nursery – X</div>
        </div>

        {/* Agency Branding */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col items-center justify-center text-center">
          <div className="text-[14px] md:text-[15px] text-[#BFC5D2]/90 leading-relaxed space-y-1">
            <div>
              Website Designed & Developed by <span className="font-semibold transition-colors duration-300 hover:text-gold cursor-default">SharanLabs</span>
            </div>
            <div className="text-[13px] md:text-[14px] text-[#BFC5D2]/70 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-1">
              <a href="tel:9392379354" className="transition-colors duration-300 hover:text-white">Phone: 9392379354</a>
              <span className="hidden sm:inline">•</span>
              <a href="mailto:sharanlabs.official@gmail.com" className="transition-colors duration-300 hover:text-white">Email: sharanlabs.official@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
