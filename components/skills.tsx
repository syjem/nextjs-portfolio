'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Outfit } from 'next/font/google';
import { skillsData } from '@/lib/data';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/hooks/useActiveSectionContext';

export const outfit = Outfit({ subsets: ['latin'] });

const SkillSection = () => {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection('Skills');
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      id="skills"
      className="pt-10 max-w-[1440px] mx-auto mt-4 sm:mt-32 px-4">
      <h2 className="text-center text-2xl my-4">Skills Set</h2>
      <div className="flex gap-4 flex-wrap justify-center w-ful sm:w-3/4 mx-auto py-2 px-4 rounded-md">
        {skillsData.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-1 items-center">
            <Image
              src={skill.icon}
              alt={`${skill.name}'s logo`}
              width={40}
              height={40}
            />
            <span className={`${outfit.className} text-slate-100`}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
