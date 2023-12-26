import React from 'react';
import Socials from './socials';

const Footer = () => {
  return (
    <footer className="py-8 w-[90%] max-w-5xl mx-auto mt-4 sm:mt-20 scroll-mt-24 px-4 flex flex-col gap-2 sm:flex-row shrink-0 items-center md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © Jemuel Repoylo. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex items-center gap-4 sm:gap-6">
        <Socials className="sm:w-7 sm:h-7" />
      </nav>
    </footer>
  );
};

export default Footer;
