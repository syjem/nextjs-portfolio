'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { BsDownload } from 'react-icons/bs';
import { IoLogoGithub } from 'react-icons/io';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/hooks/useActiveSectionContext';

const HeroSection = () => {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection('Home');
    }
  }, [inView, setActiveSection]);
  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[1440px] mx-auto pt-8 sm:pt-20 px-4">
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
          <motion.div
            className="group flex items-center gap-1 absolute right-0 hover:shadow-lg hover:-right-[7.3rem] bottom-3 xs:bottom-10 cursor-pointer text-slate-50 bg-gray-950 border border-slate-400 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}>
            <IoLogoGithub className="w-6 h-6 xs:w-7 xs:h-7 p-1 shrink-0" />
            <Link
              href="https://github.com/syjem"
              target="_blank"
              className="w-full hidden group-hover:block text-slate-200 xs:text-blue-500 text-sm pr-2">
              Jemuel Repoylo
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="w-full flex flex-col items-center gap-4 my-8 xs:my-4 px-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-6xl text-fuchsia-50 font-bold text-center">
            Full Stack Developer
          </h1>
          <p className="text-fuchsia-500 text-base text-center">
            with specialized skills & knowledge in all stages of web
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
          className="py-2 px-4 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-sky-500 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-sky-600 bg-fuchsia-900 text-slate-50 hover:bg-fuchsia-900/90 focus:scale-105 hover:scale-105 active:scale-100 border-[2px] dark:border-fuchsia-800"
          href="#contact">
          Contact Me
        </Link>
        <a
          download
          href="/updated-resume.pdf"
          tabIndex={0}
          title="Download resume"
          className="gap-2 cursor-pointer py-2 px-4 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-sky-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-sky-500 border-[2px] hover:text-slate-900 dark:border-fuchsia-800 dark:bg-slate-950 dark:hover:bg-slate-950/100 dark:hover:text-slate-50 focus:scale-105 hover:scale-105 active:scale-100">
          Resume
          <BsDownload className="h-4 w-4 text-slate-300" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
