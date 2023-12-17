'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/useSectionInView';

const Projects = () => {
  const { ref } = useSectionInView('Projects');

  return (
    <section
      ref={ref}
      id="projects"
      className="pt-10 w-full max-w-5xl mx-auto mt-4 sm:mt-20 scroll-mt-24 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
        className="text-center text-xl sm:text-2xl my-4 font-bold text-slate-700 dark:text-fuchsia-50">
        Projects
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
        className="text-center text-sm my-4 font-bold text-muted-foreground">
        Coming soon...
      </motion.h3>
    </section>
  );
};

export default Projects;
