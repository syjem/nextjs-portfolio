'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsDownload } from 'react-icons/bs';

const HeroSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto mt-4 sm:mt-12 px-4">
      <div className="flex flex-col sm:flex-row-reverse items-center justify-center gap-4 sm:gap-32 lg:gap-40 border border-sky-500">
        <div className="space-x-8">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}>
            <Image
              src="https://avatars.githubusercontent.com/u/119649793?s=400&u=fad3b7fd0bf29a2f9e5ca3657dbd72084c0570bb&v=4"
              width={180}
              height={180}
              priority={true}
              quality={95}
              alt="User profile"
              className="h-32 w-32 xs:h-52 xs:w-52 rounded-full border-[2px] border-slate-500 shadow-lg object-cover"
            />
          </motion.div>
          {/* <span>
            <Image
              src="/next.svg"
              width={100}
              height={100}
              alt="Next Js Logo"
            />
          </span> */}
        </div>
        <motion.div
          className="w-full sm:w-[300px] flex flex-col gap-4 my-4 px-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl sm:text-6xl text-fuchsia-50 font-bold text-center sm:text-left">
            Full Stack Developer
          </h1>
          <p className="text-fuchsia-500 text-base text-center sm:text-left">
            Full stack developer with specialized skills & knowledge in all
            stages of web development lifecycle.
          </p>
        </motion.div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        <Link
          className="py-2 px-4 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 bg-fuchsia-900 text-slate-50 hover:bg-fuchsia-900/90"
          href="#contact">
          Contact Me
        </Link>
        <a
          tabIndex={0}
          title="Download resume"
          className="gap-2 cursor-pointer py-2 px-4 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-fuchsia-800 dark:bg-slate-950 dark:hover:bg-slate-950/100 dark:hover:text-slate-50">
          Resume
          <BsDownload className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
