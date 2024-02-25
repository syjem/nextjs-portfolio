'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'tween', duration: 0.2 }}
      className="mb-1 xs:mb-0 relative space-x-8 h-32 w-32 xs:h-56 xs:w-56 rounded-full shrink-0">
      <Image
        src="https://avatars.githubusercontent.com/u/119649793?s=400&u=fad3b7fd0bf29a2f9e5ca3657dbd72084c0570bb&v=4"
        width={180}
        height={180}
        priority={true}
        quality={95}
        alt="User profile"
        className="h-full w-full rounded-full border-[2px] border-slate-500 shadow-lg object-cover"
      />
    </motion.div>
  );
};

export default HeroImage;
