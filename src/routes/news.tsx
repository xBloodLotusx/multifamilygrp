import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site-layout";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — The Multifamily Group" },
      { name: "description", content: "Firm announcements, closed deals, and market commentary." },
      { property: "og:title", content: "News — The Multifamily Group" },
      { property: "og:description", content: "Firm announcements and market commentary." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="News" title="Announcements & market commentary." />
      <section className="px-6 py-20 max-w-3xl mx-auto divide-y divide-foreground/5">
        {[
          { date: "May 2026", title: "TMG closes 412-unit Atlanta portfolio for $98M" },
          { date: "Apr 2026", title: "Sunbelt Multifamily Outlook — Q2 release" },
          { date: "Feb 2026", title: "Firm expands West Coast capital markets desk" },
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