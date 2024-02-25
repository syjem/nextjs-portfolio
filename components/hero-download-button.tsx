import React from 'react';
import { buttonVariants } from './ui/button';
import { BsDownload } from 'react-icons/bs';

const HeroDownloadButton = () => {
  return (
    <a
      download
      href="/resume-updated.pdf"
      tabIndex={0}
      title="Download resume"
      className={buttonVariants({
        variant: 'outline',
        className:
          'bg-transparent border hover:scale-[1.02] active:scale-100 hover:bg-transparent hover:text-white',
      })}>
      Resume
      <BsDownload className="h-3.5 w-3.5 text-slate-300 ml-2" />
    </a>
  );
};

export default HeroDownloadButton;
