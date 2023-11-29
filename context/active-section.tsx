'use client';

import type { SectionType } from '@/lib/types';
import React, { createContext, useState } from 'react';

type ActiveSectionContextType = {
  activeSection: SectionType;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionType>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<SectionType>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
