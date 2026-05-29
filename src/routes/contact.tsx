import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { SITE } from "@/lib/site";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { CONTACT_IMAGE } from "@/lib/images";

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
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero eyebrow="Get in Touch" title="Contact New Ridge School" description="Call, message, or visit New Ridge School at Khanapuram Haveli on Yellandu Road, Khammam." />
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-5">
            {[
              { Icon: MapPin, label: "Visit", value: `${SITE.address.line1}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.postal}` },
              { Icon: Phone, label: "Call", value: SITE.phones.join(" · ") },
              { Icon: Mail, label: "Email", value: SITE.email },
              { Icon: Clock, label: "Hours", value: "Mon–Sat · 8:30 AM – 4:30 PM" },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl bg-card border border-border p-5 flex gap-4">
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-gold-gradient text-gold-foreground shrink-0">
                  <c.Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="mt-1 text-foreground font-medium">{c.value}</div>
                </div>
              </div>
            ))}
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
            >
              <MapPin className="h-4 w-4" /> Open in Google Maps
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 text-white px-6 py-3 font-semibold hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="lg:col-span-3 rounded-3xl bg-card border border-border p-8 shadow-elegant"
          >
            <h2 className="font-display text-2xl font-semibold text-primary">Send us a message</h2>
            {submitted ? (
              <div className="mt-6 p-6 rounded-2xl bg-accent text-center">
                <div className="font-semibold text-primary">Thank you! We'll reply soon.</div>
              </div>
            ) : (
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <input className="rounded-xl border border-input px-4 py-3 focus:outline-none focus:border-primary" placeholder="Your name" required />
                <input className="rounded-xl border border-input px-4 py-3 focus:outline-none focus:border-primary" placeholder="Phone" type="tel" required />
                <input className="sm:col-span-2 rounded-xl border border-input px-4 py-3 focus:outline-none focus:border-primary" placeholder="Email" type="email" />
                <textarea rows={5} className="sm:col-span-2 rounded-xl border border-input px-4 py-3 focus:outline-none focus:border-primary" placeholder="How can we help?" required />
                <button className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient text-gold-foreground px-6 py-3.5 font-semibold shadow-gold hover:scale-[1.02] transition-transform">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </div>
            )}
          </motion.form>
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
