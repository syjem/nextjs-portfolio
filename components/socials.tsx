'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import linkedin from '@/public/icons8-linkedin.svg';
import twitter from '@/public/icons8-twitterx.svg';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Socials = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className="flex gap-2 w-full justify-center items-center z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 125,
        delay: 0.1,
        duration: 0.7,
      }}>
      <Link
        target="_blank"
        href="https://github.com/syjem"
        className="hover:scale-[1.1] transition-transform">
        <IoLogoGithub className={cn('w-5 h-5 shrink-0', className)} />
      </Link>
      <Link
        target="_blank"
        className="hover:scale-[1.1] transition-transform"
        href="https://www.linkedin.com/in/jemuel-repoylo-a87a63246/">
        <Image
          src={linkedin}
          alt="linkedin logo"
          className={cn('w-6 h-6 shrink-0', className)}
        />
      </Link>
      <Link
        target="_blank"
        href="https://twitter.com/repoylo_jemuel"
        className="hover:scale-[1.1] transition-transform relative">
        <Image
          src={twitter}
          alt="twitter logo"
          className={cn('w-6 h-6 shrink-0', className)}
        />
        <div className="absolute w-4 h-4 bg-white top-0 translate-x-1 translate-y-1 -z-10"></div>
      </Link>
    </motion.div>
  );
};

export default Socials;
