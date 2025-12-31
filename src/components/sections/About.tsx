'use client';

/**
 * About Section - ALJ Studio Creative
 * Brand Book 2025 - Brand Storytelling
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative bg-brand-off-white overflow-hidden" ref={ref}>
      {/* Large Section Number */}
      <div className="absolute top-20 right-10 lg:right-20 pointer-events-none select-none">
        <span className="text-[20vw] font-display font-black text-midnight-navy/[0.03] leading-none">
          01
        </span>
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-24 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-royal-blue font-display font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
            About ALJ Studio
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-black text-midnight-navy leading-[0.9] tracking-tight">
            BRAND
            <br />
            <span className="text-royal-blue">STORYTELLING</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-midnight-navy/80 leading-relaxed mb-8 font-body">
              <span className="text-midnight-navy font-bold">ALJ STUDIO CREATIVE</span> was born from a bold desire to redefine how brands communicate in a fast-moving digital world. Positioned between{' '}
              <span className="text-royal-blue font-semibold">creative disruption</span> and{' '}
              <span className="text-royal-blue font-semibold">strategic partnership</span>, ALJ blends artistic vision with business-oriented thinking.
            </p>

            <p className="text-lg md:text-xl text-midnight-navy/80 leading-relaxed mb-12 font-body">
              Here, ideas take shape through{' '}
              <span className="text-midnight-navy font-bold">powerful visuals</span>,{' '}
              <span className="text-midnight-navy font-bold">cinematic experiences</span>, and{' '}
              <span className="text-midnight-navy font-bold">content engineered to convert</span>. ALJ isn&apos;t just a production studio; it&apos;s a{' '}
              <em className="text-saffron-orange font-semibold not-italic">creative ally</em> for businesses seeking trust, clarity, and artistic excellence.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-12">
              <div>
                <div className="text-5xl md:text-7xl font-display font-black text-midnight-navy">
                  50
                </div>
                <div className="text-sm uppercase tracking-wider text-saffron-orange font-bold">
                  Clients<br />Trusted Us
                </div>
              </div>
              <div>
                <div className="text-5xl md:text-7xl font-display font-black text-midnight-navy">
                  +100
                </div>
                <div className="text-sm uppercase tracking-wider text-saffron-orange font-bold">
                  Creative Videos<br />Produced
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] bg-midnight-navy overflow-hidden">
              {/* Film Strip Overlay */}
              <div className="absolute top-0 left-0 w-full h-8 bg-black z-20 flex items-center justify-between px-4">
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full border-2 border-white/30" />
                  ))}
                </div>
                <span className="text-white/50 text-xs font-mono">1/100</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-8 bg-black z-20 flex items-center justify-between px-4">
                <span className="text-white/50 text-xs font-mono">F1.4</span>
                <span className="text-white/50 text-xs font-mono">ISO 100</span>
              </div>

              {/* Image */}
              <Image
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop"
                alt="Behind the scenes - ALJ Studio Creative visual process"
                fill
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/60 to-transparent z-10" />
            </div>

            {/* Caption */}
            <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-royal-blue px-6 py-4 z-30">
              <p className="text-white text-sm font-body uppercase tracking-wide">
                &ldquo;Behind the Scenes &mdash; ALJ Studio<br />
                Creative Visual Process&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-midnight-navy/20 to-transparent" />
    </section>
  );
}
