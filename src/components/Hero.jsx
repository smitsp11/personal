import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import FloatingParticles from './FloatingParticles'

const Hero = () => {
  const [typingComplete, setTypingComplete] = useState(false)

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-cityscape.jpg')`,
          backgroundAttachment: 'fixed',
          filter: 'blur(1px)'
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Floating Particles */}
      <FloatingParticles count={26} color="#076194" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Heading with Typing Effect */}
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tight">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('<span class="text-neon">smit</span> <span class="text-white">patel</span>')
                  .callFunction(() => {
                    setTypingComplete(true)
                  })
                  .start()
              }}
              options={{
                delay: 150,
                cursor: '<span class="text-neon">|</span>',
                autoStart: true,
              }}
            />
          </h1>
        </div>
        
        {/* Subtitle - Appears after typing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: typingComplete ? 1 : 0, 
            y: typingComplete ? 0 : 20 
          }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4"
        >
          <h2 className="text-xl md:text-2xl text-warm font-medium">
            trackone engineering @ uoft
          </h2>
        </motion.div>
        
        {/* Tagline - Appears last */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: typingComplete ? 1 : 0, 
            y: typingComplete ? 0 : 20 
          }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-lg md:text-xl text-white font-light" style={{textShadow: '0 0 10px rgba(255, 255, 255, 0.8)'}}>
            im bullish on myself
          </p>
        </motion.div>
        
        {/* Neon Line Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: typingComplete ? 1 : 0 
          }}
          transition={{ delay: 1.8, duration: 1 }}
          className="neon-line w-32 mx-auto mt-8"
        />
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: typingComplete ? 1 : 0 
        }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <div className="scroll-indicator">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-neon rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-neon rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
