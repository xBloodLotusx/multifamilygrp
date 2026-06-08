import { Link } from "@tanstack/react-router";

const links = [
  { to: "/listings", label: "Current Listings" },
  { to: "/transactions", label: "Transactions" },
  { to: "/process", label: "Our Process" },
  { to: "/team", label: "Team" },
  { to: "/reports", label: "Reports" },
  { to: "/about", label: "About" },
] as const;

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl leading-none">The Multifamily Group</span>
        </Link>
        <div className="hidden md:flex gap-7 text-sm font-medium text-foreground/80">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/contact"
          className="text-sm font-medium ring-1 ring-foreground/15 px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}