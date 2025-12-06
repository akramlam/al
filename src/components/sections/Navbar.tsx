'use client';

/**
 * Navbar Component - ALJ Studio Creative
 * Brand Book 2025 Compliant
 *
 * Sticky navigation with scroll progress indicator
 * Features: glassmorphism, mobile menu, brand CTA button
 */

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { navbarScroll } from '@/lib/animations';

// Navigation items
const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Processus', href: '#process' },
  { label: 'Créateurs', href: '#creators' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking nav items
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial="top"
        animate={isScrolled ? 'scrolled' : 'top'}
        variants={navbarScroll}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-midnight-navy/80 backdrop-blur-xl border-b border-soft-steel-blue/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container-site">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-display font-black text-white flex items-center gap-2"
            >
              ALJ <span className="text-saffron-orange">Creative</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-heading text-base text-brand-off-white hover:text-saffron-orange transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-saffron-orange to-amber group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button
                variant="primary"
                size="md"
                onClick={() => window.open('#contact', '_self')}
              >
                Réserver un appel
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center relative z-50"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-brand-off-white block transition-all"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-brand-off-white block transition-all"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-brand-off-white block transition-all"
              />
            </motion.button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron-orange via-amber to-royal-blue origin-left"
          style={{ scaleX }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        variants={{
          open: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            },
          },
          closed: {
            opacity: 0,
            x: '100%',
            transition: {
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        }}
        className="fixed inset-0 z-40 lg:hidden"
      >
        {/* Backdrop */}
        <motion.div
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 0 },
          }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Menu Panel */}
        <motion.div
          variants={{
            open: { x: 0 },
            closed: { x: '100%' },
          }}
          className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-midnight-navy border-l border-soft-steel-blue/20 shadow-2xl"
        >
          <div className="flex flex-col h-full pt-24 px-8 pb-8">
            {/* Navigation Items */}
            <nav className="flex flex-col gap-6 mb-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="font-heading text-2xl text-brand-off-white hover:text-saffron-orange transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: navItems.length * 0.1 }}
            >
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => {
                  window.open('#contact', '_self');
                  setIsMobileMenuOpen(false);
                }}
              >
                Réserver un appel
              </Button>
            </motion.div>

            {/* Social Links (Optional) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isMobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: (navItems.length + 1) * 0.1 }}
              className="mt-auto pt-8 border-t border-soft-steel-blue/20"
            >
              <p className="text-sm text-brand-grey text-center font-body">
                © 2025 ALJ Creative Studio
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
