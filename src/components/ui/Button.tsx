'use client';

/**
 * Button Component - ALJ Studio Creative
 * Brand Book 2025 Compliant
 *
 * Unified button component replacing all button implementations
 * Supports: primary, secondary, outline, ghost, link variants
 */

import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { buttonPreset } from '@/lib/animations';
import { cn } from '@/lib/utils';

// ============================================================================
// TYPES
// ============================================================================

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'size'> {
  /** Button visual style variant */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Show loading spinner */
  loading?: boolean;
  /** Icon to display before text */
  iconLeft?: React.ReactNode;
  /** Icon to display after text */
  iconRight?: React.ReactNode;
  /** Full width button */
  fullWidth?: boolean;
  /** Children content */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

// ============================================================================
// STYLES
// ============================================================================

const baseStyles = `
  inline-flex items-center justify-center gap-2
  font-heading font-semibold
  rounded-xl
  transition-all duration-300
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-orange focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-navy
  disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
  relative overflow-hidden
`;

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-gradient-to-r from-saffron-orange to-amber
    text-brand-black
    shadow-glow-orange
    hover:shadow-glow-orange-lg
    active:shadow-glow-orange
  `,
  secondary: `
    bg-gradient-to-r from-royal-blue to-midnight-navy
    text-brand-off-white
    shadow-glow-blue
    hover:shadow-glow-blue-lg
    active:shadow-glow-blue
  `,
  outline: `
    bg-transparent
    text-brand-off-white
    border-2 border-saffron-orange
    hover:bg-saffron-orange/10
    hover:border-amber
    active:bg-saffron-orange/20
  `,
  ghost: `
    bg-transparent
    text-brand-off-white
    hover:bg-white/10
    active:bg-white/20
  `,
  link: `
    bg-transparent
    text-saffron-orange
    underline-offset-4
    hover:underline
    hover:text-amber
    active:text-saffron-orange
    shadow-none
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm min-h-[36px]',
  md: 'px-6 py-3 text-base min-h-[44px]',
  lg: 'px-8 py-4 text-lg min-h-[52px]',
  xl: 'px-10 py-5 text-xl min-h-[60px]',
};

// ============================================================================
// COMPONENT
// ============================================================================

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      iconLeft,
      iconRight,
      fullWidth = false,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <motion.button
        ref={ref}
        disabled={isDisabled}
        initial="rest"
        whileHover={!isDisabled ? 'hover' : undefined}
        whileTap={!isDisabled ? 'tap' : undefined}
        variants={variant === 'link' ? undefined : buttonPreset}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {/* Loading Spinner */}
        {loading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-inherit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Spinner size={size} variant={variant} />
          </motion.div>
        )}

        {/* Content - Hidden when loading */}
        <span
          className={cn(
            'inline-flex items-center justify-center gap-2',
            loading && 'invisible'
          )}
        >
          {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
          {children}
          {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
        </span>

        {/* Shine effect on hover (primary & secondary only) */}
        {(variant === 'primary' || variant === 'secondary') && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-200%' }}
            whileHover={{ x: '200%' }}
            transition={{ duration: 1.5, ease: 'linear' }}
            style={{ pointerEvents: 'none' }}
          />
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

// ============================================================================
// LOADING SPINNER COMPONENT
// ============================================================================

interface SpinnerProps {
  size: ButtonSize;
  variant: ButtonVariant;
}

const Spinner: React.FC<SpinnerProps> = ({ size, variant }) => {
  const spinnerSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
  };

  const spinnerColors = {
    primary: 'border-brand-black',
    secondary: 'border-brand-off-white',
    outline: 'border-saffron-orange',
    ghost: 'border-brand-off-white',
    link: 'border-saffron-orange',
  };

  return (
    <motion.div
      className={cn(
        'border-2 border-t-transparent rounded-full',
        spinnerSizes[size],
        spinnerColors[variant]
      )}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

// ============================================================================
// EXPORTS
// ============================================================================

export default Button;
