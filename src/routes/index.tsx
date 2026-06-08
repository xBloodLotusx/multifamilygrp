import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-building.jpg";
import { SiteLayout } from "@/components/site-layout";
import { PropertyCard } from "@/components/property-card";
import { listings } from "@/data/listings";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Multifamily Group — Institutional Multifamily Brokerage" },
      { name: "description", content: "Nationwide multifamily investment sales. Precision asset valuation, marketing preparation, and capital distribution for institutional and private owners." },
      { property: "og:title", content: "The Multifamily Group" },
      { property: "og:description", content: "Nationwide multifamily investment sales and brokerage advisory." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = listings.slice(0, 6);
  const active = listings.filter((l) => l.status === "available");
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Multifamily Brokerage &bull; Investment Sales &bull; Nationwide
            </div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] text-balance max-w-[20ch]">
              Precision in multifamily investment sales.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-[52ch] text-pretty">
              A nationwide network delivering institutional-grade brokerage and asset valuation
              for the sophisticated multifamily investor.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/listings"
                className="bg-foreground text-background text-sm font-medium pl-4 pr-5 py-3 inline-flex items-center gap-2 rounded-sm hover:bg-foreground/90 transition-colors"
              >
                <span aria-hidden>→</span> View Current Listings
              </Link>
              <Link
                to="/process"
                className="text-sm font-medium ring-1 ring-foreground/15 px-5 py-3 rounded-sm hover:bg-foreground hover:text-background transition-colors"
              >
                Our Process
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="w-full aspect-[4/5] bg-surface-muted rounded-[12px] outline-1 -outline-offset-1 outline-foreground/5 overflow-hidden">
              <img
                src={heroImg}
                alt="Modern urban multifamily residential architecture at golden hour"
                width={896}
                height={1120}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-foreground/5 bg-surface-muted/40">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { k: "$4.2B+", v: "Transaction Volume" },
            { k: "48", v: "States Covered" },
            { k: "120+", v: "Active Capital Sources" },
            { k: "22 yrs", v: "Brokerage Tenure" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-serif text-4xl md:text-5xl leading-none">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current Listings */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Market Opportunities
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance max-w-[18ch]">
                Current listings, nationwide.
              </h2>
            </div>
            <Link
              to="/listings"
              className="text-sm font-medium underline underline-offset-4 hover:text-foreground/70"
            >
              View all {active.length} available offerings →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {featured.map((l) => (
              <PropertyCard key={l.id} listing={l} />
            ))}
          </div>
        </div>
      </section>

      {/* Process teaser */}
      <section className="py-24 px-6 border-t border-foreground/5 bg-[#fdfdfd]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
              How we work
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance max-w-[15ch]">
              A proven seven-step methodology.
            </h2>
            <Link
              to="/process"
              className="inline-block mt-8 text-sm font-medium underline underline-offset-4"
            >
              Read the full process →
            </Link>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
            {[
              ["01", "Asset Valuation", "Underwriting and submarket diligence to pinpoint pricing."],
              ["02", "Marketing Preparation", "Offering memorandums built for institutional review."],
              ["03", "Buyer Distribution", "Targeted outreach to our nationwide capital network."],
              ["04", "Tour Coordination", "Owner-aligned access and on-site investor engagement."],
            ].map(([n, t, d]) => (
              <div key={n} className="flex gap-5">
                <div className="shrink-0 size-9 grid place-items-center ring-1 ring-foreground/10 rounded-full text-xs font-semibold">
                  {n}
                </div>
                <div>
                  <h3 className="font-medium mb-1.5">{t}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto rounded-[12px] bg-foreground text-background p-12 md:p-16 grid md:grid-cols-[2fr_1fr] gap-8 items-end">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance max-w-[22ch]">
              Considering a disposition or recapitalization?
            </h2>
            <p className="mt-4 text-background/70 max-w-[50ch]">
              We deliver confidential broker opinions of value within five business days for
              qualified owners.
            </p>
          </div>
          <Link
            to="/contact"
            className="justify-self-start md:justify-self-end inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-sm text-sm font-medium hover:bg-background/90"
          >
            Request a BOV →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
