import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Multifamily Group" },
      { name: "description", content: "Request a confidential broker opinion of value or speak with a TMG advisor." },
      { property: "og:title", content: "Contact — The Multifamily Group" },
      { property: "og:description", content: "Request a confidential conversation with TMG." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Start a confidential conversation."
        description="Tell us about your asset. We respond within one business day."
      />
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {[
              { id: "name", label: "Full name", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "asset", label: "Asset location & unit count", type: "text" },
            ].map((f) => (
              <div key={f.id} className="grid gap-2">
                <label htmlFor={f.id} className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  required
                  className="bg-background ring-1 ring-foreground/10 rounded-sm px-3 py-3 text-base focus:outline-none focus:ring-foreground/40"
                />
              </div>
            ))}
            <div className="grid gap-2">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Notes
              </label>
              <textarea
                id="message"
                rows={5}
                className="bg-background ring-1 ring-foreground/10 rounded-sm px-3 py-3 text-base focus:outline-none focus:ring-foreground/40"
              />
            </div>
            <button
              type="submit"
              className="bg-foreground text-background px-6 py-3 rounded-sm text-sm font-medium hover:bg-foreground/90"
            >
              Send confidential note →
            </button>
          </form>
          <aside className="space-y-8 text-sm">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">
                Headquarters
              </div>
              <p className="text-foreground/80">Dallas, TX</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">
                Email
              </div>
              <a href="mailto:info@multifamilygroup.com" className="underline underline-offset-4">
                info@multifamilygroup.com
              </a>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">
                Phone
              </div>
              <p>+1 (214) 555-0144</p>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}