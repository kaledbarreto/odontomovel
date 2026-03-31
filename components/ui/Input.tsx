import { cn } from "@/lib/utils";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-grafite">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-xl border text-grafite placeholder:text-grayui text-base transition-all duration-200",
            "bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500",
            error ? "border-danger" : "border-bordercolor hover:border-primary-300",
            className
          )}
          {...props}
        />
        {error && <p role="alert" className="text-xs text-danger font-medium">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
