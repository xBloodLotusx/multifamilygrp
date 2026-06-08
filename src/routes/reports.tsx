import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site-layout";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "Market Reports — The Multifamily Group" },
      { name: "description", content: "Quarterly multifamily market reports and submarket research." },
      { property: "og:title", content: "Market Reports — The Multifamily Group" },
      { property: "og:description", content: "Quarterly multifamily research." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="Reports" title="Multifamily research, quarterly." />
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Sunbelt Outlook Q2", "Mountain West Cap-Rate Trends", "Class B Value-Add Survey"].map((r) => (
            <div key={r} className="rounded-[12px] ring-1 ring-foreground/10 bg-background p-8 hover:bg-surface-muted/40 transition-colors">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">Q2 2026 Report</div>
              <h3 className="font-serif text-2xl leading-tight">{r}</h3>
              <button className="mt-6 text-sm font-medium underline underline-offset-4">Download PDF →</button>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  ),
});