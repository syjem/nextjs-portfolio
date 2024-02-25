'use client';

import Link from 'next/link';
import React from 'react';

type HeroContactButtonProps = {
  setActiveSection: (
    value: React.SetStateAction<'Contact' | 'Home' | 'Skills' | 'Projects'>
  ) => void;
  setTimeOfLastClick: (value: React.SetStateAction<number>) => void;
};

const HeroContactButton = ({
  setActiveSection,
  setTimeOfLastClick,
}: HeroContactButtonProps) => {
  return (
    <Link
      className="inline-flex animate-shimmer items-center justify-center rounded-md border border-fuchsia-500 bg-[linear-gradient(110deg,#1a0021,45%,#a21caf,55%,#1a0021)] bg-[length:200%_100%] py-2 px-6 text-sm font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer hover:scale-[1.02] active:scale-100"
      href="#contact"
      onClick={() => {
        setActiveSection('Contact'), setTimeOfLastClick(Date.now());
      }}>
      Contact Me
    </Link>
  );
};

export default HeroContactButton;
