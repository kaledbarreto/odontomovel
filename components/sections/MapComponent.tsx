"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const missions: { position: [number, number]; label: string }[] = [
  { position: [-12.9714, -38.5014], label: "Salvador, Bahia" },
  { position: [-12.2667, -38.9667], label: "Feira de Santana, Bahia" },
  { position: [-14.8661, -39.0364], label: "Ilhéus, Bahia" },
];

export default function MapComponent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Fix default marker icons (must run client-side only)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });

    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full min-h-[300px] bg-neutral-100 animate-pulse rounded-3xl" />
    );
  }

  const center: [number, number] = [-12.9714, -38.5014];

  return (
    <MapContainer
      center={center}
      zoom={6}
      scrollWheelZoom={false}
      className="w-full h-full min-h-[300px] z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {missions.map(({ position, label }) => (
        <Marker key={label} position={position}>
          <Popup>{label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
