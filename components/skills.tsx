'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { skillsData } from '@/lib/data';
import { Outfit } from 'next/font/google';
import { useSectionInView } from '@/hooks/useSectionInView';
import { cn } from '@/lib/utils';

export const outfit = Outfit({ subsets: ['latin'] });

const SkillSection = () => {
  const { ref } = useSectionInView('Skills');

  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="pt-10 w-full max-w-5xl mx-auto mt-4 sm:mt-20 scroll-mt-24 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
        className="text-center text-lg sm:text-xl my-4 font-bold text-fuchsia-50">
        Skill Set
      </motion.h2>

      <motion.div className="max-w-[600px] lg:max-w-full mx-auto">
        <ul className="w-full flex gap-4 flex-wrap justify-center sm:w-3/4 mx-auto py-2 px-4 rounded-md">
          {skillsData.map((skill, index) => (
            <motion.li
              key={skill.name}
              className="flex flex-col gap-1 items-center shrink-0"
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}>
              <Image
                src={skill.icon}
                alt={`${skill.name}'s logo`}
                width={40}
                height={40}
                className="w-7 h-7 sm:w-[40px] sm:h-[40px]"
              />
              <span
                className={cn(
                  'hidden lg:block text-base text-slate-100',
                  outfit.className
                )}>
                {skill.name}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default SkillSection;
