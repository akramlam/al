'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-cyan-400/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white"
          >
            ALJ <span className="text-cyan-400">Creative</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-cyan-400 transition-colors">
              Services
            </a>
            <a href="#process" className="text-white hover:text-cyan-400 transition-colors">
              Processus
            </a>
            <a href="#portfolio" className="text-white hover:text-cyan-400 transition-colors">
              Portfolio
            </a>
            <a href="#about" className="text-white hover:text-cyan-400 transition-colors">
              À propos
            </a>
            <a href="#contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-400 text-slate-950 px-6 py-2 rounded-full font-semibold hover:bg-cyan-300 transition-colors"
          >
            Réserver un appel
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
