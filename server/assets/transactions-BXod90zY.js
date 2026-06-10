import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout, P as PageHeader } from "./site-layout-DOmaAtVs.js";
import { l as listings, P as PropertyCard } from "./property-card-DfP8ODVN.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
function TransactionsPage() {
  const closed = listings.filter((l) => l.status === "closed");
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Transactions", title: "Selected closed transactions.", description: "A representative sample of multifamily dispositions and recapitalizations TMG has advised on." }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14", children: [
      closed.map((l) => /* @__PURE__ */ jsx(PropertyCard, { listing: l }, l.id)),
      closed.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Closed transaction case studies coming soon." })
    ] }) })
  ] });
}
export {
  TransactionsPage as component
};
