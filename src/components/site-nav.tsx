import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  to?: string;
  children?: { to: string; hash?: string; label: string }[];
};

const NAV: NavItem[] = [
  {
    label: "Properties",
    to: "/listings",
  },
  {
    label: "About",
    children: [
      { to: "/process", label: "Our Process" },
      { to: "/team", label: "Team" },
    ],
  },
  {
    label: "Resources",
    children: [
      { to: "/news", label: "News" },
      { to: "/blog", label: "Blog" },
      { to: "/reports", label: "Reports" },
    ],
  },
  {
    label: "Contact",
    children: [
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact Form" },
    ],
  },
];

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-tmg-navy text-tmg-navy-foreground border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl leading-none tracking-tight">
            the multifamily group<span className="opacity-70">.</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            !item.children ? (
              <Link
                key={item.label}
                to={item.to!}
                className="px-4 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ) : (
            <div key={item.label} className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors"
              >
                {item.label}
                <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform group-hover:rotate-180" />
              </button>
              <div
                className="absolute right-0 top-full pt-2 min-w-[14rem] opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  focus-within:opacity-100 focus-within:visible
                  transition-all duration-150"
              >
                <div className="bg-background text-foreground rounded-md shadow-lg ring-1 ring-foreground/10 overflow-hidden py-2">
                  {item.children!.map((c) => (
                    <Link
                      key={`${c.to}${c.hash ?? ""}${c.label}`}
                      to={c.to}
                      hash={c.hash}
                      className="block px-4 py-2.5 text-sm hover:bg-accent transition-colors"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            )
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-tmg-navy">
          <div className="px-6 py-4 space-y-1">
            {NAV.map((item) => {
              if (!item.children) {
                return (
                  <div key={item.label} className="border-b border-white/10 last:border-b-0">
                    <Link
                      to={item.to!}
                      onClick={() => {
                        setMobileOpen(false);
                        setOpenMobile(null);
                      }}
                      className="block py-3 text-sm font-medium text-white/90"
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              }
              const isOpen = openMobile === item.label;
              return (
                <div key={item.label} className="border-b border-white/10 last:border-b-0">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-3 text-sm font-medium text-white/90"
                    onClick={() => setOpenMobile(isOpen ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-3 pl-3 space-y-1">
                      {item.children!.map((c) => (
                        <Link
                          key={`${c.to}${c.hash ?? ""}${c.label}`}
                          to={c.to}
                          hash={c.hash}
                          onClick={() => {
                            setMobileOpen(false);
                            setOpenMobile(null);
                          }}
                          className="block py-2 text-sm text-white/75 hover:text-white"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}