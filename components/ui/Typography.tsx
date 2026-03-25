import { cn } from "@/lib/utils";
import React from "react";

export function H1({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn("text-h1 font-bold leading-tight tracking-tight text-primary-600", className)} {...props}>
      {children}
    </h1>
  );
}

export function H2({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn("text-h2 font-semibold leading-tight tracking-tight text-primary-500", className)} {...props}>
      {children}
    </h2>
  );
}

export function Text({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-base md:text-lg lg:text-xl text-neutral-600 leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}
