'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import AnoAI from './animated-shader-background';

export default function ComingSoon() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    initialX: Math.random() * 100,
  }));

  if (!mounted) return null;

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://instagram.com/aljcreativestudio",
      label: "Instagram",
      gradient: "from-pink-500 to-purple-600",
      shadowColor: "rgba(236, 72, 153, 0.4)",
      hoverRotate: 360,
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/yazidalj",
      label: "LinkedIn",
      gradient: "from-blue-600 to-blue-700",
      shadowColor: "rgba(37, 99, 235, 0.4)",
      hoverRotate: 360,
    }
  ];

  return (
    <div className="w-full h-screen bg-black">
    <AnoAI/>
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,174,239,0.1)_0%,transparent_70%)] rounded-full"></div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-cyan-400/20 rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.initialX}%`,
            }}
            animate={{
              y: [-20, -window.innerHeight - 20],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(0,174,239,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,174,239,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div> */}

      {/* ALJ + CREATIVE STUDIO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-1/2 -translate-x-1/2 top-[15vh] sm:top-[15vh] md:top-[15vh] lg:top-[17vh] flex flex-col items-center space-y-2 text-center"
        style={{
          transform: `translateX(${-50 + mousePosition.x * 2}%) translateY(${mousePosition.y * 5}px)`,
        }}
      >
        <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-extralight tracking-tight leading-none">
          <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            ALJ
          </span>
        </h1>
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-white/70 tracking-[.35em] block">
          CREATIVE STUDIO
        </span>
      </motion.div>

      {/* COMING SOON */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="absolute left-1/2 top-[55%] sm:top-[58%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-4 sm:gap-6 md:gap-8">
          <div className="w-12 sm:w-16 md:w-24 lg:w-32 h-px bg-gradient-to-r from-transparent to-cyan-400/60"></div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-extralight tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.3em] text-cyan-300/80 uppercase whitespace-nowrap">
            Coming Soon
          </h2>
          <div className="w-12 sm:w-16 md:w-24 lg:w-32 h-px bg-gradient-to-l from-transparent to-cyan-400/60"></div>
        </div>
      </motion.div>

      {/* Socials */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
        className="absolute left-1/2 top-[75%] sm:top-[78%] -translate-x-1/2 flex items-center gap-6 sm:gap-8"
      >
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.div
              key={social.label}
              className="relative"
              initial={{ opacity: 0, y: 50, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.8 + index * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <motion.a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="relative group block p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{
                  scale: 1.2,
                  rotateY: 15,
                  rotateX: -10,
                  z: 50,
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: `translateX(${mousePosition.x * (5 - index)}px) translateY(${mousePosition.y * (5 - index)}px)`,
                }}
              >
                <div
                  className={`absolute -inset-4 bg-gradient-to-r ${social.gradient} rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                  style={{
                    boxShadow: hoveredIndex === index ? `0 20px 40px ${social.shadowColor}` : '',
                  }}
                />

                <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.1]
                  group-hover:border-cyan-400/40 group-hover:bg-white/[0.08]
                  transition-all duration-500 overflow-hidden
                  shadow-xl shadow-black/20 group-hover:shadow-2xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0
                    group-hover:opacity-10 transition-opacity duration-500`} />

                  <motion.div
                    className="relative z-10 text-white/60 group-hover:text-white transition-colors duration-300"
                    animate={hoveredIndex === index ? { rotate: social.hoverRotate } : { rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 drop-shadow-lg" />
                  </motion.div>
                </div>
              </motion.a>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
          animate={{ opacity: [0.3, 0.8, 0.3], scaleX: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent mt-px"></div>
      </div>
    </div>
  );
}
