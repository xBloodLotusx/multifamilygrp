import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { S as SiteLayout, P as PageHeader } from "./site-layout-CQHw8xvP.js";
import { S as STATUS_DOT, a as STATUS_LABEL, b as STATUS_CHIP, l as listings, P as PropertyCard } from "./property-card-DfP8ODVN.js";
import { Link } from "@tanstack/react-router";
function ListingsMap({ listings: listings2, height = "h-[560px]" }) {
  const [activeId, setActiveId] = useState(listings2[0]?.id ?? null);
  const active = listings2.find((l) => l.id === activeId) ?? null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `relative w-full ${height} bg-surface-muted rounded-[12px] outline-1 -outline-offset-1 outline-foreground/5 overflow-hidden`,
      children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            viewBox: "0 0 1000 500",
            className: "absolute inset-0 w-full h-full text-foreground/10",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("pattern", { id: "grid", width: "40", height: "40", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsx("path", { d: "M 40 0 L 0 0 0 40", fill: "none", stroke: "currentColor", strokeWidth: "0.5" }) }) }),
              /* @__PURE__ */ jsx("rect", { width: "1000", height: "500", fill: "url(#grid)" }),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M120,210 C 160,140 260,110 360,120 C 460,90 580,100 680,130 C 780,140 860,180 880,240 C 900,300 820,350 720,360 C 620,380 520,360 420,380 C 320,400 220,380 160,330 C 110,290 100,250 120,210 Z",
                  fill: "currentColor",
                  opacity: "0.35"
                }
              )
            ]
          }
        ),
        listings2.map((l) => {
          const isActive = l.id === activeId;
          return /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setActiveId(l.id),
              onMouseEnter: () => setActiveId(l.id),
              style: { left: `${l.mapX}%`, top: `${l.mapY}%` },
              className: "absolute -translate-x-1/2 -translate-y-1/2 group",
              "aria-label": `${l.name}, ${l.city}, ${l.state}`,
              children: /* @__PURE__ */ jsx(
                "span",
                {
                  className: `block rounded-full ring-2 ring-background shadow-md transition-all ${STATUS_DOT[l.status]} ${isActive ? "size-4" : "size-3 group-hover:size-4"}`
                }
              )
            },
            l.id
          );
        }),
        active && /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              left: `${active.mapX}%`,
              top: `${active.mapY}%`
            },
            className: "absolute -translate-x-1/2 -translate-y-[calc(100%+18px)] w-72 bg-background rounded-[8px] ring-1 ring-foreground/10 shadow-2xl p-3 pointer-events-auto",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-full aspect-video bg-surface-muted rounded-sm overflow-hidden mb-3", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: active.image,
                  alt: active.name,
                  loading: "lazy",
                  width: 400,
                  height: 225,
                  className: "w-full h-full object-cover"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start gap-2 mb-1", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold tracking-tight leading-tight", children: active.name }),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `shrink-0 text-[9px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded ring-1 ring-inset ${STATUS_CHIP[active.status]}`,
                    children: STATUS_LABEL[active.status]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
                active.city,
                ", ",
                active.state,
                " • ",
                active.units,
                " Units"
              ] }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/listings",
                  className: "block mt-2 text-xs font-medium underline underline-offset-4 hover:text-foreground",
                  children: "Detailed Offering →"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 items-center justify-between", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ["available", "under-contract", "in-escrow", "closed"].map((s) => /* @__PURE__ */ jsxs(
          "span",
          {
            className: "bg-background/90 backdrop-blur px-3 py-1.5 rounded-full ring-1 ring-foreground/10 text-[10px] font-medium uppercase tracking-wider flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsx("span", { className: `size-1.5 rounded-full ${STATUS_DOT[s]}` }),
              STATUS_LABEL[s]
            ]
          },
          s
        )) }) })
      ]
    }
  );
}
const SECTIONS = [{
  status: "available",
  title: "Available",
  description: "Actively marketed offerings open for tour and offer."
}, {
  status: "under-contract",
  title: "Under Contract",
  description: "Negotiated with a single buyer; back-up offers welcome."
}, {
  status: "in-escrow",
  title: "In Escrow",
  description: "Past contingency, moving toward close."
}];
const STATE_OPTIONS = Array.from(new Set(listings.map((l) => l.state))).sort();
function ListingsPage() {
  const [stateFilter, setStateFilter] = useState("all");
  const filtered = listings.filter((l) => stateFilter === "all" || l.state === stateFilter);
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Current Listings", title: "Active multifamily offerings.", description: "Explore our nationwide pipeline on the interactive map, then browse offerings by status below." }),
    /* @__PURE__ */ jsx("section", { className: "py-12 px-6 bg-surface-muted/40 border-b border-foreground/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2", children: "Interactive Property Explorer" }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-4xl", children: "Nationwide reach." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs uppercase tracking-wider text-muted-foreground", htmlFor: "state", children: "Filter by state" }),
          /* @__PURE__ */ jsxs("select", { id: "state", value: stateFilter, onChange: (e) => setStateFilter(e.target.value), className: "text-sm bg-background ring-1 ring-foreground/10 rounded-sm px-3 py-2", children: [
            /* @__PURE__ */ jsx("option", { value: "all", children: "All states" }),
            STATE_OPTIONS.map((s) => /* @__PURE__ */ jsx("option", { value: s, children: s }, s))
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(ListingsMap, { listings: filtered })
    ] }) }),
    SECTIONS.map((sec) => {
      const rows = filtered.filter((l) => l.status === sec.status);
      if (rows.length === 0) return null;
      return /* @__PURE__ */ jsx("section", { className: "py-20 px-6 border-b border-foreground/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-12 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-4xl mb-2", children: sec.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground max-w-md", children: sec.description })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground", children: [
            rows.length,
            " offering",
            rows.length === 1 ? "" : "s"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14", children: rows.map((l) => /* @__PURE__ */ jsx(PropertyCard, { listing: l }, l.id)) })
      ] }) }, sec.status);
    })
  ] });
}
export {
  ListingsPage as component
};
