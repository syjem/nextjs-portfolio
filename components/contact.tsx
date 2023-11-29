'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BiSend } from 'react-icons/bi';
import { RiSendPlaneFill } from 'react-icons/ri';
import { useSectionInView } from '@/hooks/useSectionInView';

const ContactSection = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <section
      ref={ref}
      id="contact"
      className="pb-20 pt-10 w-full max-w-5xl mx-auto mt-4 sm:mt-20 scroll-mt-24 px-4">
      <div className="w-full sm:w-[70%] mx-auto flex flex-col items-center sm:items-start md:flex-row justify-center gap-4 md:gap-16">
        <div className="flex-1 flex flex-col gap-2 md:gap-8 w-full max-w-[450px]">
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
            className="text-center text-2xl md:text-5xl font-bold text-fuchsia-50">
            Contact
          </motion.h2>
          <p className="text-center text-slate-500 text-sm mb-6">
            <em className="font-medium">Hit me up!</em> <br /> Fill up in the
            form, and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <div className="w-full flex-1 max-w-[450px]">
          <form action="" className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="text-input"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="text-input"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={5}
                required
                className="text-area"
              />
            </div>
            <button
              type="submit"
              className="py-2 px-4 inline-flex items-center xs:self-end justify-center rounded-md text-sm font-medium ring-offset-sky-500 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-sky-600 bg-fuchsia-900 text-slate-50 hover:bg-fuchsia-900/90 focus:scale-105 hover:scale-105 active:scale-100 border-[2px] dark:border-fuchsia-800 w-full xs:w-1/3 mt-2 gap-2">
              Send
              <RiSendPlaneFill className="w-4 h-4 rotate-[16deg]" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
