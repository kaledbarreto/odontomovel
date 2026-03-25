import { cn } from "@/lib/utils";
import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, error, ...props }, ref) => {
  return (
    <div className="w-full">
      <input
        ref={ref}
        className={cn(
          "w-full px-4 sm:px-6 py-3 min-h-[3.5rem] rounded-2xl border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/20 transition-all duration-300",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1.5 text-sm text-red-500 px-2">{error}</p>}
    </div>
  );
});
Input.displayName = "Input";
