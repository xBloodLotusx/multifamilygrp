import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout, P as PageHeader } from "./site-layout-CQHw8xvP.js";
import "@tanstack/react-router";
const TEAM = [{
  name: "Jordan Hale",
  title: "Managing Partner",
  city: "Dallas, TX"
}, {
  name: "Maya Okafor",
  title: "Partner — Sunbelt",
  city: "Atlanta, GA"
}, {
  name: "Daniel Park",
  title: "Partner — West",
  city: "Phoenix, AZ"
}, {
  name: "Reese Whitfield",
  title: "Director, Capital Markets",
  city: "New York, NY"
}, {
  name: "Sasha Rivera",
  title: "Director, Analytics",
  city: "Dallas, TX"
}, {
  name: "Tomás Linwood",
  title: "Director, Marketing",
  city: "Nashville, TN"
}];
function TeamPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Team", title: "The advisors behind every transaction." }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14", children: TEAM.map((m) => /* @__PURE__ */ jsxs("div", { className: "group", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full aspect-[4/5] bg-surface-muted rounded-[12px] outline-1 -outline-offset-1 outline-foreground/5 mb-6 grid place-items-center text-xs uppercase tracking-widest text-muted-foreground", children: "Portrait" }),
      /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl leading-tight", children: m.name }),
      /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: m.title }),
      /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: m.city })
    ] }, m.name)) }) })
  ] });
}
export {
  TeamPage as component
};
