import { cn } from "@/lib/utils";
import React from "react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  options: { label: string; value: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ className, error, options, ...props }, ref) => {
  return (
    <div className="w-full">
      <select
        ref={ref}
        className={cn(
          "w-full px-4 sm:px-6 py-3 min-h-[3.5rem] rounded-2xl border border-neutral-300 bg-white text-neutral-900 focus:outline-none focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/20 transition-all duration-300 appearance-none",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 1rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
        {...props}
      >
        <option value="" disabled selected hidden>Selecione uma opção</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <p className="mt-1.5 text-sm text-red-500 px-2">{error}</p>}
    </div>
  );
});
Select.displayName = "Select";
