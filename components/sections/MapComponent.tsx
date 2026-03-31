"use client";

export default function MapComponent() {
  return (
    <iframe
      src="https://maps.google.com/maps?q=-12.9714,-38.5014&z=6&output=embed&hl=pt-BR"
      className="w-full h-full min-h-[300px] border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Mapa de atuação do ITBSS"
    />
  );
}
