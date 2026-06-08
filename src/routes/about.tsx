import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Multifamily Group" },
      { name: "description", content: "The Multifamily Group is a nationwide multifamily investment sales advisory firm." },
      { property: "og:title", content: "About — The Multifamily Group" },
      { property: "og:description", content: "Nationwide multifamily investment sales advisory firm." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title="An owner-aligned multifamily advisory firm."
        description="Founded on the belief that institutional discipline and entrepreneurial service can coexist, The Multifamily Group represents owners across the nation."
      />
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p>
            We advise institutional and private multifamily owners on dispositions,
            recapitalizations, and strategic capital decisions. Our work spans Class A core
            assets in primary metros to value-add portfolios in emerging Sunbelt submarkets.
          </p>
          <p>
            The firm was built around a single principle: every owner deserves the same
            transparency, rigor, and access to capital — regardless of deal size.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}