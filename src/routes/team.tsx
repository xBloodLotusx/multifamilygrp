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
  { name: "Jon Krebbs", title: "Managing Partner", photo: "https://multifamilygrp.com/wp-content/uploads/2025/06/Jon-Krebbs-2025-v1.png" },
  { name: "Paul Yazbeck", title: "Managing Partner", photo: "https://multifamilygrp.com/wp-content/uploads/2024/05/Paul-Yazbeck-2024-v1.png" },
  { name: "Chase Davis", title: "Chief Operating Officer", photo: "https://multifamilygrp.com/wp-content/uploads/2024/05/Chase-Davis-2024-v1.png" },
  { name: "Heather Hurst", title: "Director of Marketing & Transaction Management", photo: "https://multifamilygrp.com/wp-content/uploads/2024/05/Heather-Moore-2024-v1.png" },
  { name: "Chris Siemasko", title: "Senior Managing Director", photo: "https://multifamilygrp.com/wp-content/uploads/2024/05/Chris-Siemasko-2024-v1.png" },
  { name: "Trey Caldwell", title: "Senior Managing Director", photo: "https://multifamilygrp.com/wp-content/uploads/2024/05/Trey-Caldwell-2024-v1.png" },
  { name: "Greg Miller", title: "Senior Managing Director", photo: "https://multifamilygrp.com/wp-content/uploads/2024/05/Greg-Miller-2024-v1.png" },
  { name: "Yonnic Land", title: "Senior Managing Director", photo: "https://multifamilygrp.com/wp-content/uploads/2024/05/Yonnic-Land-2024-v1.png" },
  { name: "Will Clarke", title: "Managing Director", photo: "https://multifamilygrp.com/wp-content/uploads/2024/05/Will-Clarke-2024-v1.png" },
  { name: "Danny Wieland", title: "Managing Director", photo: "https://multifamilygrp.com/wp-content/uploads/2024/05/Danny-Wieland-2024-v1.png" },
  { name: "Dylan Tomor", title: "Managing Director", photo: "https://multifamilygrp.com/wp-content/uploads/2026/01/Dylan-Tomor-2026-v1.png" },
  { name: "Guillermo Gameros", title: "Managing Director", photo: "https://multifamilygrp.com/wp-content/uploads/2024/05/Guillermo-Gameros-2024-v1.png" },
  { name: "David Tello", title: "Managing Director", photo: "https://multifamilygrp.com/wp-content/uploads/2024/05/David-Tello-2024-v1.png" },
  { name: "Jackson Morris", title: "Advisor", photo: "https://multifamilygrp.com/wp-content/uploads/2025/06/Jackson-Morris-2025-v2.png" },
  { name: "Emilio Ficaccio", title: "Advisor", photo: "https://multifamilygrp.com/wp-content/uploads/2025/01/Emilio-Ficcacio-2024-v2.png" },
  { name: "Emerson Conn", title: "Marketing Director & Assistant Transaction Manager", photo: "https://multifamilygrp.com/wp-content/uploads/2026/02/Emerson-Conn-2026-v1.png" },
  { name: "Dmytro Gladchenko", title: "Chief Analyst", photo: "https://multifamilygrp.com/wp-content/uploads/2024/05/Dmytro-Gladchenko-2024-v1.png" },
];

function TeamPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Team" title="The advisors behind every transaction." />
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {TEAM.map((m) => (
            <div key={m.name} className="group">
              <div className="w-full aspect-[4/5] bg-surface-muted rounded-[12px] outline-1 -outline-offset-1 outline-foreground/5 mb-6 overflow-hidden">
                <img
                  src={m.photo}
                  alt={`Headshot of ${m.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <h3 className="font-serif text-2xl leading-tight">{m.name}</h3>
              <div className="mt-1 text-sm text-muted-foreground">{m.title}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}