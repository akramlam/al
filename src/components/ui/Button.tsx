import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[#00AEEF] to-[#0098d4] text-white shadow-lg hover:shadow-xl hover:shadow-[#00AEEF]/25 hover:scale-105 active:scale-95 rounded-xl border border-[#00AEEF]/20",
        destructive:
          "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg hover:shadow-xl hover:shadow-red-500/25 hover:scale-105 active:scale-95 rounded-xl",
        outline:
          "border-2 border-[#00AEEF]/40 bg-transparent text-[#00AEEF] hover:bg-[#00AEEF]/10 hover:border-[#00AEEF]/60 hover:shadow-lg hover:shadow-[#00AEEF]/20 rounded-xl backdrop-blur-sm",
        secondary:
          "bg-gradient-to-r from-slate-700 to-slate-800 text-white border border-slate-600/50 hover:from-slate-600 hover:to-slate-700 hover:shadow-lg rounded-xl",
        ghost: "hover:bg-[#00AEEF]/10 hover:text-[#00AEEF] rounded-xl",
        link: "text-[#00AEEF] underline-offset-4 hover:underline",
        premium: "bg-gradient-to-r from-[#00AEEF] via-cyan-500 to-blue-600 text-white shadow-2xl hover:shadow-[#00AEEF]/40 hover:scale-105 active:scale-95 rounded-2xl border border-cyan-400/30",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 rounded-xl shadow-xl",
      },
      size: {
        default: "h-11 px-6 py-2 text-sm",
        sm: "h-9 px-4 text-sm rounded-lg",
        lg: "h-14 px-8 py-3 text-lg rounded-xl",
        xl: "h-16 px-12 py-4 text-xl rounded-2xl",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {(variant === 'premium' || variant === 'default') && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        )}
        <span className="relative z-10">{children}</span>
      </Comp>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
