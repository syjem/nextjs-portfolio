'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/useSectionInView';
import { useActiveSectionContext } from '@/hooks/useActiveSectionContext';
import Socials from './socials';
import HeroImage from './hero-image';
import HeroName from './hero-name';
import HeroTitle from './hero-title';
import HeroDownloadButton from './hero-download-button';
import HeroContactButton from './hero-contact-button';

const HeroSection = () => {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="w-full max-w-5xl mx-auto pt-8 sm:pt-20 scroll-mt-24 px-4 pb-20 md:pb-4 z-50">
      <div className="flex flex-col items-center justify-center gap-4">
        <HeroImage />
        <HeroName />
        <Socials />
        <HeroTitle />
      </div>
      <motion.div
        className="flex items-center justify-center gap-4 mt-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}>
        <HeroContactButton
          setActiveSection={setActiveSection}
          setTimeOfLastClick={setTimeOfLastClick}
        />
        <HeroDownloadButton />
      </motion.div>
    </section>
  );
};

export default HeroSection;
