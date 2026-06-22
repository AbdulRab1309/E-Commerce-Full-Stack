import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "block";
}

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
  block: "w-full px-6 py-5 text-base",
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-foreground text-background hover-invert",
  outline: "bg-transparent text-foreground border-2 border-border hover-invert",
  ghost: "bg-transparent text-foreground hover:opacity-50",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-black uppercase tracking-widest transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed",
          sizes[size],
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
