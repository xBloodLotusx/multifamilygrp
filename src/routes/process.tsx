import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site-layout";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — The Multifamily Group" },
      { name: "description", content: "A proven seven-step brokerage methodology — from valuation through closing — that institutional and private multifamily owners rely on." },
      { property: "og:title", content: "Our Process — The Multifamily Group" },
      { property: "og:description", content: "Seven-step institutional multifamily brokerage methodology." },
    ],
  }),
  component: ProcessPage,
});

const STEPS = [
  {
    n: "01",
    title: "Asset Valuation",
    body: "Granular underwriting, comparable sale analysis, and submarket diligence pinpoint defensible pricing. We model multiple disposition scenarios so owners enter the market with conviction.",
    deliverables: ["Broker Opinion of Value", "Rent comp survey", "Cap-rate scenario model"],
  },
  {
    n: "02",
    title: "Marketing Preparation",
    body: "Institutional-grade offering memorandums, drone photography, and a private digital deal room. Every asset is presented at the standard the buyer pool expects.",
    deliverables: ["Offering Memorandum", "Deal-room build-out", "Aerial & ground media"],
  },
  {
    n: "03",
    title: "Buyer Distribution",
    body: "Targeted outreach across our proprietary database of qualified capital — REITs, private equity sponsors, syndicators, family offices, and 1031 investors.",
    deliverables: ["Curated buyer call-down", "Confidential teaser", "NDA-gated access"],
  },
  {
    n: "04",
    title: "Tour Coordination",
    body: "We orchestrate tour logistics and accompany every qualified investor on-site, defending the narrative and capturing real-time market feedback.",
    deliverables: ["Tour scheduling", "On-site advisor", "Feedback synthesis"],
  },
  {
    n: "05",
    title: "Offer Management",
    body: "Aggressive vetting of bidders — terms, proof of funds, track record. Comparative bid matrices and structured best-and-final rounds maximize price and certainty of close.",
    deliverables: ["Bid matrix", "Buyer reference checks", "Best-and-final call"],
  },
  {
    n: "06",
    title: "Contract Negotiation",
    body: "Hands-on PSA negotiation and re-trade defense. We protect the deposit, the closing timeline, and the seller's downside throughout due diligence.",
    deliverables: ["PSA strategy", "Re-trade defense", "Diligence coordination"],
  },
  {
    n: "07",
    title: "Closing",
    body: "Title, escrow, lender, and equity stakeholders managed to a clean settlement and asset transition. Post-close reporting closes the loop with sellers.",
    deliverables: ["Closing oversight", "Funds disbursement", "Post-close report"],
  },
];

function StepIcon({ n }: { n: string }) {
  return (
    <div className="shrink-0 size-12 grid place-items-center bg-foreground text-background rounded-full font-serif text-lg">
      {n}
    </div>
  );
}

function ProcessPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our Process"
        title="A proven seven-step brokerage methodology."
        description="From the first conversation to clean settlement, every TMG engagement follows the same disciplined sequence designed to maximize price and certainty of close."
      />

      {/* Step overview */}
      <section className="px-6 py-16 border-b border-foreground/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-px bg-foreground/10 rounded-[12px] overflow-hidden">
          {STEPS.map((s) => (
            <a
              key={s.n}
              href={`#step-${s.n}`}
              className="bg-background p-5 hover:bg-surface-muted transition-colors text-center group"
            >
              <div className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">{s.n}</div>
              <div className="mt-2 text-sm font-medium leading-snug">{s.title}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Detailed steps */}
      <section className="px-6">
        {STEPS.map((s, i) => (
          <article
            key={s.n}
            id={`step-${s.n}`}
            className={`scroll-mt-20 py-20 ${
              i !== STEPS.length - 1 ? "border-b border-foreground/5" : ""
            } ${i % 2 === 1 ? "bg-surface-muted/40" : ""}`}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 flex gap-6">
                <StepIcon n={s.n} />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Step {s.n}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl leading-tight">{s.title}</h2>
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-lg text-foreground/80 text-pretty leading-relaxed">{s.body}</p>
                <div className="mt-8">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                    Deliverables
                  </div>
                  <ul className="grid sm:grid-cols-3 gap-3 text-sm">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="rounded-sm ring-1 ring-foreground/10 bg-background px-3 py-2.5"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-foreground/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
            Start with a confidential conversation.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-[55ch] mx-auto">
            We deliver complimentary broker opinions of value for qualified multifamily owners
            within five business days.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-foreground text-background px-6 py-3 rounded-sm text-sm font-medium hover:bg-foreground/90"
          >
            Request a BOV →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}