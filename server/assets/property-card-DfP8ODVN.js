import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const property1 = "/assets/property-1-DqYZVVIK.jpg";
const property2 = "/assets/property-2-9huvbKxg.jpg";
const property3 = "/assets/property-3-CJLquMmI.jpg";
const property4 = "/assets/property-4-C43F5jDn.jpg";
const property5 = "/assets/property-5-DDvWDBRe.jpg";
const property6 = "/assets/property-6-C8W_WjQU.jpg";
const STATUS_LABEL = {
  available: "Available",
  "under-contract": "Under Contract",
  "in-escrow": "In Escrow",
  closed: "Closed"
};
const STATUS_DOT = {
  available: "bg-emerald-600",
  "under-contract": "bg-amber-600",
  "in-escrow": "bg-sky-600",
  closed: "bg-zinc-400"
};
const STATUS_CHIP = {
  available: "text-emerald-800 bg-emerald-50 ring-emerald-700/10",
  "under-contract": "text-amber-800 bg-amber-50 ring-amber-700/10",
  "in-escrow": "text-sky-800 bg-sky-50 ring-sky-700/10",
  closed: "text-zinc-700 bg-zinc-100 ring-zinc-600/10"
};
const listings = [
  {
    id: "harbor-green",
    name: "Harbor Green Apartments",
    city: "Tampa",
    state: "FL",
    units: 195,
    yearBuilt: "2014",
    status: "available",
    class: "Class A-",
    image: property1,
    mapX: 76,
    mapY: 72,
    summary: "Bayfront garden-style with stabilized cash flow and capex upside."
  },
  {
    id: "meridian-portfolio",
    name: "The Meridian Portfolio",
    city: "Austin",
    state: "TX",
    units: 320,
    yearBuilt: "2008",
    status: "under-contract",
    class: "Value-Add",
    image: property2,
    mapX: 49,
    mapY: 70,
    summary: "Three-property roll-up in Central Texas with mark-to-market rent thesis."
  },
  {
    id: "skyline-west",
    name: "Skyline West Lofts",
    city: "San Diego",
    state: "CA",
    units: 144,
    yearBuilt: "2021",
    status: "in-escrow",
    class: "Institutional",
    image: property3,
    mapX: 10,
    mapY: 55,
    summary: "Core urban high-rise priced below replacement cost."
  },
  {
    id: "vista-ridge",
    name: "Vista Ridge Portfolio",
    city: "Atlanta",
    state: "GA",
    units: 412,
    yearBuilt: "2016",
    status: "available",
    class: "Class A",
    image: property4,
    mapX: 73,
    mapY: 60,
    summary: "Two-asset Sunbelt portfolio inside a top-ten MSA."
  },
  {
    id: "northline-station",
    name: "Northline Station",
    city: "Nashville",
    state: "TN",
    units: 218,
    yearBuilt: "2019",
    status: "available",
    class: "Mixed-Use",
    image: property5,
    mapX: 70,
    mapY: 56,
    summary: "Transit-oriented mixed-use with first-floor retail income."
  },
  {
    id: "agave-flats",
    name: "Agave Flats",
    city: "Phoenix",
    state: "AZ",
    units: 188,
    yearBuilt: "1998",
    status: "closed",
    class: "Value-Add",
    image: property6,
    mapX: 22,
    mapY: 60,
    summary: "Closed Q1 — sold at a 4.6% cap to a private equity sponsor."
  }
];
function PropertyCard({ listing }) {
  const cta = listing.status === "closed" ? "View Transaction" : listing.status === "available" ? "Download Documents" : "Request More Info";
  return /* @__PURE__ */ jsxs("article", { className: "group", children: [
    /* @__PURE__ */ jsx(Link, { to: "/listings", className: "block", children: /* @__PURE__ */ jsx("div", { className: "w-full aspect-square bg-surface-muted rounded-[12px] outline-1 -outline-offset-1 outline-foreground/5 overflow-hidden mb-6", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: listing.image,
        alt: `${listing.name} — ${listing.city}, ${listing.state}`,
        loading: "lazy",
        width: 1024,
        height: 1024,
        className: "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start gap-3 mb-2", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium tracking-tight leading-snug", children: listing.name }),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: `shrink-0 text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded ring-1 ring-inset ${STATUS_CHIP[listing.status]}`,
          children: STATUS_LABEL[listing.status]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-sm text-muted-foreground mb-6", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        listing.city,
        ", ",
        listing.state,
        " • ",
        listing.units,
        " Units"
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Built ",
        listing.yearBuilt,
        " • ",
        listing.class
      ] })
    ] }),
    /* @__PURE__ */ jsx("button", { className: "w-full py-2.5 text-xs font-semibold tracking-wide uppercase ring-1 ring-foreground/10 rounded-sm group-hover:bg-foreground group-hover:text-background transition-colors", children: cta })
  ] });
}
export {
  PropertyCard as P,
  STATUS_DOT as S,
  STATUS_LABEL as a,
  STATUS_CHIP as b,
  listings as l
};
