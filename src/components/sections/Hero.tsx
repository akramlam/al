'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-cyan-500/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.35, 0.15],
            x: [0, -80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-300/10 to-blue-400/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.05, 0.2, 0.05],
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline with Premium Typography */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-display font-black text-white mb-8 leading-[0.9] tracking-tight relative z-10">
            Réunir les
            <span className="gradient-text inline-block transform hover:scale-105 transition-transform duration-300">
              créateurs de contenu
            </span>
            <br />
            <span className="text-6xl md:text-7xl text-slate-200 font-bold block mt-4">
              pour <span className="text-cyan-300">scaler</span> vos projets vidéo
            </span>
          </h1>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-cyan-400/20 rounded-full animate-pulse" />
          <div className="absolute top-8 -right-8 w-4 h-4 bg-cyan-400/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}} />
          <div className="absolute -bottom-4 left-1/2 w-6 h-6 border-2 border-blue-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
        </motion.div>

        {/* Subtitle with Better Hierarchy */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p
            className="text-subhead mb-8 leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            De la <span className="text-cyan-300 font-semibold">conception</span> à la <span className="text-cyan-300 font-semibold">diffusion</span>,
            nous réunissons les talents créatifs pour donner vie à vos projets vidéo les plus ambitieux
          </motion.p>

          {/* Enhanced Service Tags */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: '🎬', text: 'Production', color: 'from-purple-400 to-pink-400' },
              { icon: '✂️', text: 'Montage', color: 'from-cyan-400 to-blue-500' },
              { icon: '📊', text: 'Stratégie', color: 'from-green-400 to-emerald-500' },
              { icon: '📱', text: 'Social Media', color: 'from-orange-400 to-red-500' }
            ].map((tag, index) => (
              <motion.div
                key={tag.text}
                className={`px-5 py-3 glass rounded-2xl text-sm font-semibold text-white border border-white/20 relative overflow-hidden group cursor-pointer`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tag.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <span className="text-lg mr-2">{tag.icon}</span>
                <span className="relative z-10">{tag.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="default" size="lg" className="group relative overflow-hidden">
              <span className="flex items-center gap-3 relative z-10">
                <span className="text-xl">📅</span>
                Prendre rendez-vous
                <motion.span
                  className="text-lg"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="outline" size="lg" className="group relative">
              <span className="flex items-center gap-3">
                <span className="text-xl">🎨</span>
                Découvrir nos projets
                <motion.span
                  className="text-lg group-hover:animate-bounce"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  ↓
                </motion.span>
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Modern Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
