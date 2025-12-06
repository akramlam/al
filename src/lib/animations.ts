/**
 * ALJ Studio Creative - Animation Library
 * Brand Book 2025 - Cinematic Animation System
 *
 * Framer Motion variants for consistent, brand-aligned animations
 * Personality: Bold, purposeful, cinematic
 */

import { Variants } from 'framer-motion';

/**
 * EASING CURVES
 * Following brand personality: bold and purposeful movement
 */
export const easings = {
  cinematic: [0.16, 1, 0.3, 1], // Brand signature easing
  smooth: [0.4, 0, 0.2, 1],
  fast: [0.4, 0, 1, 1],
  slow: [0, 0, 0.2, 1],
} as const;

/**
 * TIMING CONSTANTS
 * Synced with design-tokens.css transition values
 */
export const timings = {
  fast: 0.15,
  smooth: 0.3,
  cinematic: 0.6,
  slow: 1.0,
} as const;

/**
 * ENTRANCE ANIMATIONS
 * For initial page load and scroll-triggered reveals
 */

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: timings.cinematic,
      ease: easings.cinematic,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: timings.cinematic,
      ease: easings.cinematic,
    },
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: timings.cinematic,
      ease: easings.cinematic,
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: timings.cinematic,
      ease: easings.cinematic,
    },
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: timings.cinematic,
      ease: easings.cinematic,
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: timings.cinematic,
      ease: easings.cinematic,
    },
  },
};

export const scaleInBounce: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: timings.slow,
      ease: [0.34, 1.56, 0.64, 1], // Bounce effect
    },
  },
};

/**
 * STAGGER ANIMATIONS
 * For sequential reveals of lists/grids
 */

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: timings.cinematic,
      ease: easings.cinematic,
    },
  },
};

/**
 * HOVER ANIMATIONS
 * For interactive elements (buttons, cards, links)
 */

export const hoverLift = {
  rest: {
    y: 0,
    transition: {
      duration: timings.smooth,
      ease: easings.smooth,
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: timings.smooth,
      ease: easings.smooth,
    },
  },
};

export const hoverScale = {
  rest: {
    scale: 1,
    transition: {
      duration: timings.smooth,
      ease: easings.smooth,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: timings.smooth,
      ease: easings.smooth,
    },
  },
};

export const hoverScaleLarge = {
  rest: {
    scale: 1,
    transition: {
      duration: timings.smooth,
      ease: easings.smooth,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: timings.smooth,
      ease: easings.smooth,
    },
  },
};

export const hoverGlow = {
  rest: {
    boxShadow: '0 0 24px rgba(241, 135, 1, 0.3)',
    transition: {
      duration: timings.smooth,
      ease: easings.smooth,
    },
  },
  hover: {
    boxShadow: '0 0 48px rgba(241, 135, 1, 0.5)',
    transition: {
      duration: timings.smooth,
      ease: easings.smooth,
    },
  },
};

export const hoverShine = {
  rest: {
    backgroundPosition: '-200% center',
  },
  hover: {
    backgroundPosition: '200% center',
    transition: {
      duration: 1.5,
      ease: 'linear',
    },
  },
};

/**
 * TAP/PRESS ANIMATIONS
 * For button press feedback
 */

export const tapScale = {
  scale: 0.95,
  transition: {
    duration: timings.fast,
    ease: easings.fast,
  },
};

export const tapScaleSmall = {
  scale: 0.98,
  transition: {
    duration: timings.fast,
    ease: easings.fast,
  },
};

/**
 * MODAL/OVERLAY ANIMATIONS
 */

export const modalBackdrop: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: timings.smooth,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: timings.smooth,
      ease: easings.smooth,
    },
  },
};

export const modalContent: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: timings.cinematic,
      ease: easings.cinematic,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: {
      duration: timings.smooth,
      ease: easings.smooth,
    },
  },
};

/**
 * SCROLL ANIMATIONS
 * For parallax and scroll-triggered effects
 */

export const parallaxSlow = {
  initial: { y: 0 },
  animate: (scrollY: number) => ({
    y: scrollY * 0.2,
  }),
};

export const parallaxMedium = {
  initial: { y: 0 },
  animate: (scrollY: number) => ({
    y: scrollY * 0.5,
  }),
};

export const parallaxFast = {
  initial: { y: 0 },
  animate: (scrollY: number) => ({
    y: scrollY * 0.8,
  }),
};

/**
 * PAGE TRANSITIONS
 * For route changes (if needed)
 */

export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: timings.cinematic,
      ease: easings.cinematic,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: timings.smooth,
      ease: easings.smooth,
    },
  },
};

/**
 * LOADING ANIMATIONS
 */

export const pulseGlow: Variants = {
  initial: {
    opacity: 0.4,
  },
  animate: {
    opacity: [0.4, 0.8, 0.4],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const spinSlow = {
  animate: {
    rotate: 360,
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const float: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-20, 0, -20],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/**
 * UTILITY FUNCTIONS
 */

/**
 * Create a custom stagger container with configurable timing
 */
export const createStaggerContainer = (
  staggerDelay: number = 0.1,
  delayChildren: number = 0.2
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

/**
 * Create a custom entrance animation with configurable distance
 */
export const createFadeInUp = (distance: number = 60, duration: number = timings.cinematic): Variants => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: easings.cinematic,
    },
  },
});

/**
 * Create a custom scale animation
 */
export const createScaleIn = (initialScale: number = 0.8, duration: number = timings.cinematic): Variants => ({
  hidden: {
    opacity: 0,
    scale: initialScale,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      ease: easings.cinematic,
    },
  },
});

/**
 * PRESET COMBINATIONS
 * Common animation patterns
 */

// Hero section entrance
export const heroPreset: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: timings.slow,
      ease: easings.cinematic,
    },
  },
};

// Card reveal (stagger child)
export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: timings.cinematic,
      ease: easings.cinematic,
    },
  },
};

// Navbar scroll
export const navbarScroll: Variants = {
  top: {
    backgroundColor: 'rgba(10, 48, 112, 0)',
    backdropFilter: 'blur(0px)',
    transition: {
      duration: timings.smooth,
      ease: easings.smooth,
    },
  },
  scrolled: {
    backgroundColor: 'rgba(10, 48, 112, 0.8)',
    backdropFilter: 'blur(20px)',
    transition: {
      duration: timings.smooth,
      ease: easings.smooth,
    },
  },
};

// Button interaction preset
export const buttonPreset = {
  rest: {
    scale: 1,
    boxShadow: '0 0 24px rgba(241, 135, 1, 0.3)',
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 0 48px rgba(241, 135, 1, 0.5)',
    transition: {
      duration: timings.smooth,
      ease: easings.smooth,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: timings.fast,
      ease: easings.fast,
    },
  },
};

export default {
  // Entrance
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  scaleInBounce,

  // Stagger
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
  staggerItem,

  // Hover
  hoverLift,
  hoverScale,
  hoverScaleLarge,
  hoverGlow,
  hoverShine,

  // Tap
  tapScale,
  tapScaleSmall,

  // Modal
  modalBackdrop,
  modalContent,

  // Scroll
  parallaxSlow,
  parallaxMedium,
  parallaxFast,

  // Page
  pageTransition,

  // Loading
  pulseGlow,
  spinSlow,
  float,

  // Presets
  heroPreset,
  cardReveal,
  navbarScroll,
  buttonPreset,

  // Utilities
  easings,
  timings,
  createStaggerContainer,
  createFadeInUp,
  createScaleIn,
};
