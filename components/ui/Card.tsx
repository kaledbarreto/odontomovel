import { cn } from "@/lib/utils";
import React from "react";

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("bg-white p-8 rounded-2xl shadow-card hover:shadow-elevated border border-bordercolor hover:scale-[1.02] active:scale-[0.98] transition-all duration-300", className)}
      {...props}
    >
      {children}
    </div>
  );
}
