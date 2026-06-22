import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || props.name;
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-[10px] font-black uppercase tracking-widest mb-1 opacity-70"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn("stark-input", error && "border-accent", className)}
          {...props}
        />
        {error && (
          <p className="mt-1 uppercase text-xs font-bold text-accent">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || props.name;
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-[10px] font-black uppercase tracking-widest mb-1 opacity-70"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            "stark-input min-h-[100px] resize-y border-2 border-border p-3",
            error && "border-accent",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 uppercase text-xs font-bold text-accent">{error}</p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
