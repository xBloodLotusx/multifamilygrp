import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site-layout";
import { PropertyCard } from "@/components/property-card";
import { listings } from "@/data/listings";

export const Route = createFileRoute("/transactions")({
  head: () => ({
    meta: [
      { title: "Transactions — The Multifamily Group" },
      { name: "description", content: "Selected closed multifamily transactions advised by The Multifamily Group." },
      { property: "og:title", content: "Transactions — The Multifamily Group" },
      { property: "og:description", content: "Selected closed multifamily transactions." },
    ],
  }),
  component: TransactionsPage,
});

function TransactionsPage() {
  const closed = listings.filter((l) => l.status === "closed");
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Transactions"
        title="Selected closed transactions."
        description="A representative sample of multifamily dispositions and recapitalizations TMG has advised on."
      />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {closed.map((l) => (
            <PropertyCard key={l.id} listing={l} />
          ))}
          {closed.length === 0 && (
            <p className="text-muted-foreground">Closed transaction case studies coming soon.</p>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}