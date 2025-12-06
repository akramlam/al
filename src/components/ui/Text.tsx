'use client';

/**
 * Text Component - ALJ Studio Creative
 * Brand Book 2025 Compliant
 *
 * Typography component for body text
 * Enforces brand text styling
 */

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

// ============================================================================
// TYPES
// ============================================================================

export type TextElement = 'p' | 'span' | 'div' | 'label' | 'li';
export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
export type TextWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
export type TextColor = 'primary' | 'secondary' | 'muted' | 'white' | 'accent';
export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export interface TextProps extends Omit<HTMLMotionProps<'p'>, 'as'> {
  /** HTML element to render */
  as?: TextElement;
  /** Text size */
  size?: TextSize;
  /** Font weight */
  weight?: TextWeight;
  /** Text color */
  color?: TextColor;
  /** Text alignment */
  align?: TextAlign;
  /** Apply text-pretty for better line breaks */
  pretty?: boolean;
  /** Children content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

// ============================================================================
// STYLES
// ============================================================================

const baseStyles = `
  font-body
  leading-relaxed
`;

const sizeStyles: Record<TextSize, string> = {
  xs: 'text-body-xs',    // 12px
  sm: 'text-body-sm',    // 14px
  base: 'text-body',     // 16px
  lg: 'text-body-lg',    // 18px
  xl: 'text-xl',         // 20px
};

const weightStyles: Record<TextWeight, string> = {
  light: 'font-light',       // 300
  regular: 'font-regular',   // 400
  medium: 'font-medium',     // 500
  semibold: 'font-semibold', // 600
  bold: 'font-bold',         // 700
};

const colorStyles: Record<TextColor, string> = {
  primary: 'text-brand-off-white',
  secondary: 'text-brand-grey',
  muted: 'text-soft-steel-blue',
  white: 'text-white',
  accent: 'text-saffron-orange',
};

const alignStyles: Record<TextAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

// ============================================================================
// COMPONENT
// ============================================================================

export const Text: React.FC<TextProps> = ({
  as = 'p',
  size = 'base',
  weight = 'regular',
  color = 'primary',
  align = 'left',
  pretty = false,
  children,
  className,
  ...props
}) => {
  const Component = motion[as] as React.ComponentType<HTMLMotionProps<'p'>>;

  return (
    <Component
      className={cn(
        baseStyles,
        sizeStyles[size],
        weightStyles[weight],
        colorStyles[color],
        alignStyles[align],
        pretty && 'text-no-orphan',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Text.displayName = 'Text';

export default Text;
