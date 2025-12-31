'use client';

/**
 * Services Section - ALJ Studio Creative
 * Brand Book 2025 - Core Services with Categorized Layout
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { serviceCategories } from '@/lib/data';

// Service images for each category
const categoryImages: Record<string, string[]> = {
  discovery: [
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop',
  ],
  production: [
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&auto=format&fit=crop',
  ],
  talent: [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&auto=format&fit=crop',
  ],
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative bg-midnight-navy overflow-hidden" ref={ref}>
      {/* Large Background Text */}
      <div className="absolute top-1/4 left-0 pointer-events-none select-none">
        <span className="text-[15vw] font-display font-black text-white/[0.02] leading-none whitespace-nowrap">
          SERVICES
        </span>
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-24 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-saffron-orange font-display font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-black text-white leading-[0.9] tracking-tight">
            CORE <span className="text-royal-blue">SERVICES</span>
          </h2>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-32">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className={`${categoryIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Category Header */}
              <div className="mb-12">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-6xl md:text-8xl font-display font-black text-white/10">
                    {category.number}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-saffron-orange via-amber to-transparent" />
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + serviceIndex * 0.1 }}
                    className="group relative"
                  >
                    {/* Service Card */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-royal-blue/20 mb-6">
                      <Image
                        src={categoryImages[category.id][serviceIndex]}
                        alt={service.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-midnight-navy/60 group-hover:bg-midnight-navy/40 transition-colors" />

                      {/* Border Frame */}
                      <div className="absolute inset-2 border-2 border-white/20 group-hover:border-saffron-orange/50 transition-colors" />
                    </div>

                    {/* Service Info */}
                    <h4 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-wide group-hover:text-saffron-orange transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-soft-steel-blue text-sm leading-relaxed font-body">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Section Indicator */}
      <div className="px-6 md:px-12 lg:px-20 py-8 border-t border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/40 font-body uppercase tracking-wider">
            Full Service Creative Studio
          </span>
          <a
            href="#contact"
            className="flex items-center gap-2 text-saffron-orange hover:text-amber transition-colors font-display font-bold"
          >
            <span>Start a Project</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
