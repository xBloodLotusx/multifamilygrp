import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site-layout";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — The Multifamily Group" },
      { name: "description", content: "Insights, perspectives, and field notes from the TMG advisory team." },
      { property: "og:title", content: "Blog — The Multifamily Group" },
      { property: "og:description", content: "Insights and perspectives from TMG advisors." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="Blog" title="Field notes from the desk." description="Long-form perspectives on multifamily capital markets, operations, and submarket dynamics." />
      <section className="px-6 py-20 max-w-3xl mx-auto divide-y divide-foreground/5">
        {[
          { date: "Jun 2026", title: "What rate normalization means for value-add underwriting" },
          { date: "May 2026", title: "Inside a 1031 portfolio recapitalization — a case study" },
          { date: "Apr 2026", title: "Operator selection: the most underrated lever in a deal" },
        ].map((n) => (
          <article key={n.title} className="py-8">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{n.date}</div>
            <h3 className="font-serif text-2xl mt-2">{n.title}</h3>
          </article>
        ))}
      </section>
    </SiteLayout>
  ),
});