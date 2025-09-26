import React from 'react';
import { motion } from 'framer-motion';
import FloatingParticles from './FloatingParticles';

const Projects = () => {
  return (
    <section id="projects" className="relative py-40 px-4 bg-dark">
      <FloatingParticles count={16} color="#076194" />
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <motion.div 
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            animate={{
              scale: [1, 1.1, 1],
              textShadow: [
                '0 0 10px rgba(13, 139, 204, 0.5)',
                '0 0 20px rgba(13, 139, 204, 0.8)',
                '0 0 10px rgba(13, 139, 204, 0.5)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            loading...
          </motion.div>
          <motion.div 
            className="text-gray-400 text-lg mt-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            something cool is coming soon™
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
