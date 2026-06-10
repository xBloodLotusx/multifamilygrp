import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/assets/styles-CcSMm1o6.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$c = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Multifamily Group — Institutional Multifamily Brokerage" },
      { name: "description", content: "Nationwide multifamily investment sales and brokerage advisory. Precision asset valuation, marketing, and capital distribution." },
      { name: "author", content: "The Multifamily Group" },
      { property: "og:title", content: "The Multifamily Group" },
      { property: "og:description", content: "Nationwide multifamily investment sales and brokerage advisory." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap"
      },
      { rel: "shortcut icon", type: "image/png", href: "https://multifamilygrp.com/wp-content/uploads/2024/09/TMG-Blue-Transparent-Favicon.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "https://multifamilygrp.com/wp-content/uploads/2024/09/TMG-180-x-180-px.png" },
      { rel: "icon", sizes: "192x192", href: "https://multifamilygrp.com/wp-content/uploads/2024/09/TMG-192-x-192-px.png" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$c.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter$a = () => import("./transactions-BXod90zY.js");
const Route$b = createFileRoute("/transactions")({
  head: () => ({
    meta: [{
      title: "Transactions — The Multifamily Group"
    }, {
      name: "description",
      content: "Selected closed multifamily transactions advised by The Multifamily Group."
    }, {
      property: "og:title",
      content: "Transactions — The Multifamily Group"
    }, {
      property: "og:description",
      content: "Selected closed multifamily transactions."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./team-DNJugKpl.js");
const Route$a = createFileRoute("/team")({
  head: () => ({
    meta: [{
      title: "Team — The Multifamily Group"
    }, {
      name: "description",
      content: "Meet the advisors behind The Multifamily Group."
    }, {
      property: "og:title",
      content: "Team — The Multifamily Group"
    }, {
      property: "og:description",
      content: "Meet our multifamily investment sales advisors."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const BASE_URL = "";
const PATHS = [
  "/",
  "/listings",
  "/process",
  "/transactions",
  "/about",
  "/team",
  "/careers",
  "/news",
  "/reports",
  "/contact"
];
const Route$9 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = PATHS.map(
          (p) => `  <url>
    <loc>${BASE_URL}${p}</loc>
    <changefreq>weekly</changefreq>
  </url>`
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$8 = () => import("./reports-PEugqAEl.js");
const Route$8 = createFileRoute("/reports")({
  head: () => ({
    meta: [{
      title: "Market Reports — The Multifamily Group"
    }, {
      name: "description",
      content: "Quarterly multifamily market reports and submarket research."
    }, {
      property: "og:title",
      content: "Market Reports — The Multifamily Group"
    }, {
      property: "og:description",
      content: "Quarterly multifamily research."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./process-CB38J1Ah.js");
const Route$7 = createFileRoute("/process")({
  head: () => ({
    meta: [{
      title: "Our Process — The Multifamily Group"
    }, {
      name: "description",
      content: "A proven seven-step brokerage methodology — from valuation through closing — that institutional and private multifamily owners rely on."
    }, {
      property: "og:title",
      content: "Our Process — The Multifamily Group"
    }, {
      property: "og:description",
      content: "Seven-step institutional multifamily brokerage methodology."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./news-CXSXcOPa.js");
const Route$6 = createFileRoute("/news")({
  head: () => ({
    meta: [{
      title: "News — The Multifamily Group"
    }, {
      name: "description",
      content: "Firm announcements, closed deals, and market commentary."
    }, {
      property: "og:title",
      content: "News — The Multifamily Group"
    }, {
      property: "og:description",
      content: "Firm announcements and market commentary."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./listings-C7TWRGJO.js");
const Route$5 = createFileRoute("/listings")({
  head: () => ({
    meta: [{
      title: "Current Listings — The Multifamily Group"
    }, {
      name: "description",
      content: "Explore active multifamily investment offerings on an interactive nationwide map, organized by status."
    }, {
      property: "og:title",
      content: "Current Listings — The Multifamily Group"
    }, {
      property: "og:description",
      content: "Interactive map and grid of current multifamily investment offerings."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-dTCXPvVG.js");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — The Multifamily Group"
    }, {
      name: "description",
      content: "Request a confidential broker opinion of value or speak with a TMG advisor."
    }, {
      property: "og:title",
      content: "Contact — The Multifamily Group"
    }, {
      property: "og:description",
      content: "Request a confidential conversation with TMG."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./careers-D3kOSZF_.js");
const Route$3 = createFileRoute("/careers")({
  head: () => ({
    meta: [{
      title: "Careers — The Multifamily Group"
    }, {
      name: "description",
      content: "Join The Multifamily Group — opportunities for analysts, associates, and advisors."
    }, {
      property: "og:title",
      content: "Careers — The Multifamily Group"
    }, {
      property: "og:description",
      content: "Join our multifamily brokerage team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./blog-BRHPvWTI.js");
const Route$2 = createFileRoute("/blog")({
  head: () => ({
    meta: [{
      title: "Blog — The Multifamily Group"
    }, {
      name: "description",
      content: "Insights, perspectives, and field notes from the TMG advisory team."
    }, {
      property: "og:title",
      content: "Blog — The Multifamily Group"
    }, {
      property: "og:description",
      content: "Insights and perspectives from TMG advisors."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DzyJqf6s.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — The Multifamily Group"
    }, {
      name: "description",
      content: "The Multifamily Group is a nationwide multifamily investment sales advisory firm."
    }, {
      property: "og:title",
      content: "About — The Multifamily Group"
    }, {
      property: "og:description",
      content: "Nationwide multifamily investment sales advisory firm."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-YYT44Kw7.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "The Multifamily Group — Institutional Multifamily Brokerage"
    }, {
      name: "description",
      content: "Nationwide multifamily investment sales. Precision asset valuation, marketing preparation, and capital distribution for institutional and private owners."
    }, {
      property: "og:title",
      content: "The Multifamily Group"
    }, {
      property: "og:description",
      content: "Nationwide multifamily investment sales and brokerage advisory."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TransactionsRoute = Route$b.update({
  id: "/transactions",
  path: "/transactions",
  getParentRoute: () => Route$c
});
const TeamRoute = Route$a.update({
  id: "/team",
  path: "/team",
  getParentRoute: () => Route$c
});
const SitemapDotxmlRoute = Route$9.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$c
});
const ReportsRoute = Route$8.update({
  id: "/reports",
  path: "/reports",
  getParentRoute: () => Route$c
});
const ProcessRoute = Route$7.update({
  id: "/process",
  path: "/process",
  getParentRoute: () => Route$c
});
const NewsRoute = Route$6.update({
  id: "/news",
  path: "/news",
  getParentRoute: () => Route$c
});
const ListingsRoute = Route$5.update({
  id: "/listings",
  path: "/listings",
  getParentRoute: () => Route$c
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$c
});
const CareersRoute = Route$3.update({
  id: "/careers",
  path: "/careers",
  getParentRoute: () => Route$c
});
const BlogRoute = Route$2.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$c
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$c
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$c
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BlogRoute,
  CareersRoute,
  ContactRoute,
  ListingsRoute,
  NewsRoute,
  ProcessRoute,
  ReportsRoute,
  SitemapDotxmlRoute,
  TeamRoute,
  TransactionsRoute
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
