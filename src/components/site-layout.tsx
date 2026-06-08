import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="px-6 pt-20 pb-12 border-b border-foreground/5">
      <div className="max-w-7xl mx-auto">
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">
            {eyebrow}
          </div>
        )}
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-balance max-w-[20ch]">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg text-muted-foreground max-w-[55ch] text-pretty">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}