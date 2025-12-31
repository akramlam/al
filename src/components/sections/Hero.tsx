'use client';

/**
 * Hero Section - ALJ Studio Creative
 * Brand Book 2025 - Bold, Modern, Out of the Box Design
 */

import { motion } from 'framer-motion';
import { brandStats } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-royal-blue overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Large Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[40vw] font-display font-black text-white leading-none whitespace-nowrap">
          ALJ
        </span>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-midnight-navy/50 to-transparent" />

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex">
        {/* Left Side - Main Content */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-32">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-saffron-orange font-display font-bold text-sm md:text-base tracking-[0.3em] uppercase">
              Brandbook & Identity 2025
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-display font-black text-white leading-[0.85] tracking-tight">
              ALJ
              <br />
              <span className="text-brand-off-white/90">STUDIO</span>
              <br />
              <span className="text-brand-off-white/80">CREATIVE</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-soft-steel-blue max-w-2xl leading-relaxed mb-12 font-body"
          >
            <span className="text-white font-semibold">Built for brands</span> that want to stand out with intention.{' '}
            <span className="text-saffron-orange font-semibold">Strong visuals</span>,{' '}
            <span className="text-amber font-semibold">bold creativity</span>, and{' '}
            <span className="text-white font-semibold">strategic thinking</span> come together to create content that inspires trust and drives action.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-saffron-orange text-midnight-navy font-display font-bold text-lg rounded-none hover:bg-amber transition-colors"
            >
              Let&apos;s Work Together
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-display font-bold text-lg rounded-none hover:bg-white/10 transition-colors"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Right Side - Stats & Visual */}
        <div className="hidden lg:flex flex-col justify-end items-end w-1/3 p-12">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col gap-8 mb-12"
          >
            {brandStats.map((stat, index) => (
              <div key={index} className="text-right">
                <div className="text-5xl md:text-6xl font-display font-black text-white">
                  {stat.number}
                </div>
                <div className="text-sm uppercase tracking-wider text-saffron-orange font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="lg:hidden px-6 pb-20"
      >
        <div className="flex flex-wrap justify-center gap-8">
          {brandStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-display font-black text-white">
                {stat.number}
              </div>
              <div className="text-xs uppercase tracking-wider text-saffron-orange font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 lg:px-20 py-6 border-t border-white/10"
      >
        <span className="text-sm text-white/60 font-body">ALJCREATIVESTUDIO.COM</span>
        <motion.a
          href="#about"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-sm font-body">Scroll to explore</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
