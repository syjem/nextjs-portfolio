import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import linkedin from '@/public/icons8-linkedin.svg';
import twitter from '@/public/icons8-twitterx.svg';
import { cn } from '@/lib/utils';

const Socials = ({ className }: { className?: string }) => {
  return (
    <>
      <Link
        target="_blank"
        href="https://github.com/syjem"
        className="hover:scale-[1.1] transition-transform">
        <IoLogoGithub className={cn('w-6 h-6 shrink-0', className)} />
      </Link>
      <Link
        target="_blank"
        className="hover:scale-[1.1] transition-transform"
        href="https://www.linkedin.com/in/jemuel-repoylo-a87a63246/">
        <Image
          src={linkedin}
          alt="linkedin logo"
          className={cn('w-6 h-6 shrink-0', className)}
        />
      </Link>
      <Link
        target="_blank"
        href="https://twitter.com/repoylo_jemuel"
        className="hover:scale-[1.1] transition-transform">
        <Image
          src={twitter}
          alt="twitter logo"
          className={cn('w-6 h-6 shrink-0 bg-white rounded-lg', className)}
        />
      </Link>
    </>
  );
};

export default Socials;
