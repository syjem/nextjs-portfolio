'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroTitle = () => {
  return (
    <motion.div
      className="w-full flex flex-col items-center gap-4 my-2 px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-3xl md:text-6xl text-fuchsia-50 font-bold text-center">
        Web Developer
      </h1>
      <p className="text-fuchsia-500 text-base text-center">
        with specialized knowledge & skills in all stages of web development.
      </p>
    </motion.div>
  );
};

export default HeroTitle;
