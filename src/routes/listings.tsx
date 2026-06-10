import { useState, useEffect } from "react";
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

const TABS: { status: ListingStatus; title: string; description: string }[] = [
  { status: "available", title: "Available", description: "Actively marketed offerings open for tour and offer." },
  { status: "in-escrow", title: "In Escrow", description: "Past contingency, moving toward close." },
  { status: "closed", title: "Recently Closed", description: "A representative sample of recently closed multifamily transactions." },
];

const STATE_OPTIONS = Array.from(new Set(listings.map((l) => l.state))).sort();

function ListingsPage() {
  const [stateFilter, setStateFilter] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<ListingStatus>("available");

  // Honor hash like #in-escrow or #closed to preselect tab
  useEffect(() => {
    if (typeof window === "undefined") return;
    const h = window.location.hash.replace("#", "") as ListingStatus;
    if (TABS.some((t) => t.status === h)) setActiveTab(h);
  }, []);

  const filtered = listings.filter(
    (l) =>
      l.status === activeTab &&
      (stateFilter === "all" || l.state === stateFilter),
  );
  const activeSection = TABS.find((t) => t.status === activeTab)!;

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Properties"
        title="Our multifamily pipeline."
        description="Explore offerings on the interactive map and switch between Available, In Escrow, and Recently Closed below."
      />

      {/* Tabs */}
      <section className="px-6 pt-10">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 border-b border-foreground/10">
          {TABS.map((t) => {
            const isActive = t.status === activeTab;
            return (
              <button
                key={t.status}
                type="button"
                onClick={() => setActiveTab(t.status)}
                className={`px-5 py-3 text-sm font-medium -mb-px border-b-2 transition-colors ${
                  isActive
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.title}
              </button>
            );
          })}
        </div>
      </section>

      {/* Map */}
      <section className="py-12 px-6 bg-surface-muted/40 border-b border-foreground/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Interactive Property Explorer
              </div>
              <h2 className="font-serif text-3xl md:text-4xl">{activeSection.title}</h2>
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

      {/* Cards for active tab */}
      <section className="py-20 px-6 border-b border-foreground/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-2">{activeSection.title}</h2>
              <p className="text-sm text-muted-foreground max-w-md">{activeSection.description}</p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {filtered.length} offering{filtered.length === 1 ? "" : "s"}
            </span>
          </div>
          {filtered.length === 0 ? (
            <p className="text-muted-foreground">No offerings match the current filter.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {filtered.map((l) => (
                <PropertyCard key={l.id} listing={l} />
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}