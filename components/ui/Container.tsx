import { cn } from "@/lib/utils";
import React from "react";

export function Container({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("container mx-auto px-4 max-w-7xl", className)} {...props}>
      {children}
    </div>
  );
}
