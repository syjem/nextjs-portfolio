'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsDownload } from 'react-icons/bs';
import { useSectionInView } from '@/hooks/useSectionInView';
import { useActiveSectionContext } from '@/hooks/useActiveSectionContext';
import Socials from './socials';
import { outfit } from './skills';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="w-full max-w-5xl mx-auto pt-8 sm:pt-20 scroll-mt-24 px-4 pb-20 md:pb-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative space-x-8 h-32 w-32 xs:h-56 xs:w-56 rounded-full shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className="mb-1 xs:mb-0">
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
        </div>
        <motion.span
          className={cn(
            'text-slate-950 dark:text-fuchsia-50 text-base sm:text-lg font-semibold',
            outfit.className
          )}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
          viewport={{
            once: true,
          }}>
          JEMUEL REPOYLO
        </motion.span>
        <motion.div
          className="flex gap-2 w-full justify-center items-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}>
          <Socials />
        </motion.div>
        <motion.div
          className="w-full flex flex-col items-center gap-4 my-2 px-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-6xl text-slate-950 dark:text-fuchsia-50 font-bold text-center">
            Web Developer
          </h1>
          <p className="text-fuchsia-500 text-base text-center">
            with specialized knowledge & skills in all stages of web
            development.
          </p>
        </motion.div>
      </div>
      <motion.div
        className="flex items-center justify-center gap-4 mt-2"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}>
        <Link
          className="contact-me"
          href="#contact"
          onClick={() => {
            setActiveSection('Contact'), setTimeOfLastClick(Date.now());
          }}>
          Contact Me
        </Link>
        <a
          download
          href="/resume-updated.pdf"
          tabIndex={0}
          title="Download resume"
          className="resume">
          Resume
          <BsDownload className="h-4 w-4 text-slate-800 dark:text-slate-300" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
