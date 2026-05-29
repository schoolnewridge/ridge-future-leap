import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useLocation,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { SITE } from "@/lib/site";
import { BRANDING_IMAGE } from "@/lib/images";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-soft-gradient px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(29,78,216,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.16),transparent_35%)]" />
      <div className="max-w-md text-center">
        <div className="font-display text-8xl font-semibold text-primary">404</div>
        <h1 className="mt-4 text-xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-2 text-sm text-slate-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-full bg-gold text-gold-foreground px-6 py-3 text-sm font-semibold shadow-gold">
          Back home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-slate-900">This page didn't load</h1>
        <p className="mt-2 text-sm text-slate-600">Something went wrong on our end.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-blue-200 bg-white px-5 py-2.5 text-sm font-medium text-primary">Go home</a>
        </div>
      </div>
    </div>
  );
}

const orgLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE.fullName,
  alternateName: "New Ridge School",
  description: SITE.description,
  telephone: SITE.phones,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.line1,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.postal,
    addressCountry: SITE.address.country,
  },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1D4ED8" },
      { property: "og:site_name", content: SITE.fullName },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: BRANDING_IMAGE, type: "image/jpeg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(orgLd) },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const { pathname } = useLocation();
  const transparent = pathname === "/";

  return (
    <RootShell>
      <QueryClientProvider client={queryClient}>
        <Navbar transparentOnTop={transparent} />
        <main>
          <Outlet />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </QueryClientProvider>
    </RootShell>
  );
}
