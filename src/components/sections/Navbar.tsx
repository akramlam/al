'use client';

/**
 * Navbar Component - ALJ Studio Creative
 * Brand Book 2025 - Clean, Modern Navigation
 */

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Vision', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-midnight-navy/95 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between py-5">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-baseline gap-0.5 font-display font-black"
            >
              <span className="text-2xl text-white">A</span>
              <span className="text-xl text-white relative -top-0.5">L</span>
              <span className="text-2xl text-white">J</span>
              <span className="text-sm ml-1 text-saffron-orange font-semibold uppercase tracking-wider">
                creative studio
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-display text-sm text-white/70 hover:text-white uppercase tracking-wider transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-saffron-orange text-midnight-navy font-display font-bold text-sm uppercase tracking-wide hover:bg-amber transition-colors"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 w-10 h-10 items-center justify-center"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white block"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-white block"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white block"
              />
            </motion.button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-saffron-orange via-amber to-royal-blue origin-left"
          style={{ scaleX }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, pointerEvents: 'auto' as const },
          closed: { opacity: 0, pointerEvents: 'none' as const },
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
          className="absolute inset-0 bg-midnight-navy/95 backdrop-blur-xl"
        />

        {/* Menu Content */}
        <motion.div
          variants={{
            open: { x: 0 },
            closed: { x: '100%' },
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-midnight-navy"
        >
          <div className="flex flex-col h-full pt-28 px-8 pb-8">
            {/* Navigation Items */}
            <nav className="flex flex-col gap-1 mb-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ delay: index * 0.1 }}
                  className="py-4 font-display text-3xl text-white hover:text-saffron-orange transition-colors border-b border-white/10"
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
              <a
                href="#contact"
                onClick={handleNavClick}
                className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-saffron-orange text-midnight-navy font-display font-bold text-lg uppercase tracking-wide"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isMobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: (navItems.length + 1) * 0.1 }}
              className="mt-auto pt-8 border-t border-white/10"
            >
              <p className="text-sm text-white/40 text-center font-body">
                ALJCREATIVESTUDIO.COM
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
