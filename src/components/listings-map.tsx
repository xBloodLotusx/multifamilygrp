import { useEffect, useRef, useState } from "react";
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

declare global {
  interface Window {
    google?: typeof google;
    __initMfgMap?: () => void;
    __mfgMapReady?: boolean;
  }
}

const STATUS_PIN_COLOR: Record<Listing["status"], string> = {
  available: "#059669",
  "under-contract": "#d97706",
  "in-escrow": "#0284c7",
  closed: "#a1a1aa",
};

function loadMapsScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.__mfgMapReady && window.google?.maps) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const existing = document.getElementById("gmaps-js") as HTMLScriptElement | null;
    const prev = window.__initMfgMap;
    window.__initMfgMap = () => {
      window.__mfgMapReady = true;
      prev?.();
      resolve();
    };
    if (existing) {
      if (window.google?.maps) resolve();
      return;
    }
    const key = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY;
    const channel = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID;
    const s = document.createElement("script");
    s.id = "gmaps-js";
    s.async = true;
    s.src = `https://maps.googleapis.com/maps/api/js?key=${key}&loading=async&callback=__initMfgMap${channel ? `&channel=${channel}` : ""}`;
    s.onerror = () => reject(new Error("Failed to load Google Maps"));
    document.head.appendChild(s);
  });
}

export function ListingsMap({ listings, height = "h-[560px]" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoRef = useRef<google.maps.InfoWindow | null>(null);
  const [activeId, setActiveId] = useState<string | null>(listings[0]?.id ?? null);

  useEffect(() => {
    let cancelled = false;
    loadMapsScript().then(() => {
      if (cancelled || !containerRef.current || !window.google) return;
      mapRef.current = new window.google.maps.Map(containerRef.current, {
        center: { lat: 39.5, lng: -98.35 },
        zoom: 4,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [
          { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          { featureType: "transit", stylers: [{ visibility: "off" }] },
        ],
      });
      infoRef.current = new window.google.maps.InfoWindow();
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || !window.google) return;
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];

    const bounds = new window.google.maps.LatLngBounds();
    listings.forEach((l) => {
      const marker = new window.google.maps.Marker({
        position: { lat: l.lat, lng: l.lng },
        map: mapRef.current!,
        title: l.name,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: STATUS_PIN_COLOR[l.status],
          fillOpacity: 1,
          strokeColor: "#ffffff",
          strokeWeight: 2,
        },
      });
      marker.addListener("click", () => {
        setActiveId(l.id);
        if (infoRef.current && mapRef.current) {
          infoRef.current.setContent(
            `<div style="max-width:240px;font-family:inherit">
              <img src="${l.image}" alt="${l.name}" style="width:100%;height:120px;object-fit:cover;border-radius:4px;margin-bottom:8px" />
              <div style="font-weight:600;font-size:13px;margin-bottom:2px">${l.name}</div>
              <div style="font-size:12px;color:#666">${l.city}, ${l.state} • ${l.units} Units</div>
              <div style="font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.05em;margin-top:6px">${STATUS_LABEL[l.status]}</div>
            </div>`,
          );
          infoRef.current.open({ map: mapRef.current, anchor: marker });
        }
      });
      markersRef.current.push(marker);
      bounds.extend({ lat: l.lat, lng: l.lng });
    });

    if (listings.length === 1) {
      mapRef.current.setCenter({ lat: listings[0].lat, lng: listings[0].lng });
      mapRef.current.setZoom(8);
    } else if (listings.length > 1) {
      mapRef.current.fitBounds(bounds, 64);
    }
  }, [listings]);

  const active = listings.find((l) => l.id === activeId) ?? null;

  return (
    <div className={`relative w-full ${height} rounded-[12px] outline-1 -outline-offset-1 outline-foreground/5 overflow-hidden bg-surface-muted`}>
      <div ref={containerRef} className="absolute inset-0" />

      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 items-center justify-between pointer-events-none">
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
        {active && (
          <span
            className={`hidden md:inline-flex pointer-events-auto items-center gap-2 text-[10px] uppercase tracking-wider px-2 py-1 rounded ring-1 ring-inset ${STATUS_CHIP[active.status]}`}
          >
            {active.name}
          </span>
        )}
      </div>
    </div>
  );
}