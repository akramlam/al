"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Camera, Film, Edit3, TrendingUp, Calendar, Play, Lightbulb, Users, BarChart3, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

interface ProcessStep {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  items: string[]
}

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const CreativeStudioHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const processSteps: ProcessStep[] = [
    {
      id: "scripting",
      title: "Scripting & Ideation",
      description: "Every great video starts with a compelling story. Our creative team crafts scripts that resonate.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "#00AEEF",
      items: ["Concept Development", "Script Writing", "Storyboarding", "Creative Direction"]
    },
    {
      id: "filming",
      title: "Production & Filming",
      description: "State-of-the-art equipment meets creative vision. We bring your story to life with cinematic quality.",
      icon: <Camera className="w-8 h-8" />,
      color: "#00AEEF",
      items: ["Professional Filming", "Lighting Setup", "Audio Recording", "Multiple Camera Angles"]
    },
    {
      id: "editing",
      title: "Post-Production",
      description: "Where the magic happens. Our editors transform raw footage into compelling visual narratives.",
      icon: <Edit3 className="w-8 h-8" />,
      color: "#00AEEF",
      items: ["Video Editing", "Color Grading", "Sound Design", "Motion Graphics"]
    },
    {
      id: "marketing",
      title: "Marketing & Distribution",
      description: "Strategic distribution across platforms to maximize reach and engagement with your target audience.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "#00AEEF",
      items: ["Social Media Strategy", "Platform Optimization", "Analytics Tracking", "Performance Optimization"]
    }
  ]

  return (
    <div ref={containerRef} className="relative min-h-[500vh] bg-background overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      />
      
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,174,239,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,174,239,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Hero Section */}
      <motion.section 
        style={{ y: textY, scale: scaleProgress }}
        className="sticky top-0 h-screen flex items-center justify-center text-center px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6">
              ALJ{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-cyan-300">
                Creative
              </span>
              <br />
              Studio
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collective of content creators helping brands bring their ideas to life — 
              from scripting and filming to editing, marketing, and social media management.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="premium" size="lg">
              <Play className="w-5 h-5 mr-2" />
              Watch Our Reel
            </Button>
            <Button variant="outline" size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              Book a Meeting
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00AEEF]">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00AEEF]">
                <AnimatedCounter end={50} suffix="M+" />
              </div>
              <div className="text-sm text-muted-foreground">Views Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00AEEF]">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Steps */}
      {processSteps.map((step, index) => (
        <ProcessStepSection key={step.id} step={step} index={index} />
      ))}

      {/* Call to Action Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-t from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Ready to Create
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-cyan-300">
                {" "}Something Amazing?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss your vision and bring it to life. Book a free consultation 
              and discover how we can elevate your brand through compelling video content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="premium" size="xl">
                <Calendar className="w-6 h-6 mr-3" />
                Schedule Free Consultation
              </Button>
              <Button variant="glass" size="xl">
                <MessageSquare className="w-6 h-6 mr-3" />
                Get a Quote
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00AEEF] to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#00AEEF]/25">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#00AEEF] transition-colors">Expert Team</h3>
                <p className="text-muted-foreground leading-relaxed">Experienced creators and strategists with proven track records</p>
              </Card>
              <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00AEEF] to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#00AEEF]/25">
                    <Film className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#00AEEF] transition-colors">Full Service</h3>
                <p className="text-muted-foreground leading-relaxed">End-to-end content production from concept to distribution</p>
              </Card>
              <Card className="p-8 text-center hover:scale-105 transition-transform duration-300 group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00AEEF] to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#00AEEF]/25">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#00AEEF] transition-colors">Results Driven</h3>
                <p className="text-muted-foreground leading-relaxed">Measurable impact on your brand with data-driven strategies</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

interface ProcessStepSectionProps {
  step: ProcessStep
  index: number
}

const ProcessStepSection: React.FC<ProcessStepSectionProps> = ({ step, index }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity, scale }}
      className="relative h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
        >
          <div className="flex items-center mb-6">
            <div 
              className="p-4 rounded-full mr-4"
              style={{ backgroundColor: `${step.color}20`, color: step.color }}
            >
              {step.icon}
            </div>
            <div className="text-sm font-medium text-[#00AEEF] tracking-wider uppercase">
              Step {index + 1}
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {step.title}
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {step.description}
          </p>

          <div className="grid grid-cols-2 gap-4">
            {step.items.map((item, itemIndex) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + itemIndex * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center text-muted-foreground"
              >
                <div className="w-2 h-2 bg-[#00AEEF] rounded-full mr-3" />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
        >
          <Card className="p-8 backdrop-blur-sm hover:scale-105 transition-all duration-500">
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-20"
                style={{ 
                  background: `linear-gradient(45deg, ${step.color}20, transparent)` 
                }}
              />
              <div className="text-6xl opacity-30" style={{ color: step.color }}>
                {step.icon}
              </div>
              
              {/* Animated elements based on step */}
              {step.id === 'scripting' && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-slate-900/80 rounded p-3 text-xs text-muted-foreground">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-[#00AEEF] rounded-full mr-2" />
                      Script v3.2 - Final Draft
                    </div>
                    <div className="space-y-1">
                      <div className="h-1 bg-slate-600 rounded w-full" />
                      <div className="h-1 bg-slate-600 rounded w-3/4" />
                      <div className="h-1 bg-[#00AEEF] rounded w-1/2" />
                    </div>
                  </div>
                </div>
              )}
              
              {step.id === 'filming' && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-red-500 text-white px-3 py-1 rounded-full text-xs">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                    REC
                  </div>
                </div>
              )}
              
              {step.id === 'editing' && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-slate-900/80 rounded p-3">
                    <div className="flex space-x-1 mb-2">
                      {[...Array(8)].map((_, i) => (
                        <div 
                          key={i} 
                          className="h-8 bg-[#00AEEF] rounded"
                          style={{ width: `${Math.random() * 20 + 10}px` }}
                        />
                      ))}
                    </div>
                    <div className="h-1 bg-slate-600 rounded">
                      <div className="h-1 bg-[#00AEEF] rounded w-1/3" />
                    </div>
                  </div>
                </div>
              )}
              
              {step.id === 'marketing' && (
                <div className="absolute top-4 left-4 right-4">
                  <div className="grid grid-cols-3 gap-2">
                    {['Instagram', 'TikTok', 'YouTube'].map((platform) => (
                      <div key={platform} className="bg-slate-900/80 rounded p-2 text-xs text-center">
                        <div className="text-[#00AEEF] font-medium">{platform}</div>
                        <div className="text-green-400">↗ +{Math.floor(Math.random() * 50 + 10)}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default CreativeStudioHero
