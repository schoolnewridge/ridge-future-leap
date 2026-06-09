import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Facebook, Mail, Menu, Phone, X, ArrowRight } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { BRANDING_IMAGE } from "@/lib/images";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLabels: Record<string, string> = {
    Home: "HOME",
    About: "ABOUT US",
    Programs: "PROGRAMS",
    Brochure: "BROCHURE",
    "STEM & Robotics": "STEM & ROBOTICS",
    Gallery: "GALLERY",
    Admissions: "ADMISSIONS",
    Contact: "CONTACT US",
  };

  const sectionAnchors: Record<string, string> = {
    About: "/#about",
    Programs: "/#programs",
    Gallery: "/#gallery",
    Admissions: "/#admissions",
  };

  const topRowClass = scrolled ? "h-[76px]" : "h-[84px]";
  const navRowClass = scrolled ? "h-[54px]" : "h-[60px]";
  const linkClass =
    "group relative inline-flex items-center whitespace-nowrap px-3 py-2 text-[0.93rem] font-semibold uppercase tracking-[0.12em] text-slate-800 transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_10px_rgba(29,78,216,0.18)]";
  const activeLinkClass =
    "group relative inline-flex items-center whitespace-nowrap px-3 py-2 text-[0.93rem] font-semibold uppercase tracking-[0.12em] text-primary drop-shadow-[0_0_12px_rgba(29,78,216,0.18)]";
  const mobileItemClass =
    "group flex items-center justify-between rounded-2xl border border-transparent px-4 py-4 text-base font-medium text-white/90 transition-all hover:border-yellow-300/20 hover:bg-white/6 hover:text-yellow-300";
  const mobileActiveItemClass =
    "group flex items-center justify-between rounded-2xl border border-yellow-300/20 px-4 py-4 text-base font-medium text-yellow-300 bg-white/6 shadow-[0_0_18px_rgba(250,204,21,0.12)]";

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b border-white/10 bg-header-gradient text-white shadow-header transition-all duration-500 ${
          scrolled ? "backdrop-blur-[22px]" : "backdrop-blur-[14px]"
        }`}
      >
      <div className="border-b border-white/10 bg-[linear-gradient(90deg,rgba(7,17,41,0.95)_0%,rgba(11,16,32,0.92)_40%,rgba(30,27,22,0.92)_100%)] shadow-[inset_0_-1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
        <div className={`mx-auto flex ${topRowClass} max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-500 sm:px-6 lg:px-8`}>
          <Link to="/" className="group flex items-center gap-3 shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.35),rgba(29,78,216,0.18),transparent_68%)] blur-md transition-all group-hover:blur-lg" />
              <img
                src={BRANDING_IMAGE}
                alt="New Ridge School logo"
                className={`relative rounded-full object-cover ring-2 ring-white/15 shadow-[0_12px_30px_rgba(0,0,0,0.28)] transition-all duration-500 ${
                  scrolled ? "h-12 w-12" : "h-14 w-14"
                }`}
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="hidden min-[430px]:block">
              <div className="font-display text-[clamp(1rem,1.6vw,1.6rem)] font-semibold leading-tight tracking-[-0.02em] text-white">
                New Ridge School
              </div>
              <div className="text-[10px] font-medium uppercase tracking-[0.36em] text-yellow-100/80">
                THE RIGHT PATH TO SUCCESS
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-3 text-[0.84rem] font-medium text-white/85 lg:flex shrink-0 xl:gap-5 xl:text-[0.9rem]">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 whitespace-nowrap transition-colors hover:text-yellow-300"
            >
              <Mail className="h-4 w-4 text-yellow-300" />
              <span>{SITE.email}</span>
            </a>
            <a
              href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 whitespace-nowrap transition-colors hover:text-yellow-300"
            >
              <Phone className="h-4 w-4 text-yellow-300" />
              <span>{SITE.phones[0]}</span>
            </a>
            <div className="flex items-center gap-2 text-white/70">
              <a href={SITE.socials.facebook} aria-label="Facebook" className="transition-colors hover:text-yellow-300"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/10 bg-white/8 text-white shadow-[0_10px_24px_rgba(0,0,0,0.2)] transition hover:border-yellow-300/40 hover:bg-white/12 hover:text-yellow-300 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="hidden border-b border-blue-100/80 bg-white/92 backdrop-blur-xl lg:block">
        <div className={`mx-auto flex ${navRowClass} max-w-7xl items-center justify-center px-4 transition-all duration-500 sm:px-6 lg:px-8`}>
          <ul className="flex max-w-full items-center justify-center gap-2 overflow-hidden whitespace-nowrap xl:gap-4 2xl:gap-6">
            {NAV.map((item) => {
              const anchor = sectionAnchors[item.label];
              return (
                <li key={item.to}>
                  {anchor ? (
                    <a href={anchor} className={linkClass}>
                      {navLabels[item.label] ?? item.label.toUpperCase()}
                      <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-center scale-x-0 rounded-full bg-gold shadow-[0_0_10px_rgba(250,204,21,0.65)] transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      className={linkClass}
                      activeProps={{ className: activeLinkClass }}
                      activeOptions={{ exact: item.to === "/" }}
                    >
                      {navLabels[item.label] ?? item.label.toUpperCase()}
                      <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-center scale-x-0 rounded-full bg-gold shadow-[0_0_10px_rgba(250,204,21,0.65)] transition-transform duration-300 group-hover:scale-x-100" />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-header-gradient border-l border-white/10 px-6 py-6 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-xl font-semibold text-white">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/10 bg-white/8 text-white transition hover:border-yellow-300/40 hover:bg-white/12 hover:text-yellow-300"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 leading-relaxed">
                Quick links and admissions access for parents on the move.
              </div>
              <ul className="space-y-2 flex-1">
                {NAV.map((item) => {
                  const anchor = sectionAnchors[item.label];
                  return (
                    <li key={item.to}>
                      {anchor ? (
                        <a href={anchor} onClick={() => setOpen(false)} className={mobileItemClass}>
                          <span>{navLabels[item.label] ?? item.label.toUpperCase()}</span>
                          <span className="h-2 w-2 rounded-full bg-yellow-300/0 transition-all group-hover:bg-yellow-300" />
                        </a>
                      ) : (
                        <Link
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className={mobileItemClass}
                          activeProps={{ className: mobileActiveItemClass }}
                        >
                          <span>{navLabels[item.label] ?? item.label.toUpperCase()}</span>
                          <span className="h-2 w-2 rounded-full bg-yellow-300/0 transition-all group-hover:bg-yellow-300" />
                        </Link>
                      )}
                    </li>
                  );
                })}
                <li className="pt-4">
                  <a
                    href="/#admissions"
                    onClick={() => setOpen(false)}
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#fef08a_0%,#facc15_50%,#eab308_100%)] px-6 text-sm font-semibold text-slate-900 shadow-[0_16px_34px_rgba(250,204,21,0.34)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </li>
                <li className="mt-4 flex min-h-[44px] items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                  <Phone className="h-4 w-4 text-yellow-300" />
                  <a href={`tel:${SITE.phones[0].replace(/\s/g, "")}`} className="transition hover:text-yellow-300 py-1">
                    {SITE.phones[0]}
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
