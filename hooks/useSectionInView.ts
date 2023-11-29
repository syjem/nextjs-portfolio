import { useEffect } from 'react';
import type { SectionType } from '@/lib/types';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from './useActiveSectionContext';

export const useSectionInView = (
  sectionName: SectionType,
  threshold = 0.75
) => {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};
