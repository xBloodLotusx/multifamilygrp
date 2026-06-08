import { Link } from "@tanstack/react-router";
import { type Listing, STATUS_CHIP, STATUS_LABEL } from "@/data/listings";

export function PropertyCard({ listing }: { listing: Listing }) {
  const cta =
    listing.status === "closed"
      ? "View Transaction"
      : listing.status === "available"
        ? "Download Documents"
        : "Request More Info";
  return (
    <article className="group">
      <Link to="/listings" className="block">
        <div className="w-full aspect-square bg-surface-muted rounded-[12px] outline-1 -outline-offset-1 outline-foreground/5 overflow-hidden mb-6">
          <img
            src={listing.image}
            alt={`${listing.name} — ${listing.city}, ${listing.state}`}
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
        </div>
      </Link>
      <div className="flex justify-between items-start gap-3 mb-2">
        <h3 className="text-lg font-medium tracking-tight leading-snug">{listing.name}</h3>
        <span
          className={`shrink-0 text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded ring-1 ring-inset ${STATUS_CHIP[listing.status]}`}
        >
          {STATUS_LABEL[listing.status]}
        </span>
      </div>
      <div className="space-y-1 text-sm text-muted-foreground mb-6">
        <p>
          {listing.city}, {listing.state} &bull; {listing.units} Units
        </p>
        <p>
          Built {listing.yearBuilt} &bull; {listing.class}
        </p>
      </div>
      <button className="w-full py-2.5 text-xs font-semibold tracking-wide uppercase ring-1 ring-foreground/10 rounded-sm group-hover:bg-foreground group-hover:text-background transition-colors">
        {cta}
      </button>
    </article>
  );
}