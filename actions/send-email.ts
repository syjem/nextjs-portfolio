'use server';

import React from 'react';
import { Resend } from 'resend';
import { validateFields, getErrorMessage } from '@/lib/utils';
import PortfolioEmailTemplate from '@/components/emails/portfolio-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const sender = formData.get('email');
  const message = formData.get('message');

  if (!validateFields(sender, 80)) {
    return {
      error: 'Invalid email',
    };
  }

  if (!validateFields(message, 500)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Mysterious Sender <onboarding@resend.dev>',
      to: 'syjem143@gmail.com',
      subject: 'Potential Client',
      reply_to: sender as string,
      react: React.createElement(PortfolioEmailTemplate, {
        sender: sender as string,
        message: message as string,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
