import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github } from 'lucide-react';
import FloatingParticles from './FloatingParticles';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects = [
    {
      title: "sonna",
      description: "my personal assistant better than harvey specters donna",
      github: "https://github.com/smitsp11/sonna",
      tech: ["AI", "Assistant", "Productivity"],
      gradient: ["rgba(59, 130, 246, 0.8)", "rgba(99, 102, 241, 0.8)", "rgba(139, 92, 246, 0.8)"]
    },
    {
      title: "excuse-maker",
      description: "im an introvert and i need better reasons to not go out with my friends",
      github: "https://github.com/smitsp11/excuse-maker",
      tech: ["Web", "Humor", "React"],
      gradient: ["rgba(236, 72, 153, 0.8)", "rgba(219, 39, 119, 0.8)", "rgba(192, 38, 211, 0.8)"]
    },
    {
      title: "pacemap",
      description: "google maps but it reccomends the best path to avoid pesky speed traps, so your wallet stays safe",
      github: "https://github.com/smitsp11",
      tech: ["Maps", "Safety", "Navigation"],
      gradient: ["rgba(34, 197, 94, 0.8)", "rgba(59, 130, 246, 0.8)", "rgba(147, 51, 234, 0.8)"]
    }
  ];

  const ProjectCard = ({ project, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
        className="relative w-full max-w-sm mx-auto aspect-square perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          {/* Front Side - Animated Gradient Orb */}
          <motion.div
            className="absolute inset-0 rounded-full cursor-pointer overflow-hidden"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(0deg)'
            }}
          >
            <div className="relative w-full h-full rounded-full bg-dark border-2 border-gray-800 overflow-hidden">
              {/* Animated gradient orb with moving gradients */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={isHovered ? {
                  background: [
                    `radial-gradient(circle at 20% 20%, ${project.gradient[0]}, transparent 60%)`,
                    `radial-gradient(circle at 60% 80%, ${project.gradient[1]}, transparent 60%)`,
                    `radial-gradient(circle at 80% 40%, ${project.gradient[2]}, transparent 60%)`,
                    `radial-gradient(circle at 40% 60%, ${project.gradient[0]}, transparent 60%)`,
                    `radial-gradient(circle at 20% 20%, ${project.gradient[0]}, transparent 60%)`,
                  ]
                } : {
                  background: [
                    `radial-gradient(circle at 30% 30%, ${project.gradient[0]}, transparent 60%)`,
                    `radial-gradient(circle at 70% 70%, ${project.gradient[1]}, transparent 60%)`,
                    `radial-gradient(circle at 30% 30%, ${project.gradient[0]}, transparent 60%)`,
                  ]
                }}
                transition={{
                  duration: isHovered ? 8 : 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Additional animated gradient layers */}
              <motion.div
                className="absolute inset-0 rounded-full mix-blend-screen"
                animate={{
                  backgroundPosition: [
                    '0% 0%',
                    '100% 100%',
                    '0% 0%'
                  ]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  background: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, ${project.gradient[2]}, transparent 70%)`,
                  backgroundSize: '200% 200%'
                }}
              />

              {/* Pulsing core */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [0.8, 1.1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: `radial-gradient(circle, ${project.gradient[1]}, transparent 70%)`
                }}
              />

              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: `
                    inset 0 0 40px ${project.gradient[0]},
                    inset 0 0 80px ${project.gradient[1]},
                    0 0 40px ${project.gradient[0]},
                    0 0 80px ${project.gradient[1]}
                  `,
                  filter: 'blur(1px)'
                }}
              />

              {/* Project name overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.p
                  className="text-white font-bold text-xl md:text-2xl mix-blend-difference z-10 px-6 text-center"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {project.title}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Back Side - Project Details */}
          <motion.div
            className="absolute inset-0 rounded-full cursor-pointer overflow-hidden"
            initial={false}
            animate={{ rotateY: isFlipped ? 0 : -180 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div 
              className="relative w-full h-full rounded-full p-6 md:p-8 border-2 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(15, 15, 15, 0.98) 100%)',
                borderColor: project.gradient[0].replace('0.8', '0.4')
              }}
            >
              {/* Ambient glow from the gradient colors */}
              <div 
                className="absolute -inset-10 rounded-full opacity-20 blur-3xl"
                style={{
                  background: `radial-gradient(circle, ${project.gradient[0]}, ${project.gradient[1]}, transparent)`
                }}
              />

              <div className="relative z-10 h-full flex flex-col justify-center">
                {/* Title */}
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold mb-4 text-center"
                  style={{
                    color: project.gradient[1],
                    textShadow: `0 0 20px ${project.gradient[1]}`
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>

                {/* Description - Centered */}
                <motion.p 
                  className="text-gray-300 text-sm md:text-base leading-relaxed text-center mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.description}
                </motion.p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: `${project.gradient[0]}20`,
                        border: `1px solid ${project.gradient[0]}`,
                        color: project.gradient[1]
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* GitHub Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center mb-3"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
                      color: 'white',
                      boxShadow: `0 0 30px ${project.gradient[0]}80`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 40px ${project.gradient[0]}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 30px ${project.gradient[0]}80`;
                    }}
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                </motion.div>

                {/* Flip back hint */}
                <motion.p
                  className="text-gray-500 text-xs text-center"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Click to flip back
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="relative py-20 px-4 bg-dark">
      <FloatingParticles count={32} color="#076194" />
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
              My <span className="text-neon">Projects</span>
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
              building things that make my life easier (and maybe yours too)
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Custom styles for 3D perspective */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Projects;
