'use client';

/**
 * Card Component - ALJ Studio Creative
 * Brand Book 2025 Compliant
 *
 * Molecule component for content cards
 * Supports glassmorphism and cinematic hover effects
 */

import React from 'react';
import Image from 'next/image';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cardReveal } from '@/lib/animations';
import { cn } from '@/lib/utils';

// ============================================================================
// TYPES
// ============================================================================

export type CardVariant = 'glass' | 'glass-strong' | 'glass-subtle' | 'solid' | 'outline';

export interface CardProps extends HTMLMotionProps<'div'> {
  /** Visual variant of the card */
  variant?: CardVariant;
  /** Enable hover lift effect */
  hoverable?: boolean;
  /** Enable entrance animation */
  animated?: boolean;
  /** Children content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export interface CardSubComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Children content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

// ============================================================================
// STYLES
// ============================================================================

const baseStyles = `
  rounded-2xl
  transition-all duration-300
  relative overflow-hidden
  flex flex-col
`;

const variantStyles: Record<CardVariant, string> = {
  glass: `
    glass
    shadow-card
    hover:shadow-glow-orange
  `,
  'glass-strong': `
    glass-strong
    shadow-card
    hover:shadow-glow-orange
  `,
  'glass-subtle': `
    glass-subtle
    shadow-lg
    hover:shadow-glow-orange
  `,
  solid: `
    bg-midnight-navy
    border border-soft-steel-blue/20
    shadow-card
    hover:border-saffron-orange/50
    hover:shadow-glow-orange
  `,
  outline: `
    bg-transparent
    border-2 border-soft-steel-blue/30
    hover:border-saffron-orange
    hover:shadow-glow-orange
  `,
};

// ============================================================================
// MAIN CARD COMPONENT
// ============================================================================

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'glass',
      hoverable = true,
      animated = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        variants={animated ? cardReveal : undefined}
        initial={animated ? 'hidden' : undefined}
        whileInView={animated ? 'visible' : undefined}
        viewport={animated ? { once: true, margin: '-100px' } : undefined}
        whileHover={hoverable ? { y: -8 } : undefined}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          baseStyles,
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {/* Gradient overlay on hover */}
        {variant !== 'outline' && (
          <div className="absolute inset-0 bg-gradient-to-br from-saffron-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        )}

        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

export const CardHeader: React.FC<CardSubComponentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 p-6 pb-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

CardHeader.displayName = 'CardHeader';

export const CardTitle: React.FC<CardSubComponentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h3
      className={cn(
        'font-heading text-xl font-semibold text-brand-off-white leading-tight',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

CardTitle.displayName = 'CardTitle';

export const CardDescription: React.FC<CardSubComponentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        'font-body text-sm text-brand-grey leading-relaxed',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

CardDescription.displayName = 'CardDescription';

export const CardContent: React.FC<CardSubComponentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'px-6 py-4 flex-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

CardContent.displayName = 'CardContent';

export const CardFooter: React.FC<CardSubComponentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex items-center gap-4 p-6 pt-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

CardFooter.displayName = 'CardFooter';

export const CardImage: React.FC<CardSubComponentProps & { src?: string; alt?: string }> = ({
  children,
  className,
  src,
  alt = '',
  ...props
}) => {
  return (
    <div
      className={cn(
        'relative aspect-video w-full overflow-hidden rounded-t-2xl',
        className
      )}
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        children
      )}
    </div>
  );
};

CardImage.displayName = 'CardImage';

export const CardAction: React.FC<CardSubComponentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex items-center gap-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

CardAction.displayName = 'CardAction';

// ============================================================================
// EXPORTS
// ============================================================================

export default Card;
