import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site-layout";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — The Multifamily Group" },
      { name: "description", content: "Join The Multifamily Group — opportunities for analysts, associates, and advisors." },
      { property: "og:title", content: "Careers — The Multifamily Group" },
      { property: "og:description", content: "Join our multifamily brokerage team." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader
        eyebrow="Careers"
        title="Build a brokerage career with us."
        description="We hire analysts, associates, and seasoned advisors who share our owner-first standard."
      />
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-muted-foreground">
          No open roles posted publicly. Send a confidential introduction to{" "}
          <a href="mailto:careers@multifamilygroup.com" className="underline underline-offset-4 text-foreground">
            careers@multifamilygroup.com
          </a>.
        </div>
      </section>
    </SiteLayout>
  ),
});