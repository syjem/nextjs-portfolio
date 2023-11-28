'use client';

import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';
import { links } from '@/lib/data';
import { motion } from 'framer-motion';
import { useActiveSectionContext } from '@/hooks/useActiveSectionContext';

const Header = () => {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="z-50 sticky top-0 xs:top-4 max-w-lg mx-auto rounded-none xs:rounded-full xs:border overflow-hidden border-fuchsia-900 shadow-lg backdrop-blur-[0.5rem] bg-slate-950 bg-opacity-80 ">
      <nav className="p-1">
        <ul className="flex space-x-4 justify-center">
          {links.map((link) => (
            <motion.li
              key={link.name}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="px-2 xs:px-4 py-2 text-sm xs:text-base relative">
              <Link
                href={link.hash}
                onClick={() => setActiveSection(link.name)}
                className={clsx(
                  'text-slate-400 hover:text-slate-50 transition',
                  {
                    'font-semibold text-fuchsia-600 hover:text-fuchsia-500':
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
