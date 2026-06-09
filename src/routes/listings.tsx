import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site-layout";
import { PropertyCard } from "@/components/property-card";
import { ListingsMap } from "@/components/listings-map";
import { listings, type ListingStatus } from "@/data/listings";

export const Route = createFileRoute("/listings")({
  head: () => ({
    meta: [
      { title: "Current Listings — The Multifamily Group" },
      { name: "description", content: "Explore active multifamily investment offerings on an interactive nationwide map, organized by status." },
      { property: "og:title", content: "Current Listings — The Multifamily Group" },
      { property: "og:description", content: "Interactive map and grid of current multifamily investment offerings." },
    ],
  }),
  component: ListingsPage,
});

const SECTIONS: { status: ListingStatus; title: string; description: string }[] = [
  { status: "available", title: "Available", description: "Actively marketed offerings open for tour and offer." },
  { status: "under-contract", title: "Under Contract", description: "Negotiated with a single buyer; back-up offers welcome." },
  { status: "in-escrow", title: "In Escrow", description: "Past contingency, moving toward close." },
];

const STATE_OPTIONS = Array.from(new Set(listings.map((l) => l.state))).sort();

function ListingsPage() {
  const [stateFilter, setStateFilter] = useState<string>("all");

  const filtered = listings.filter(
    (l) => stateFilter === "all" || l.state === stateFilter,
  );

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Current Listings"
        title="Active multifamily offerings."
        description="Explore our nationwide pipeline on the interactive map, then browse offerings by status below."
      />

      {/* Map */}
      <section className="py-12 px-6 bg-surface-muted/40 border-b border-foreground/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Interactive Property Explorer
              </div>
              <h2 className="font-serif text-3xl md:text-4xl">Nationwide reach.</h2>
            </div>
            <div className="flex items-center gap-3">
              <label className="text-xs uppercase tracking-wider text-muted-foreground" htmlFor="state">
                Filter by state
              </label>
              <select
                id="state"
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                className="text-sm bg-background ring-1 ring-foreground/10 rounded-sm px-3 py-2"
              >
                <option value="all">All states</option>
                {STATE_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <ListingsMap listings={filtered} />
        </div>
      </section>

      {/* Grouped grids */}
      {SECTIONS.map((sec) => {
        const rows = filtered.filter((l) => l.status === sec.status);
        if (rows.length === 0) return null;
        return (
          <section id={sec.status} key={sec.status} className="py-20 px-6 border-b border-foreground/5 scroll-mt-20">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-end justify-between mb-12 gap-6">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl mb-2">{sec.title}</h2>
                  <p className="text-sm text-muted-foreground max-w-md">{sec.description}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {rows.length} offering{rows.length === 1 ? "" : "s"}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                {rows.map((l) => (
                  <PropertyCard key={l.id} listing={l} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </SiteLayout>
  );
}