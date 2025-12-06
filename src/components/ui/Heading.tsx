'use client';

/**
 * Heading Component - ALJ Studio Creative
 * Brand Book 2025 Compliant
 *
 * Typography component for all headings
 * Enforces brand font hierarchy and styling
 */

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

// ============================================================================
// TYPES
// ============================================================================

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'display';
export type HeadingAlign = 'left' | 'center' | 'right';
export type HeadingVariant = 'default' | 'gradient' | 'gradient-blue' | 'gradient-orange';

export interface HeadingProps extends Omit<HTMLMotionProps<'h1'>, 'as'> {
  /** Semantic HTML heading level */
  as?: HeadingLevel;
  /** Visual variant (can differ from semantic level) */
  variant?: HeadingVariant;
  /** Text alignment */
  align?: HeadingAlign;
  /** Apply text balance for better typography */
  balance?: boolean;
  /** Children content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

// ============================================================================
// STYLES
// ============================================================================

const baseStyles = `
  font-display
  font-bold
  tracking-tight
`;

const levelStyles: Record<HeadingLevel, string> = {
  display: `
    text-display
    font-extrabold
    leading-none
    letter-spacing-tight
  `,
  h1: `
    text-h1
    font-bold
    leading-tight
    letter-spacing-tight
  `,
  h2: `
    text-h2
    font-heading
    font-semibold
    leading-snug
  `,
  h3: `
    text-h3
    font-heading
    font-semibold
    leading-snug
  `,
  h4: `
    text-h4
    font-heading
    font-medium
    leading-normal
  `,
  h5: `
    text-h5
    font-heading
    font-medium
    leading-normal
  `,
  h6: `
    text-h6
    font-heading
    font-medium
    leading-normal
  `,
};

const variantStyles: Record<HeadingVariant, string> = {
  default: 'text-brand-off-white',
  gradient: 'gradient-text',
  'gradient-blue': 'gradient-text-blue',
  'gradient-orange': 'gradient-text-orange',
};

const alignStyles: Record<HeadingAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

// ============================================================================
// COMPONENT
// ============================================================================

export const Heading: React.FC<HeadingProps> = ({
  as = 'h2',
  variant = 'default',
  align = 'left',
  balance = true,
  children,
  className,
  ...props
}) => {
  // Handle 'display' as h1 for semantic HTML
  const Component = (as === 'display' ? motion.h1 : motion[as]) as React.ComponentType<HTMLMotionProps<'h1'>>;

  return (
    <Component
      className={cn(
        baseStyles,
        levelStyles[as],
        variantStyles[variant],
        alignStyles[align],
        balance && 'text-balance',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Heading.displayName = 'Heading';

export default Heading;
