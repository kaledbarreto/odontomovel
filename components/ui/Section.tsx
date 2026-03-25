import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(({ className, children, id, ...props }, ref) => {
  return (
    <section 
      id={id} 
      ref={ref}
      className={cn("min-h-screen py-20 xl:py-36 flex items-center relative overflow-hidden", className)} 
      {...props}
    >
      {children}
    </section>
  );
});
Section.displayName = "Section";
