import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import linkedin from '@/public/icons8-linkedin.svg';
import twitter from '@/public/icons8-twitterx.svg';

const Socials = () => {
  return (
    <>
      <Link
        target="_blank"
        href="https://github.com/syjem"
        className="hover:scale-[1.1] transition-transform">
        <IoLogoGithub className="w-5 h-5 xs:w-7 xs:h-7 shrink-0" />
      </Link>
      <Link
        target="_blank"
        className="hover:scale-[1.1] transition-transform"
        href="https://www.linkedin.com/in/jemuel-repoylo-a87a63246/">
        <Image
          src={linkedin}
          alt="linkedin logo"
          className="w-5 h-5 xs:w-[30px] xs:h-[30px] shrink-0"
        />
      </Link>
      <Link
        target="_blank"
        href="https://twitter.com/repoylo_jemuel"
        className="hover:scale-[1.1] transition-transform">
        <Image
          src={twitter}
          alt="twitter logo"
          className="w-5 h-5 xs:w-[26px] xs:h-[26px] shrink-0 bg-white rounded-lg"
        />
      </Link>
    </>
  );
};

export default Socials;
