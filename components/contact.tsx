'use client';

import { toast } from 'sonner';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import MessageInput from './form/textarea';
import EmailField from './form/email-field';
import SubmitButton from './form/submit-btn';
import { sendEmail } from '@/actions/send-email';
import { useSectionInView } from '@/hooks/useSectionInView';
import NameField from './form/name-field';

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { ref } = useSectionInView('Contact');

  const action = async (formData: FormData) => {
    const { data, error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success('Email sent successfully.');

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="pb-20 pt-10 w-full max-w-5xl mx-auto mt-4 sm:mt-20 scroll-mt-24 px-4">
      <div className="w-full sm:w-[70%] mx-auto flex flex-col items-center sm:items-start lg:flex-row justify-center gap-4 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
          }}
          className="flex-1 flex flex-col gap-2 md:gap-6 w-full max-w-[450px] mx-auto">
          <h2 className="text-center text-2xl md:text-5xl font-bold text-slate-700 dark:text-fuchsia-50">
            Contact
          </h2>
          <p className="text-center text-slate-500 text-sm mb-6">
            If you&apos;d like to get in touch, feel free to send me an email.
          </p>
        </motion.div>
        <motion.div
          className="w-full flex-1 max-w-[450px] mx-auto"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
          viewport={{
            once: true,
          }}>
          <form ref={formRef} action={action} className="flex flex-col gap-3">
            <NameField />
            <EmailField />
            <MessageInput />
            <SubmitButton />
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
