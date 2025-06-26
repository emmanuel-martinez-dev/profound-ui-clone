import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          // Variants
          {
            "bg-surface border border-border text-text-secondary hover:bg-surface-elevated hover:text-text-primary": variant === "default",
            "bg-info text-white border border-info hover:bg-info/90": variant === "primary",
            "bg-transparent hover:bg-surface-elevated text-text-secondary hover:text-text-primary": variant === "ghost",
          },
          // Sizes
          {
            "h-8 px-3 text-xs": size === "sm",
            "h-9 px-4 text-sm": size === "md",
            "h-10 px-6 text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button } 