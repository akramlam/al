import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LiquidGlassButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  glowColor?: string
  intensity?: 'low' | 'medium' | 'high'
  onClick?: () => void
  disabled?: boolean
}

const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  glowColor = '#00AEEF',
  intensity = 'medium',
  onClick,
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const sizeClasses = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
    xl: 'h-16 px-12 text-xl',
  }

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-[${glowColor}]/20 via-[${glowColor}]/10 to-[${glowColor}]/20
      border border-[${glowColor}]/30
      text-white
      shadow-lg shadow-[${glowColor}]/25
    `,
    secondary: `
      bg-gradient-to-r from-slate-800/40 via-slate-700/20 to-slate-800/40
      border border-slate-600/50
      text-slate-200
      shadow-lg shadow-slate-900/50
    `,
    outline: `
      bg-transparent
      border-2 border-[${glowColor}]/40
      text-[${glowColor}]
      shadow-lg shadow-[${glowColor}]/20
    `,
    ghost: `
      bg-white/5
      border border-white/10
      text-white/90
      shadow-lg shadow-black/20
    `,
  }

  const intensityClasses = {
    low: 'backdrop-blur-sm',
    medium: 'backdrop-blur-md',
    high: 'backdrop-blur-lg',
  }

  return (
    <motion.button
      className={cn(
        // Base styles
        "relative overflow-hidden rounded-2xl font-semibold transition-all duration-500 group",
        "before:absolute before:inset-0 before:rounded-2xl before:p-[1px]",
        "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        "before:opacity-0 before:transition-opacity before:duration-500",
        // Glass morphism
        intensityClasses[intensity],
        // Size
        sizeClasses[size],
        // Variant (simplified for cn compatibility)
        variant === 'primary' && `bg-gradient-to-r from-[#00AEEF]/20 via-[#00AEEF]/10 to-[#00AEEF]/20 border border-[#00AEEF]/30 text-white shadow-lg shadow-[#00AEEF]/25`,
        variant === 'secondary' && `bg-gradient-to-r from-slate-800/40 via-slate-700/20 to-slate-800/40 border border-slate-600/50 text-slate-200 shadow-lg shadow-slate-900/50`,
        variant === 'outline' && `bg-transparent border-2 border-[#00AEEF]/40 text-[#00AEEF] shadow-lg shadow-[#00AEEF]/20`,
        variant === 'ghost' && `bg-white/5 border border-white/10 text-white/90 shadow-lg shadow-black/20`,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {/* Liquid background effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}15, transparent 40%)`,
        }}
      />

      {/* Glass reflection effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ rotate: -45, scale: 0 }}
        animate={isHovered ? { rotate: -45, scale: 1 } : { rotate: -45, scale: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full opacity-0 group-hover:opacity-100"
        animate={isHovered ? { x: "200%" } : { x: "-100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Liquid border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          boxShadow: `0 0 20px ${glowColor}40, 0 0 40px ${glowColor}20, 0 0 60px ${glowColor}10`,
          filter: 'blur(1px)',
        }}
      />

      {/* Floating particles effect */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-60"
              style={{
                backgroundColor: glowColor,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, -30, -10],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Liquid ripple effect on click */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ scale: 0, opacity: 0.5 }}
        whileTap={{ scale: 4, opacity: 0 }}
        style={{
          background: `radial-gradient(circle, ${glowColor}40 0%, transparent 70%)`,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  )
}

export default LiquidGlassButton