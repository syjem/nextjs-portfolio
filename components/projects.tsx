'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/useSectionInView';

import ProjectCarousel from './carousel';

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.3);

  return (
    <section
      ref={ref}
      id="projects"
      className="pt-10 w-full max-w-5xl mx-auto mt-4 sm:mt-20 scroll-mt-24 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
        className="text-center text-xl sm:text-2xl my-4 mb-12 font-bold text-slate-700 dark:text-fuchsia-50">
        Featured Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
        viewport={{
          once: true,
        }}
        className="w-full sm:w-3/4 md:w-1/2 mx-auto">
        <ProjectCarousel />
      </motion.div>
    </section>
  );
};

export default Projects;
