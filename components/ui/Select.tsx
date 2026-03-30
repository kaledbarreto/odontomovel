import { cn } from "@/lib/utils";
import React from "react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  label?: string;
  options: { label: string; value: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ className, error, label, id, options, ...props }, ref) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-grafite">
          {label}
        </label>
      )}
      <select
        id={inputId}
        ref={ref}
        className={cn(
          "w-full px-4 py-3 rounded-xl border text-grafite text-base transition-all duration-200 appearance-none bg-white",
          "focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500",
          error ? "border-danger" : "border-bordercolor hover:border-primary-300",
          className
        )}
        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 1rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
        {...props}
      >
        <option value="" disabled hidden>Selecione uma opção</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <p className="text-xs text-danger font-medium">{error}</p>}
    </div>
  );
});
Select.displayName = "Select";
