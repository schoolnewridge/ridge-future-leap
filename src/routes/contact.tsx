import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { SITE } from "@/lib/site";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { CONTACT_IMAGE } from "@/lib/images";
import { useSanityData } from "@/sanity/hooks";
import { contactQuery } from "@/sanity/queries";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — New Ridge School Khammam" },
      { name: "description", content: "Visit, call or WhatsApp New Ridge School Khammam. Address, phone numbers and a contact form." },
      { property: "og:title", content: "Contact — New Ridge School Khammam" },
      { property: "og:description", content: "Visit, call or WhatsApp New Ridge School Khammam." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { data: sanityContact } = useSanityData<any>(contactQuery);

  const address = sanityContact?.address || `${SITE.address.line1}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.postal}`;
  const phones = sanityContact ? [sanityContact.phone1, sanityContact.phone2].filter(Boolean) : SITE.phones;
  const email = sanityContact?.email || SITE.email;

  return (
    <>
      <PageHero eyebrow="Get in Touch" title="Contact New Ridge School" description="Call, message, or visit New Ridge School at Khanapuram Haveli on Yellandu Road, Khammam." />
      <section className="pt-16 pb-28 sm:py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col gap-10">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { Icon: MapPin, label: "Visit", value: address },
                { Icon: Phone, label: "Call", value: phones.join(" · ") },
                { Icon: Mail, label: "Email", value: email },
                { Icon: Clock, label: "Hours", value: "Mon–Sat · 8:30 AM – 4:30 PM" },
              ].map((c) => (
                <div key={c.label} className="rounded-3xl bg-card border border-border p-8 flex flex-col items-center text-center gap-5 shadow-sm hover:shadow-elegant transition-shadow">
                  <div className="h-16 w-16 grid place-items-center rounded-2xl bg-gold-gradient text-gold-foreground shrink-0 shadow-gold">
                    <c.Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="mt-2 text-foreground font-medium sm:text-lg">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <MapPin className="h-5 w-5" /> Open in Google Maps
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 text-white px-8 py-4 text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <FaWhatsapp className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Follow Us</div>
              <div className="flex items-center gap-4">
                <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border shadow-sm text-primary transition-all hover:scale-110 hover:border-gold hover:text-gold hover:shadow-elegant"><Facebook className="h-5 w-5" /></a>
                <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border shadow-sm text-primary transition-all hover:scale-110 hover:border-gold hover:text-gold hover:shadow-elegant"><Instagram className="h-5 w-5" /></a>
                <a href={SITE.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube channel" className="flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border shadow-sm text-primary transition-all hover:scale-110 hover:border-gold hover:text-gold hover:shadow-elegant"><Youtube className="h-5 w-5" /></a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 grid lg:grid-cols-[0.92fr_1.08fr] gap-6 items-stretch">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
            <img src={CONTACT_IMAGE.campus} alt="New Ridge School campus exterior" className="h-56 w-full object-cover sm:h-64" loading="lazy" decoding="async" />
            <div className="p-5 sm:p-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Campus identity</div>
              <div className="mt-2 font-display text-2xl font-semibold text-primary">Find New Ridge School easily</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The campus photo helps visitors identify the school before they reach the map pin.
              </p>
            </div>
          </div>
          <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="block rounded-3xl overflow-hidden border border-border shadow-elegant min-h-[420px]">
            <iframe src={SITE.mapsEmbed} title="New Ridge School location" className="w-full h-full min-h-[420px] pointer-events-none" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </a>
        </div>
      </section>
    </>
  );
}
