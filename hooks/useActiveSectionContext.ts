'use client';

import { useContext } from 'react';
import { ActiveSectionContext } from '@/context/active-section';

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within its provider.'
    );
  }

  return context;
};
