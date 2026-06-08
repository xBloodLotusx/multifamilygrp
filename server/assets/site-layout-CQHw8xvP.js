import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const links = [
  { to: "/listings", label: "Current Listings" },
  { to: "/transactions", label: "Transactions" },
  { to: "/process", label: "Our Process" },
  { to: "/team", label: "Team" },
  { to: "/reports", label: "Reports" },
  { to: "/about", label: "About" }
];
function SiteNav() {
  return /* @__PURE__ */ jsx("nav", { className: "sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center gap-2 group", children: /* @__PURE__ */ jsx("span", { className: "font-serif text-2xl leading-none", children: "The Multifamily Group" }) }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:flex gap-7 text-sm font-medium text-foreground/80", children: links.map((l) => /* @__PURE__ */ jsx(
      Link,
      {
        to: l.to,
        className: "hover:text-foreground transition-colors",
        activeProps: { className: "text-foreground" },
        children: l.label
      },
      l.to
    )) }),
    /* @__PURE__ */ jsx(
      Link,
      {
        to: "/contact",
        className: "text-sm font-medium ring-1 ring-foreground/15 px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-colors",
        children: "Contact"
      }
    )
  ] }) });
}
const columns = [
  {
    title: "Firm",
    links: [
      { to: "/about", label: "About" },
      { to: "/team", label: "Team" },
      { to: "/careers", label: "Careers" },
      { to: "/news", label: "News" }
    ]
  },
  {
    title: "Investors",
    links: [
      { to: "/listings", label: "Current Listings" },
      { to: "/transactions", label: "Transactions" },
      { to: "/reports", label: "Market Reports" },
      { to: "/process", label: "Our Process" }
    ]
  }
];
function SiteFooter() {
  return /* @__PURE__ */ jsxs("footer", { className: "border-t border-foreground/5 bg-background", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-serif text-3xl leading-none mb-4", children: "The Multifamily Group" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground max-w-sm text-pretty", children: "Institutional multifamily investment sales and brokerage advisory. Nationwide reach, owner-aligned execution." })
      ] }),
      columns.map((col) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4", children: col.title }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: col.links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: l.to, className: "hover:text-foreground text-foreground/80 transition-colors", children: l.label }) }, l.to)) })
      ] }, col.title)),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsx("li", { children: "Dallas, TX (HQ)" }),
          /* @__PURE__ */ jsx("li", { children: "info@multifamilygroup.com" }),
          /* @__PURE__ */ jsx("li", { children: "+1 (214) 555‑0144" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-foreground/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " The Multifamily Group. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-foreground", children: "Privacy" }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-foreground", children: "Terms" }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-foreground", children: "Disclosures" })
      ] })
    ] }) })
  ] });
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-background text-foreground antialiased", children: [
    /* @__PURE__ */ jsx(SiteNav, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
function PageHeader({
  eyebrow,
  title,
  description
}) {
  return /* @__PURE__ */ jsx("section", { className: "px-6 pt-20 pb-12 border-b border-foreground/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    eyebrow && /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5", children: eyebrow }),
    /* @__PURE__ */ jsx("h1", { className: "font-serif text-5xl md:text-6xl leading-[1.05] text-balance max-w-[20ch]", children: title }),
    description && /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-[55ch] text-pretty", children: description })
  ] }) });
}
export {
  PageHeader as P,
  SiteLayout as S
};
