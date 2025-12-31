'use client';

/**
 * Portfolio Section - ALJ Studio Creative
 * Brand Book 2025 - Work Showcase
 */

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { projects } from '@/lib/data';

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" className="relative bg-midnight-navy overflow-hidden" ref={ref}>
      {/* Large Background Text */}
      <div className="absolute top-1/3 left-0 pointer-events-none select-none">
        <span className="text-[12vw] font-display font-black text-white/[0.02] leading-none whitespace-nowrap">
          WORK
        </span>
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-24 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
        >
          <div>
            <span className="text-saffron-orange font-display font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[0.9] tracking-tight">
              OUR <span className="text-royal-blue">PORTFOLIO</span>
            </h2>
          </div>
          <p className="text-soft-steel-blue text-lg max-w-md font-body">
            Discover some of our most impactful projects across various industries.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Project Card */}
              <div className="relative aspect-[16/10] overflow-hidden bg-royal-blue/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy via-midnight-navy/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  {/* Tag */}
                  <span className="inline-block self-start px-4 py-1.5 bg-saffron-orange text-midnight-navy font-display font-bold text-xs uppercase tracking-wider mb-4">
                    {project.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 group-hover:text-saffron-orange transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-soft-steel-blue text-sm md:text-base font-body">
                    {project.description}
                  </p>

                  {/* View Project Link */}
                  <div className="mt-6 flex items-center gap-2 text-white/0 group-hover:text-white transition-colors">
                    <span className="font-display font-bold text-sm">View Project</span>
                    <svg className="w-4 h-4 transform translate-x-0 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Border Frame */}
                <div className="absolute inset-3 border border-white/0 group-hover:border-white/20 transition-colors pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-saffron-orange text-midnight-navy font-display font-bold text-lg rounded-none hover:bg-amber transition-colors"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <span className="text-soft-steel-blue font-body">or</span>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white font-display font-bold hover:text-saffron-orange transition-colors"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
