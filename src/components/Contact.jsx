import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react'
import TikTokIcon from './icons/TikTokIcon'
import FloatingParticles from './FloatingParticles'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "smits.patel@mail.utoronto.ca",
      href: "mailto:smits.patel@mail.utoronto.ca",
      color: "text-neon"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/smit11patel",
      href: "https://www.linkedin.com/in/smit11patel/",
      color: "text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/smitsp11",
      href: "https://github.com/smitsp11",
      color: "text-gray-300"
    },
    {
      icon: TikTokIcon,
      label: "TikTok",
      value: "@smit_spatel",
      href: "https://www.tiktok.com/@smit_spatel",
      color: "text-pink-400"
    }
  ]

  const ContactCard = ({ contact, index }) => (
    <motion.a
      href={contact.href}
      target={contact.href.startsWith('http') ? '_blank' : '_self'}
      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
      className="card-glow p-6 rounded-xl group cursor-pointer block"
    >
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-full bg-gray-800 group-hover:bg-opacity-80 transition-all duration-300 ${contact.color}`}>
          <contact.icon size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">{contact.label}</h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {contact.value}
          </p>
        </div>
        <ExternalLink 
          size={18} 
          className="text-gray-500 group-hover:text-neon transition-colors duration-300" 
        />
      </div>
    </motion.a>
  )

  return (
    <section id="contact" className="relative py-20 px-4 bg-dark">
      <FloatingParticles count={22} color="#076194" />
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
              Reach <span className="text-neon">Out</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="neon-line w-24 mx-auto mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              chat with me i wanna know your take on f1 (or don't, i'm not your dad)
            </motion.p>
          </div>
          
          {/* Contact Cards */}
          <div className="space-y-6 mb-16">
            {contactInfo.map((contact, index) => (
              <ContactCard key={contact.label} contact={contact} index={index} />
            ))}
          </div>
          
          
          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-center mt-16 pt-8 border-t border-gray-800"
          >
            <p className="text-gray-500 text-sm">
              © 2025 Smit Patel. Built with React, Tailwind CSS, and lots of ☕
            </p>
            <div className="flex justify-center mt-4 space-x-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                  className="w-1 h-1 bg-neon rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
