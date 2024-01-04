'use server';

import React from 'react';
import { Resend } from 'resend';
import { validateFields, getErrorMessage } from '@/lib/utils';
import PortfolioEmailTemplate from '@/components/emails/portfolio-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!validateFields(name, 50)) {
    return {
      error: 'Invalid name',
    };
  }

  if (!validateFields(email, 80)) {
    return {
      error: 'Invalid email',
    };
  }

  if (!validateFields(message, 1000)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: `${name as string} <onboarding@resend.dev>`,
      to: 'syjem143@gmail.com',
      subject: 'Portfolio message',
      reply_to: email as string,
      react: React.createElement(PortfolioEmailTemplate, {
        email: email as string,
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
