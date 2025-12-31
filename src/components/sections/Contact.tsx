'use client';

/**
 * Contact CTA Section - ALJ Studio Creative
 * Brand Book 2025 - Let's Work Together
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative bg-royal-blue overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[20vw] font-display font-black text-white/[0.03] leading-none whitespace-nowrap">
          CONTACT
        </span>
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-32 lg:py-48">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white leading-[0.85] tracking-tight mb-6">
              LET&apos;S WORK
              <br />
              <span className="text-brand-off-white/80">TOGETHER</span>
            </h2>
            <p className="text-xl md:text-2xl text-soft-steel-blue max-w-2xl mx-auto font-body">
              Ready to create something extraordinary? Let&apos;s discuss your project and bring your vision to life.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12"
          >
            <a
              href="https://www.aljcreativestudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white font-display font-bold text-lg uppercase tracking-wider transition-colors"
            >
              WWW.ALJCREATIVESTUDIO.COM
            </a>
            <span className="hidden md:block w-px h-6 bg-white/30" />
            <a
              href="https://instagram.com/aljcreativestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white font-display font-bold text-lg uppercase tracking-wider transition-colors"
            >
              @ALJCREATIVESTUDIO
            </a>
            <span className="hidden md:block w-px h-6 bg-white/30" />
            <a
              href="mailto:contact@aljcreativestudio.com"
              className="text-white/70 hover:text-white font-display font-bold text-lg uppercase tracking-wider transition-colors"
            >
              CONTACT@ALJCREATIVESTUDIO.COM
            </a>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <a
              href="mailto:contact@aljcreativestudio.com"
              className="group inline-flex items-center gap-4 px-12 py-6 bg-saffron-orange text-midnight-navy font-display font-black text-xl uppercase tracking-wide hover:bg-amber transition-colors"
            >
              Get in Touch
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://instagram.com/aljcreativestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-royal-blue transition-all"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/company/aljcreativestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-royal-blue transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a
              href="https://tiktok.com/@aljcreativestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-royal-blue transition-all"
              aria-label="TikTok"
            >
              <FaTiktok className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Logo at Bottom */}
      <div className="relative z-10 flex justify-center pb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="flex items-baseline gap-1 text-white font-display font-black text-3xl mb-2">
            <span>A</span>
            <span className="text-2xl relative -top-0.5">L</span>
            <span>J</span>
            <span className="text-xl ml-2 font-semibold">creative</span>
          </div>
          <span className="text-xl text-white/60 font-display">studio</span>
        </motion.div>
      </div>
    </section>
  );
}
