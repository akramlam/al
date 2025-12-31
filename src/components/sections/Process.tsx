'use client';

/**
 * Process Section - ALJ Studio Creative
 * Brand Book 2025 - Vision & Mission Style
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="relative overflow-hidden" ref={ref}>
      {/* Vision Section - Blue Background */}
      <div className="relative bg-midnight-navy">
        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          {/* Left - Content */}
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-8xl md:text-9xl font-display font-black text-white/10 absolute top-20 left-6 lg:left-20">
                (02)
              </span>

              <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[0.85] tracking-tight mb-8">
                ALJ
                <br />
                <span className="text-soft-steel-blue">VISION</span>
              </h2>

              <p className="text-lg md:text-xl text-soft-steel-blue max-w-xl leading-relaxed font-body">
                To establish <span className="text-white font-bold">ALJ STUDIO CREATIVE</span> as Morocco&apos;s leading bold and artistic video studio, delivering{' '}
                <span className="text-saffron-orange font-semibold">high-impact</span>,{' '}
                <span className="text-amber font-semibold">trustworthy</span>, and{' '}
                <span className="text-white font-semibold">modern</span> creative services that support businesses across the country.
              </p>
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-midnight-navy/50 z-10" />
            <Image
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop"
              alt="ALJ Studio Vision"
              fill
              className="object-cover grayscale"
            />
            {/* Framed Portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-white p-4 z-20 shadow-2xl">
              <div className="w-full h-full relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop"
                  alt="Creative Director"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section Number */}
        <div className="absolute bottom-8 left-6 md:left-12 lg:left-20">
          <span className="text-6xl font-display font-black text-white/20">02</span>
        </div>

        {/* Side Label */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
          <span className="text-sm font-display font-bold text-soft-steel-blue tracking-[0.3em] uppercase writing-vertical">
            Vision & Mission
          </span>
        </div>
      </div>

      {/* Mission Section - Light Background */}
      <div className="relative bg-brand-off-white">
        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-off-white/50 z-10" />
            <Image
              src="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop"
              alt="ALJ Studio Mission"
              fill
              className="object-cover grayscale"
            />
            {/* Framed Portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-white p-4 z-20 shadow-2xl">
              <div className="w-full h-full relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-24">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-midnight-navy leading-[0.85] tracking-tight mb-8">
                ALJ
                <br />
                <span className="text-royal-blue">MISSION</span>
              </h2>

              <p className="text-lg md:text-xl text-midnight-navy/70 max-w-xl leading-relaxed font-body">
                To deliver <span className="text-midnight-navy font-bold">high-quality</span>,{' '}
                <span className="text-royal-blue font-semibold">strategic</span>, and{' '}
                <span className="text-royal-blue font-semibold">innovative</span> video content, from ideation to execution, helping businesses grow through{' '}
                <span className="text-saffron-orange font-bold">trust</span>,{' '}
                <span className="text-saffron-orange font-bold">creativity</span>, and{' '}
                <span className="text-saffron-orange font-bold">tailored visual experiences</span>.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Section Number */}
        <div className="absolute bottom-8 right-6 md:right-12 lg:right-20">
          <span className="text-6xl font-display font-black text-midnight-navy/10">03</span>
        </div>
      </div>

      {/* Custom CSS for vertical text */}
      <style jsx>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
}
