import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout, P as PageHeader } from "./site-layout-vkqlSChi.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
function ContactPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Contact", title: "Start a confidential conversation.", description: "Tell us about your asset. We respond within one business day." }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16", children: [
      /* @__PURE__ */ jsxs("form", { className: "space-y-6", onSubmit: (e) => {
        e.preventDefault();
      }, children: [
        [{
          id: "name",
          label: "Full name",
          type: "text"
        }, {
          id: "email",
          label: "Email",
          type: "email"
        }, {
          id: "asset",
          label: "Asset location & unit count",
          type: "text"
        }].map((f) => /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: f.id, className: "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground", children: f.label }),
          /* @__PURE__ */ jsx("input", { id: f.id, type: f.type, required: true, className: "bg-background ring-1 ring-foreground/10 rounded-sm px-3 py-3 text-base focus:outline-none focus:ring-foreground/40" })
        ] }, f.id)),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground", children: "Notes" }),
          /* @__PURE__ */ jsx("textarea", { id: "message", rows: 5, className: "bg-background ring-1 ring-foreground/10 rounded-sm px-3 py-3 text-base focus:outline-none focus:ring-foreground/40" })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "submit", className: "bg-foreground text-background px-6 py-3 rounded-sm text-sm font-medium hover:bg-foreground/90", children: "Send confidential note →" })
      ] }),
      /* @__PURE__ */ jsxs("aside", { className: "space-y-8 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2", children: "Headquarters" }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/80", children: "Dallas, TX" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2", children: "Email" }),
          /* @__PURE__ */ jsx("a", { href: "mailto:info@multifamilygroup.com", className: "underline underline-offset-4", children: "info@multifamilygroup.com" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2", children: "Phone" }),
          /* @__PURE__ */ jsx("p", { children: "+1 (214) 555-0144" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
