'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';

export default function ComingSoon() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    
    // Mouse tracking for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate floating particles
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
      icon: FaTiktok,
      href: "https://tiktok.com/@aljcreativestudio",
      label: "TikTok",
      gradient: "from-cyan-400 to-blue-500",
      shadowColor: "rgba(6, 182, 212, 0.4)",
      hoverRotate: -360,
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/company/aljcreativestudio",
      label: "LinkedIn",
      gradient: "from-blue-600 to-blue-700",
      shadowColor: "rgba(37, 99, 235, 0.4)",
      hoverRotate: 360,
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1220] text-white flex items-center justify-center overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,174,239,0.1)_0%,transparent_70%)] rounded-full"></div>
      </div>

      {/* Floating Particles */}
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

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,174,239,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,174,239,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-8 py-16 min-h-screen">
        {/* Main Brand */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-20"
          style={{
            transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`,
          }}
        >
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-extralight tracking-tight mb-12 leading-none">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              ALJ
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white/70 tracking-[0.4em] mt-4 block">
              CREATIVE STUDIO
            </span>
          </h1>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mb-32"
        >
          <div className="inline-flex items-center gap-8 mb-16">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-cyan-400/60"></div>
            <h2 className="text-xl font-extralight tracking-[0.4em] text-cyan-300/80 uppercase">
              Coming Soon
            </h2>
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-cyan-400/60"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-[1.3] text-white/90 tracking-wide">
              Nous préparons quelque chose d&apos;extraordinaire.
            </p>
            <p className="text-xl md:text-2xl font-extralight leading-relaxed text-white/60 tracking-wide">
              Notre collectif de créateurs révolutionnera votre présence digitale.
            </p>
          </div>
        </motion.div>

        {/* Enhanced Social Links with Advanced Animations */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
          className="relative flex justify-center items-center gap-8 md:gap-12 perspective-1000"
        >
          {/* Connection lines between icons */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scaleX: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

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
                  damping: 20
                }}
              >
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group block"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ 
                    scale: 1.2, 
                    rotateY: 15,
                    rotateX: -10,
                    z: 50
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `translateX(${mousePosition.x * (5 - index)}px) translateY(${mousePosition.y * (5 - index)}px)`,
                  }}
                >
                  {/* Glow effect background */}
                  <motion.div
                    className={`absolute -inset-4 bg-gradient-to-r ${social.gradient} rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                    animate={hoveredIndex === index ? {
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360],
                    } : {}}
                    transition={{
                      duration: 3,
                      repeat: hoveredIndex === index ? Infinity : 0,
                      ease: "linear",
                    }}
                  />

                  {/* Pulse rings */}
                  {hoveredIndex === index && (
                    <>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute inset-0 rounded-3xl border border-cyan-400/30"
                          initial={{ scale: 1, opacity: 0.5 }}
                          animate={{
                            scale: [1, 1.5, 2],
                            opacity: [0.5, 0.2, 0],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.4,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                      ))}
                    </>
                  )}

                  {/* Main card container */}
                  <div className="relative p-6 md:p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.1] 
                    group-hover:border-cyan-400/40 group-hover:bg-white/[0.08] 
                    transition-all duration-500 overflow-hidden
                    shadow-xl shadow-black/20 group-hover:shadow-2xl"
                    style={{
                      boxShadow: hoveredIndex === index ? `0 20px 40px ${social.shadowColor}` : '',
                    }}
                  >
                    {/* Inner gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 
                      group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Icon with rotation */}
                    <motion.div
                      className="relative z-10 text-white/60 group-hover:text-white transition-colors duration-300"
                      animate={hoveredIndex === index ? {
                        rotate: social.hoverRotate,
                      } : { rotate: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg" />
                    </motion.div>

                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={hoveredIndex === index ? { x: "100%" } : { x: "-100%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </div>

                  {/* Label tooltip */}
                  <motion.span
                    className={`absolute -bottom-10 left-1/2 -translate-x-1/2 px-4 py-2 
                      bg-gradient-to-r ${social.gradient} text-white text-sm font-medium 
                      rounded-full pointer-events-none whitespace-nowrap
                      shadow-lg backdrop-blur-md`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {social.label}
                  </motion.span>
                </motion.a>

                {/* Orbiting particle */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full pointer-events-none"
                    style={{
                      top: "50%",
                      left: "50%",
                    }}
                    animate={{
                      x: [0, 40, 0, -40, 0],
                      y: [-40, 0, 40, 0, -40],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Enhanced bottom accent */}
      <div className="absolute bottom-0 left-0 w-full">
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent mt-px"></div>
      </div>
    </div>
  );
}