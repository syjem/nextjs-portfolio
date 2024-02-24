'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { links } from '@/lib/data';
import { motion } from 'framer-motion';
import { useActiveSectionContext } from '@/hooks/useActiveSectionContext';

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="z-[999] h-16 xs:h-auto sticky top-0 xs:top-4 max-w-lg mx-auto rounded-none xs:rounded-full xs:border overflow-hidden border-fuchsia-900 backdrop-blur-[0.5rem] bg-slate-950 bg-opacity-80">
      <nav className="p-1 h-full flex items-center justify-center">
        <ul className="flex space-x-4 justify-center">
          {links.map((link) => (
            <motion.li
              key={link.name}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="px-2 xs:px-4 py-2 text-sm sm:text-base relative">
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name), setTimeOfLastClick(Date.now());
                }}
                className={cn(
                  'font-semibold text-slate-400 hover:text-fuchsia-500 transition',
                  {
                    '!text-fuchsia-600 hover:!text-fuchsia-500':
                      activeSection === link.name,
                  }
                )}>
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="bg-slate-900 bg-opacity-80 absolute right-0 left-0 top-1 bottom-1 -z-10 rounded-full"></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
