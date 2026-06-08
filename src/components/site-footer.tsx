import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Firm",
    links: [
      { to: "/about", label: "About" },
      { to: "/team", label: "Team" },
      { to: "/careers", label: "Careers" },
      { to: "/news", label: "News" },
    ],
  },
  {
    title: "Investors",
    links: [
      { to: "/listings", label: "Current Listings" },
      { to: "/transactions", label: "Transactions" },
      { to: "/reports", label: "Market Reports" },
      { to: "/process", label: "Our Process" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="font-serif text-3xl leading-none mb-4">The Multifamily Group</div>
          <p className="text-sm text-muted-foreground max-w-sm text-pretty">
            Institutional multifamily investment sales and brokerage advisory.
            Nationwide reach, owner-aligned execution.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4">
              {col.title}
            </div>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-foreground text-foreground/80 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Contact
          </div>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>Dallas, TX (HQ)</li>
            <li>info@multifamilygroup.com</li>
            <li>+1 (214) 555&#8209;0144</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Multifamily Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-foreground">Privacy</Link>
            <Link to="/" className="hover:text-foreground">Terms</Link>
            <Link to="/" className="hover:text-foreground">Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}