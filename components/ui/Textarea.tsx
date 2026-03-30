import { cn } from "@/lib/utils";
import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, id, rows = 4, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-grafite">
            {label}
          </label>
        )}
        <textarea
          id={inputId}
          ref={ref}
          rows={rows}
          className={cn(
            "w-full px-4 py-3 rounded-xl border text-grafite placeholder:text-grayui text-base transition-all duration-200 resize-none",
            "bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500",
            error ? "border-danger" : "border-bordercolor hover:border-primary-300",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-danger font-medium">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
