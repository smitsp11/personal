import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, MapPin, Calendar } from 'lucide-react'
import FloatingParticles from './FloatingParticles'

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const experiences = [
    {
      title: "Co-Founder",
      company: "Stupid Hackathons",
      period: "2025 - Present",
      location: "Worldwide",
      description: "making things you didn't ask for around the world"
    },
    {
      title: "Driverless Member",
      company: "UTFR",
      period: "2025 - Present",
      location: "Toronto, ON",
      description: "building the world's best formula race car without a driver"
    }
  ]

  const education = [
    {
      degree: "Bachelor of Engineering",
      school: "University of Toronto",
      period: "2025 - 2029",
      location: "Toronto, ON"
    }
  ]

  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    "Backend": ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB"],
    "Tools & Technologies": ["Git", "Docker", "AWS", "Firebase", "GraphQL"],
    "Beyond Code": ["gambling", "yapping", "content"]
  }

  const ExperienceCard = ({ experience, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
      className="card-glow p-6 rounded-xl mb-6"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
          <p className="text-[#0D8BCC] font-medium">{experience.company}</p>
        </div>
        <div className="text-gray-400 text-sm mt-2 md:mt-0 md:text-right">
          <div className="flex items-center gap-1 mb-1">
            <Calendar size={14} />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-300 mt-2">
        {experience.description}
      </p>
    </motion.div>
  )

  const EducationCard = ({ education, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
      className="card-glow p-6 rounded-xl mb-6"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{education.degree}</h3>
          <p className="text-[#0D8BCC] font-medium">{education.school}</p>
        </div>
        <div className="text-gray-400 text-sm mt-2 md:mt-0 md:text-right">
          <div className="flex items-center gap-1 mb-1">
            <Calendar size={14} />
            <span>{education.period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{education.location}</span>
          </div>
        </div>
      </div>
      
    </motion.div>
  )

  return (
    <section id="resume" className="relative py-20 px-4 bg-dark">
      <FloatingParticles count={11} color="#076194" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-neon">Resume</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="neon-line w-24 mx-auto mb-8"
            />
            
            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <a
                href="/Smit_Patel-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon inline-flex items-center gap-2"
              >
                <Download size={18} />
                View Resume
              </a>
            </motion.div>
          </div>
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Experience & Education */}
            <div>
              {/* Experience Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-neon rounded-full" />
                  Experience
                </h3>
                {experiences.map((experience, index) => (
                  <ExperienceCard key={index} experience={experience} index={index} />
                ))}
              </div>
              
              {/* Education Section */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-warm rounded-full" />
                  Education
                </h3>
                {education.map((edu, index) => (
                  <EducationCard key={index} education={edu} index={index} />
                ))}
              </div>
            </div>
            
            {/* Right Column - Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-neon-blue rounded-full" />
                Skills
              </h3>
              
              <div className="space-y-8">
                {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + categoryIndex * 0.2, duration: 0.8 }}
                    className="card-glow p-6 rounded-xl"
                  >
                    <h4 className="text-lg font-semibold text-[#0D8BCC] mb-4">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            delay: 0.7 + categoryIndex * 0.2 + skillIndex * 0.1, 
                            duration: 0.5 
                          }}
                          className="skill-tag"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
