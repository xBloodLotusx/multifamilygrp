import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  type Listing,
  STATUS_CHIP,
  STATUS_DOT,
  STATUS_LABEL,
} from "@/data/listings";

interface Props {
  listings: Listing[];
  height?: string;
}

/**
 * Stylized US-map placeholder with interactive property pins.
 * Click or hover a pin → pop-out card with image + key stats + link.
 */
export function ListingsMap({ listings, height = "h-[560px]" }: Props) {
  const [activeId, setActiveId] = useState<string | null>(listings[0]?.id ?? null);
  const active = listings.find((l) => l.id === activeId) ?? null;

  return (
    <div
      className={`relative w-full ${height} bg-surface-muted rounded-[12px] outline-1 -outline-offset-1 outline-foreground/5 overflow-hidden`}
    >
      {/* faint US-map silhouette as background */}
      <svg
        viewBox="0 0 1000 500"
        className="absolute inset-0 w-full h-full text-foreground/10"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="1000" height="500" fill="url(#grid)" />
        {/* approximate continental US blob */}
        <path
          d="M120,210 C 160,140 260,110 360,120 C 460,90 580,100 680,130 C 780,140 860,180 880,240 C 900,300 820,350 720,360 C 620,380 520,360 420,380 C 320,400 220,380 160,330 C 110,290 100,250 120,210 Z"
          fill="currentColor"
          opacity="0.35"
        />
      </svg>

      {/* Pins */}
      {listings.map((l) => {
        const isActive = l.id === activeId;
        return (
          <button
            key={l.id}
            type="button"
            onClick={() => setActiveId(l.id)}
            onMouseEnter={() => setActiveId(l.id)}
            style={{ left: `${l.mapX}%`, top: `${l.mapY}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            aria-label={`${l.name}, ${l.city}, ${l.state}`}
          >
            <span
              className={`block rounded-full ring-2 ring-background shadow-md transition-all ${STATUS_DOT[l.status]} ${
                isActive ? "size-4" : "size-3 group-hover:size-4"
              }`}
            />
          </button>
        );
      })}

      {/* Pop-out card for active pin */}
      {active && (
        <div
          style={{
            left: `${active.mapX}%`,
            top: `${active.mapY}%`,
          }}
          className="absolute -translate-x-1/2 -translate-y-[calc(100%+18px)] w-72 bg-background rounded-[8px] ring-1 ring-foreground/10 shadow-2xl p-3 pointer-events-auto"
        >
          <div className="w-full aspect-video bg-surface-muted rounded-sm overflow-hidden mb-3">
            <img
              src={active.image}
              alt={active.name}
              loading="lazy"
              width={400}
              height={225}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-between items-start gap-2 mb-1">
            <h4 className="text-sm font-semibold tracking-tight leading-tight">{active.name}</h4>
            <span
              className={`shrink-0 text-[9px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded ring-1 ring-inset ${STATUS_CHIP[active.status]}`}
            >
              {STATUS_LABEL[active.status]}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            {active.city}, {active.state} &bull; {active.units} Units
          </p>
          <Link
            to="/listings"
            className="block mt-2 text-xs font-medium underline underline-offset-4 hover:text-foreground"
          >
            Detailed Offering →
          </Link>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {(["available", "under-contract", "in-escrow", "closed"] as const).map((s) => (
            <span
              key={s}
              className="bg-background/90 backdrop-blur px-3 py-1.5 rounded-full ring-1 ring-foreground/10 text-[10px] font-medium uppercase tracking-wider flex items-center gap-2"
            >
              <span className={`size-1.5 rounded-full ${STATUS_DOT[s]}`} />
              {STATUS_LABEL[s]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}