'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

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
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* Simplified Background Effects */}
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

      {/* Simplified Particles - Reduced count for better performance */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.slice(0, 10).map((particle) => (
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

      {/* ALJ + CREATIVE STUDIO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-1/2 -translate-x-1/2 top-[20vh] sm:top-[18vh] md:top-[20vh] lg:top-[25vh] flex flex-col items-center space-y-4 text-center px-4"
        style={{
          transform: `translateX(${-50 + mousePosition.x * 2}%) translateY(${mousePosition.y * 5}px)`,
        }}
      >
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-extralight tracking-tight leading-none">
          <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent drop-shadow-lg">
            ALJ
          </span>
        </h1>
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extralight text-white/70 tracking-[.35em] block">
          CREATIVE STUDIO
        </span>
      </motion.div>

      {/* COMING SOON */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="absolute left-1/2 top-[60vh] sm:top-[58vh] md:top-[60vh] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-6 sm:gap-8 md:gap-12">
          <div className="w-16 sm:w-20 md:w-32 lg:w-40 h-px bg-gradient-to-r from-transparent to-cyan-400/60"></div>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-extralight tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-cyan-300/90 uppercase whitespace-nowrap">
            Coming Soon
          </h2>
          <div className="w-16 sm:w-20 md:w-32 lg:w-40 h-px bg-gradient-to-l from-transparent to-cyan-400/60"></div>
        </div>
      </motion.div>

      {/* Socials */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
        className="absolute left-1/2 top-[80vh] sm:top-[82vh] md:top-[85vh] -translate-x-1/2 flex items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4"
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
                className="relative group block focus:outline-none focus:ring-2 focus:ring-cyan-400/60 rounded-full"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`absolute -inset-2 bg-gradient-to-r ${social.gradient} rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500`}
                  style={{
                    boxShadow: hoveredIndex === index ? `0 10px 25px ${social.shadowColor}` : '',
                  }}
                />

                <div className="relative p-3 sm:p-4 md:p-5 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.1]
                  group-hover:border-cyan-400/40 group-hover:bg-white/[0.08]
                  transition-all duration-500 overflow-hidden
                  shadow-lg shadow-black/20 group-hover:shadow-xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0
                    group-hover:opacity-10 transition-opacity duration-500`} />

                  <motion.div
                    className="relative z-10 text-white/60 group-hover:text-white transition-colors duration-300"
                    animate={hoveredIndex === index ? { rotate: social.hoverRotate } : { rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 drop-shadow-lg" />
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
