"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhotoSlotProps {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  dark?: boolean;
  objectPosition?: string;
}

export function PhotoSlot({
  src,
  alt = "",
  label,
  className,
  dark = false,
  objectPosition = "center",
}: PhotoSlotProps) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden rounded-2xl", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={{ objectPosition }}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl flex flex-col items-center justify-center gap-2",
        dark
          ? "bg-white/5 border border-white/10 border-dashed"
          : "bg-gray-100 border-2 border-dashed border-gray-200",
        className
      )}
    >
      <Camera
        className={cn("w-7 h-7", dark ? "text-white/20" : "text-gray-300")}
      />
      {label && (
        <span
          className={cn(
            "text-[11px] font-medium text-center px-4 leading-tight",
            dark ? "text-white/20" : "text-gray-400"
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
