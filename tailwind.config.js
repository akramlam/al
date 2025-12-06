/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors from ALJ Studio Creative Brand Book 2025
        'midnight-navy': '#0A3070',
        'royal-blue': '#0344AA',
        'saffron-orange': '#F18701',
        'amber': '#F7B801',
        'soft-steel-blue': '#B1C7D6',
        'brand-black': '#000000',
        'brand-grey': '#D8D8D8',
        'brand-off-white': '#F7F8FB',

        // Semantic color mappings
        primary: {
          DEFAULT: '#0344AA', // royal-blue
          dark: '#0A3070',    // midnight-navy
          light: '#B1C7D6',   // soft-steel-blue
        },
        accent: {
          DEFAULT: '#F18701', // saffron-orange
          light: '#F7B801',   // amber
        },
        background: {
          DEFAULT: '#0A3070', // midnight-navy
          dark: '#000000',    // brand-black
        },
      },
      fontFamily: {
        // Brand fonts from Brand Book
        primary: ['var(--font-primary)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'Pragmatica', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'Gotham', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Montserrat', 'system-ui', 'sans-serif'],
        // Keep mono for code
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        // Cinematic animations for brand personality
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left': 'slideLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right': 'slideRight 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(60px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-60px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        // Cinematic glow shadows from brand book
        'glow-orange': '0 0 24px rgba(241, 135, 1, 0.3)',
        'glow-orange-lg': '0 0 32px rgba(241, 135, 1, 0.4)',
        'glow-orange-xl': '0 0 48px rgba(241, 135, 1, 0.5)',
        'glow-blue': '0 0 24px rgba(3, 68, 170, 0.3)',
        'glow-blue-lg': '0 0 32px rgba(3, 68, 170, 0.4)',
        'glow-blue-xl': '0 0 48px rgba(3, 68, 170, 0.5)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
