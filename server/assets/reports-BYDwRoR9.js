import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout, P as PageHeader } from "./site-layout-CQHw8xvP.js";
import "@tanstack/react-router";
const SplitComponent = () => /* @__PURE__ */ jsxs(SiteLayout, { children: [
  /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Reports", title: "Multifamily research, quarterly." }),
  /* @__PURE__ */ jsx("section", { className: "px-6 py-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: ["Sunbelt Outlook Q2", "Mountain West Cap-Rate Trends", "Class B Value-Add Survey"].map((r) => /* @__PURE__ */ jsxs("div", { className: "rounded-[12px] ring-1 ring-foreground/10 bg-background p-8 hover:bg-surface-muted/40 transition-colors", children: [
    /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3", children: "Q2 2026 Report" }),
    /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl leading-tight", children: r }),
    /* @__PURE__ */ jsx("button", { className: "mt-6 text-sm font-medium underline underline-offset-4", children: "Download PDF →" })
  ] }, r)) }) })
] });
export {
  SplitComponent as component
};
