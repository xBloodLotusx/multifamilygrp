import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export type ListingStatus = "available" | "under-contract" | "in-escrow" | "closed";

export interface Listing {
  id: string;
  name: string;
  city: string;
  state: string;
  units: number;
  yearBuilt: string;
  status: ListingStatus;
  class: string;
  image: string;
  lat: number;
  lng: number;
  summary: string;
}

export const STATUS_LABEL: Record<ListingStatus, string> = {
  available: "Available",
  "under-contract": "Under Contract",
  "in-escrow": "In Escrow",
  closed: "Closed",
};

export const STATUS_DOT: Record<ListingStatus, string> = {
  available: "bg-emerald-600",
  "under-contract": "bg-amber-600",
  "in-escrow": "bg-sky-600",
  closed: "bg-zinc-400",
};

export const STATUS_CHIP: Record<ListingStatus, string> = {
  available: "text-emerald-800 bg-emerald-50 ring-emerald-700/10",
  "under-contract": "text-amber-800 bg-amber-50 ring-amber-700/10",
  "in-escrow": "text-sky-800 bg-sky-50 ring-sky-700/10",
  closed: "text-zinc-700 bg-zinc-100 ring-zinc-600/10",
};

export const listings: Listing[] = [
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
    lat: 27.9506,
    lng: -82.4572,
    summary: "Bayfront garden-style with stabilized cash flow and capex upside.",
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
    lat: 30.2672,
    lng: -97.7431,
    summary: "Three-property roll-up in Central Texas with mark-to-market rent thesis.",
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
    lat: 32.7157,
    lng: -117.1611,
    summary: "Core urban high-rise priced below replacement cost.",
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
    lat: 33.749,
    lng: -84.388,
    summary: "Two-asset Sunbelt portfolio inside a top-ten MSA.",
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
    lat: 36.1627,
    lng: -86.7816,
    summary: "Transit-oriented mixed-use with first-floor retail income.",
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
    lat: 33.4484,
    lng: -112.074,
    summary: "Closed Q1 — sold at a 4.6% cap to a private equity sponsor.",
  },
];