import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FloatingParticles from './FloatingParticles'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section id="about" className="relative py-20 px-4 bg-dark">
      <FloatingParticles count={13} color="#076194" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-neon">Me</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="neon-line w-24 mx-auto"
            />
          </div>
          
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center"
          >
            <div className="card-glow p-8 md:p-12 rounded-2xl">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-none">
                I'm going all in on machine learning, I wanna build tools for the real world. 
                Right now, I'm developing a search platform that makes it easy to find products 
                with filters that actually matter, from quality and best price to reselling value. 
                When I'm not coding, you can find me watching F1 rooting for Lando to win it all 
                in 2025. Also on the content bandwagon so find my tiktok.
              </p>
            </div>
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="flex justify-center mt-12 space-x-8">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
                className="w-2 h-2 bg-neon rounded-full"
                style={{
                  boxShadow: '0 0 10px #00ffff',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
