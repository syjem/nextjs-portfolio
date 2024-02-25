'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { outfit } from './skills';

const HeroName = () => {
  return (
    <motion.span
      className={cn(
        'text-fuchsia-50 text-base sm:text-lg font-semibold',
        outfit.className
      )}
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
      viewport={{
        once: true,
      }}>
      JEMUEL REPOYLO
    </motion.span>
  );
};

export default HeroName;
