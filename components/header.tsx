'use client';

import React from 'react';
import Link from 'next/link';
import { links } from '@/lib/data';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="z-100 sticky top-0 xs:top-4 max-w-lg mx-auto rounded-none xs:rounded-3xl border overflow-hidden border-fuchsia-900 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] bg-slate-950 bg-opacity-80 ">
      <nav className="p-1">
        <ul className="flex space-x-4 justify-center">
          {links.map((link) => (
            <motion.li
              key={link.name}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="px-2 xs:px-4 py-2 text-sm xs:text-base">
              <Link
                href={link.hash}
                className="text-slate-400 hover:text-slate-50 transition">
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
