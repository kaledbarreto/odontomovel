import { cn } from "@/lib/utils";
import React from "react";

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn("bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl ring-1 ring-inset ring-primary-200/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300", className)} 
      {...props}
    >
      {children}
    </div>
  );
}
