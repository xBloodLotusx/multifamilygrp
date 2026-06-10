import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { S as SiteLayout } from "./site-layout-DOmaAtVs.js";
import { l as listings, P as PropertyCard } from "./property-card-DfP8ODVN.js";
import "react";
const heroImg = "/assets/hero-building-1hRtRvTh.jpg";
function Index() {
  const featured = listings.slice(0, 6);
  const active = listings.filter((l) => l.status === "available");
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxs("section", { className: "py-24 md:py-32 px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6", children: "The Multifamily Group" }),
          /* @__PURE__ */ jsx("h1", { className: "font-serif text-5xl md:text-7xl leading-[1.02] text-balance max-w-[20ch]", children: "Opening Doors & Closing Deals" }),
          /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg md:text-xl text-muted-foreground max-w-[58ch] text-pretty", children: "The Multifamily Group is a commercial real estate brokerage focused exclusively on the marketing and sale of multi-housing assets. Investors and sellers look to The Multifamily Group for one thing—results." }),
          /* @__PURE__ */ jsx("div", { className: "mt-10 flex flex-wrap gap-3", children: /* @__PURE__ */ jsxs(Link, { to: "/listings", className: "bg-foreground text-background text-sm font-medium pl-4 pr-5 py-3 inline-flex items-center gap-2 rounded-sm hover:bg-foreground/90 transition-colors", children: [
            /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" }),
            " View Current Listings"
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsx("div", { className: "w-full aspect-[4/5] bg-surface-muted rounded-[12px] outline-1 -outline-offset-1 outline-foreground/5 overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Modern urban multifamily residential architecture at golden hour", width: 896, height: 1120, className: "w-full h-full object-cover" }) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto mt-16 flex justify-center", children: /* @__PURE__ */ jsxs("a", { href: "#explore", "aria-label": "Scroll to explore", className: "group inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.25em]", children: "Scroll" }),
        /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 animate-bounce" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "explore", className: "border-y border-foreground/5 bg-surface-muted/40 scroll-mt-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8", children: [{
      k: "$4.2B+",
      v: "Transaction Volume"
    }, {
      k: "48",
      v: "States Covered"
    }, {
      k: "120+",
      v: "Active Capital Sources"
    }, {
      k: "22 yrs",
      v: "Brokerage Tenure"
    }].map((s) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "font-serif text-4xl md:text-5xl leading-none", children: s.k }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground", children: s.v })
    ] }, s.v)) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4", children: "Market Opportunities" }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-5xl leading-tight text-balance max-w-[18ch]", children: "Current listings, nationwide." })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/listings", className: "text-sm font-medium underline underline-offset-4 hover:text-foreground/70", children: [
          "View all ",
          active.length,
          " available offerings →"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14", children: featured.map((l) => /* @__PURE__ */ jsx(PropertyCard, { listing: l }, l.id)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 px-6 border-t border-foreground/5 bg-[#fdfdfd]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4", children: "How we work" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-5xl leading-tight text-balance max-w-[15ch]", children: "A proven seven-step methodology." }),
        /* @__PURE__ */ jsx(Link, { to: "/process", className: "inline-block mt-8 text-sm font-medium underline underline-offset-4", children: "Read the full process →" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10", children: [["01", "Asset Valuation", "Underwriting and submarket diligence to pinpoint pricing."], ["02", "Marketing Preparation", "Offering memorandums built for institutional review."], ["03", "Buyer Distribution", "Targeted outreach to our nationwide capital network."], ["04", "Tour Coordination", "Owner-aligned access and on-site investor engagement."]].map(([n, t, d]) => /* @__PURE__ */ jsxs("div", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsx("div", { className: "shrink-0 size-9 grid place-items-center ring-1 ring-foreground/10 rounded-full text-xs font-semibold", children: n }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-medium mb-1.5", children: t }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground text-pretty", children: d })
        ] })
      ] }, n)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto rounded-[12px] bg-foreground text-background p-12 md:p-16 grid md:grid-cols-[2fr_1fr] gap-8 items-end", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-5xl leading-tight text-balance max-w-[22ch]", children: "Considering a disposition or recapitalization?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-background/70 max-w-[50ch]", children: "We deliver confidential broker opinions of value within five business days for qualified owners." })
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: "justify-self-start md:justify-self-end inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-sm text-sm font-medium hover:bg-background/90", children: "Request a BOV →" })
    ] }) })
  ] });
}
export {
  Index as component
};
