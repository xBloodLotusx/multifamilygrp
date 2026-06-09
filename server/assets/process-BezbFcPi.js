import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { S as SiteLayout, P as PageHeader } from "./site-layout-vkqlSChi.js";
import "react";
import "lucide-react";
const STEPS = [{
  n: "01",
  title: "Asset Valuation",
  body: "Granular underwriting, comparable sale analysis, and submarket diligence pinpoint defensible pricing. We model multiple disposition scenarios so owners enter the market with conviction.",
  deliverables: ["Broker Opinion of Value", "Rent comp survey", "Cap-rate scenario model"]
}, {
  n: "02",
  title: "Marketing Preparation",
  body: "Institutional-grade offering memorandums, drone photography, and a private digital deal room. Every asset is presented at the standard the buyer pool expects.",
  deliverables: ["Offering Memorandum", "Deal-room build-out", "Aerial & ground media"]
}, {
  n: "03",
  title: "Buyer Distribution",
  body: "Targeted outreach across our proprietary database of qualified capital — REITs, private equity sponsors, syndicators, family offices, and 1031 investors.",
  deliverables: ["Curated buyer call-down", "Confidential teaser", "NDA-gated access"]
}, {
  n: "04",
  title: "Tour Coordination",
  body: "We orchestrate tour logistics and accompany every qualified investor on-site, defending the narrative and capturing real-time market feedback.",
  deliverables: ["Tour scheduling", "On-site advisor", "Feedback synthesis"]
}, {
  n: "05",
  title: "Offer Management",
  body: "Aggressive vetting of bidders — terms, proof of funds, track record. Comparative bid matrices and structured best-and-final rounds maximize price and certainty of close.",
  deliverables: ["Bid matrix", "Buyer reference checks", "Best-and-final call"]
}, {
  n: "06",
  title: "Contract Negotiation",
  body: "Hands-on PSA negotiation and re-trade defense. We protect the deposit, the closing timeline, and the seller's downside throughout due diligence.",
  deliverables: ["PSA strategy", "Re-trade defense", "Diligence coordination"]
}, {
  n: "07",
  title: "Closing",
  body: "Title, escrow, lender, and equity stakeholders managed to a clean settlement and asset transition. Post-close reporting closes the loop with sellers.",
  deliverables: ["Closing oversight", "Funds disbursement", "Post-close report"]
}];
function StepIcon({
  n
}) {
  return /* @__PURE__ */ jsx("div", { className: "shrink-0 size-12 grid place-items-center bg-foreground text-background rounded-full font-serif text-lg", children: n });
}
function ProcessPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Our Process", title: "A proven seven-step brokerage methodology.", description: "From the first conversation to clean settlement, every TMG engagement follows the same disciplined sequence designed to maximize price and certainty of close." }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-16 border-b border-foreground/5", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-px bg-foreground/10 rounded-[12px] overflow-hidden", children: STEPS.map((s) => /* @__PURE__ */ jsxs("a", { href: `#step-${s.n}`, className: "bg-background p-5 hover:bg-surface-muted transition-colors text-center group", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold tracking-[0.18em] text-muted-foreground", children: s.n }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm font-medium leading-snug", children: s.title })
    ] }, s.n)) }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6", children: STEPS.map((s, i) => /* @__PURE__ */ jsx("article", { id: `step-${s.n}`, className: `scroll-mt-20 py-20 ${i !== STEPS.length - 1 ? "border-b border-foreground/5" : ""} ${i % 2 === 1 ? "bg-surface-muted/40" : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 flex gap-6", children: [
        /* @__PURE__ */ jsx(StepIcon, { n: s.n }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3", children: [
            "Step ",
            s.n
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-4xl leading-tight", children: s.title })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground/80 text-pretty leading-relaxed", children: s.body }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3", children: "Deliverables" }),
          /* @__PURE__ */ jsx("ul", { className: "grid sm:grid-cols-3 gap-3 text-sm", children: s.deliverables.map((d) => /* @__PURE__ */ jsx("li", { className: "rounded-sm ring-1 ring-foreground/10 bg-background px-3 py-2.5", children: d }, d)) })
        ] })
      ] })
    ] }) }, s.n)) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 px-6 border-t border-foreground/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-5xl leading-tight text-balance", children: "Start with a confidential conversation." }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-muted-foreground max-w-[55ch] mx-auto", children: "We deliver complimentary broker opinions of value for qualified multifamily owners within five business days." }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 mt-8 bg-foreground text-background px-6 py-3 rounded-sm text-sm font-medium hover:bg-foreground/90", children: "Request a BOV →" })
    ] }) })
  ] });
}
export {
  ProcessPage as component
};
