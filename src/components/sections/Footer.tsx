'use client';

/**
 * Footer Component - ALJ Studio Creative
 * Brand Book 2025 - Minimal Footer
 */

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-brand-off-white border-t border-midnight-navy/10">
      <div className="px-6 md:px-12 lg:px-20 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-midnight-navy/60 font-body">
            &copy; {new Date().getFullYear()} ALJ Creative Studio. All rights reserved.
          </p>

          {/* Brand Mark */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-baseline gap-0.5 font-display font-black"
          >
            <span className="text-lg text-midnight-navy">A</span>
            <span className="text-base text-midnight-navy relative -top-0.5">L</span>
            <span className="text-lg text-midnight-navy">J</span>
            <span className="text-xs ml-1 text-royal-blue font-semibold uppercase tracking-wider">
              creative studio
            </span>
          </motion.div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-midnight-navy/60 hover:text-midnight-navy transition-colors font-body"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-midnight-navy/60 hover:text-midnight-navy transition-colors font-body"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
