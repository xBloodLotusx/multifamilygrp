import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, X, Menu } from "lucide-react";
const NAV = [
  {
    label: "Properties",
    to: "/listings"
  },
  {
    label: "About",
    children: [
      { to: "/process", label: "Our Process" },
      { to: "/team", label: "Team" }
    ]
  },
  {
    label: "Resources",
    children: [
      { to: "/news", label: "News" },
      { to: "/blog", label: "Blog" },
      { to: "/reports", label: "Reports" }
    ]
  },
  {
    label: "Contact",
    children: [
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact Form" }
    ]
  }
];
function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState(null);
  return /* @__PURE__ */ jsxs("nav", { className: "sticky top-0 z-50 bg-tmg-navy text-tmg-navy-foreground border-b border-white/10", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs("span", { className: "font-serif text-2xl leading-none tracking-tight", children: [
        "the multifamily group",
        /* @__PURE__ */ jsx("span", { className: "opacity-70", children: "." })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-1", children: NAV.map((item) => !item.children ? /* @__PURE__ */ jsx(
        Link,
        {
          to: item.to,
          className: "px-4 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors",
          children: item.label
        },
        item.label
      ) : /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors",
            children: [
              item.label,
              /* @__PURE__ */ jsx(ChevronDown, { className: "w-3.5 h-3.5 opacity-70 transition-transform group-hover:rotate-180" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute right-0 top-full pt-2 min-w-[14rem] opacity-0 invisible\n                  group-hover:opacity-100 group-hover:visible\n                  focus-within:opacity-100 focus-within:visible\n                  transition-all duration-150",
            children: /* @__PURE__ */ jsx("div", { className: "bg-background text-foreground rounded-md shadow-lg ring-1 ring-foreground/10 overflow-hidden py-2", children: item.children.map((c) => /* @__PURE__ */ jsx(
              Link,
              {
                to: c.to,
                hash: c.hash,
                className: "block px-4 py-2.5 text-sm hover:bg-accent transition-colors",
                children: c.label
              },
              `${c.to}${c.hash ?? ""}${c.label}`
            )) })
          }
        )
      ] }, item.label)) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "md:hidden p-2 -mr-2 text-white",
          onClick: () => setMobileOpen((v) => !v),
          "aria-label": "Toggle menu",
          children: mobileOpen ? /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" })
        }
      )
    ] }),
    mobileOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-white/10 bg-tmg-navy", children: /* @__PURE__ */ jsx("div", { className: "px-6 py-4 space-y-1", children: NAV.map((item) => {
      if (!item.children) {
        return /* @__PURE__ */ jsx("div", { className: "border-b border-white/10 last:border-b-0", children: /* @__PURE__ */ jsx(
          Link,
          {
            to: item.to,
            onClick: () => {
              setMobileOpen(false);
              setOpenMobile(null);
            },
            className: "block py-3 text-sm font-medium text-white/90",
            children: item.label
          }
        ) }, item.label);
      }
      const isOpen = openMobile === item.label;
      return /* @__PURE__ */ jsxs("div", { className: "border-b border-white/10 last:border-b-0", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "w-full flex items-center justify-between py-3 text-sm font-medium text-white/90",
            onClick: () => setOpenMobile(isOpen ? null : item.label),
            children: [
              item.label,
              /* @__PURE__ */ jsx(
                ChevronDown,
                {
                  className: `w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`
                }
              )
            ]
          }
        ),
        isOpen && /* @__PURE__ */ jsx("div", { className: "pb-3 pl-3 space-y-1", children: item.children.map((c) => /* @__PURE__ */ jsx(
          Link,
          {
            to: c.to,
            hash: c.hash,
            onClick: () => {
              setMobileOpen(false);
              setOpenMobile(null);
            },
            className: "block py-2 text-sm text-white/75 hover:text-white",
            children: c.label
          },
          `${c.to}${c.hash ?? ""}${c.label}`
        )) })
      ] }, item.label);
    }) }) })
  ] });
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
