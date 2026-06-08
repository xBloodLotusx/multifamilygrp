import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site-layout";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — The Multifamily Group" },
      { name: "description", content: "Meet the advisors behind The Multifamily Group." },
      { property: "og:title", content: "Team — The Multifamily Group" },
      { property: "og:description", content: "Meet our multifamily investment sales advisors." },
    ],
  }),
  component: TeamPage,
});

const TEAM = [
  { name: "Jordan Hale", title: "Managing Partner", city: "Dallas, TX" },
  { name: "Maya Okafor", title: "Partner — Sunbelt", city: "Atlanta, GA" },
  { name: "Daniel Park", title: "Partner — West", city: "Phoenix, AZ" },
  { name: "Reese Whitfield", title: "Director, Capital Markets", city: "New York, NY" },
  { name: "Sasha Rivera", title: "Director, Analytics", city: "Dallas, TX" },
  { name: "Tomás Linwood", title: "Director, Marketing", city: "Nashville, TN" },
];

function TeamPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Team" title="The advisors behind every transaction." />
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {TEAM.map((m) => (
            <div key={m.name} className="group">
              <div className="w-full aspect-[4/5] bg-surface-muted rounded-[12px] outline-1 -outline-offset-1 outline-foreground/5 mb-6 grid place-items-center text-xs uppercase tracking-widest text-muted-foreground">
                Portrait
              </div>
              <h3 className="font-serif text-2xl leading-tight">{m.name}</h3>
              <div className="mt-1 text-sm text-muted-foreground">{m.title}</div>
              <div className="text-sm text-muted-foreground">{m.city}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}