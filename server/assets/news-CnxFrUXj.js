import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout, P as PageHeader } from "./site-layout-CQHw8xvP.js";
import "@tanstack/react-router";
const SplitComponent = () => /* @__PURE__ */ jsxs(SiteLayout, { children: [
  /* @__PURE__ */ jsx(PageHeader, { eyebrow: "News", title: "Announcements & market commentary." }),
  /* @__PURE__ */ jsx("section", { className: "px-6 py-20 max-w-3xl mx-auto divide-y divide-foreground/5", children: [{
    date: "May 2026",
    title: "TMG closes 412-unit Atlanta portfolio for $98M"
  }, {
    date: "Apr 2026",
    title: "Sunbelt Multifamily Outlook — Q2 release"
  }, {
    date: "Feb 2026",
    title: "Firm expands West Coast capital markets desk"
  }].map((n) => /* @__PURE__ */ jsxs("article", { className: "py-8", children: [
    /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground", children: n.date }),
    /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl mt-2", children: n.title })
  ] }, n.title)) })
] });
export {
  SplitComponent as component
};
