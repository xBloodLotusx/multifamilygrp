import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout, P as PageHeader } from "./site-layout-DOmaAtVs.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
const SplitComponent = () => /* @__PURE__ */ jsxs(SiteLayout, { children: [
  /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Blog", title: "Field notes from the desk.", description: "Long-form perspectives on multifamily capital markets, operations, and submarket dynamics." }),
  /* @__PURE__ */ jsx("section", { className: "px-6 py-20 max-w-3xl mx-auto divide-y divide-foreground/5", children: [{
    date: "Jun 2026",
    title: "What rate normalization means for value-add underwriting"
  }, {
    date: "May 2026",
    title: "Inside a 1031 portfolio recapitalization — a case study"
  }, {
    date: "Apr 2026",
    title: "Operator selection: the most underrated lever in a deal"
  }].map((n) => /* @__PURE__ */ jsxs("article", { className: "py-8", children: [
    /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground", children: n.date }),
    /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl mt-2", children: n.title })
  ] }, n.title)) })
] });
export {
  SplitComponent as component
};
