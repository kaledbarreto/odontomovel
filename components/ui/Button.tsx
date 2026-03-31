import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "green";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = "primary", size = "md", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 active:brightness-90 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500/50 shadow-lg hover:shadow-xl",
    secondary: "bg-primary-800 text-white hover:bg-primary-900 focus:ring-primary-800/50 shadow-lg hover:shadow-xl",
    outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500/50",
    ghost: "text-primary-500 hover:bg-primary-50 focus:ring-primary-500/50",
    green: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500/50 shadow-lg hover:shadow-xl",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base min-h-[3rem]",
    lg: "px-8 py-4 text-lg min-h-[3.5rem] md:min-h-[4rem]",
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
});
Button.displayName = "Button";
