import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout, P as PageHeader } from "./site-layout-CQHw8xvP.js";
import "@tanstack/react-router";
function AboutPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "About", title: "An owner-aligned multifamily advisory firm.", description: "Founded on the belief that institutional discipline and entrepreneurial service can coexist, The Multifamily Group represents owners across the nation." }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto space-y-6 text-lg text-foreground/80 leading-relaxed", children: [
      /* @__PURE__ */ jsx("p", { children: "We advise institutional and private multifamily owners on dispositions, recapitalizations, and strategic capital decisions. Our work spans Class A core assets in primary metros to value-add portfolios in emerging Sunbelt submarkets." }),
      /* @__PURE__ */ jsx("p", { children: "The firm was built around a single principle: every owner deserves the same transparency, rigor, and access to capital — regardless of deal size." })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
