import React from 'react';
import {
  Body,
  Container,
  Html,
  Head,
  Heading,
  Hr,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type PortfolioEmailProps = {
  sender: string;
  message: string;
};

const PortfolioEmailTemplate = ({ sender, message }: PortfolioEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New email from your portfolio website.</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Text>{message}</Text>
              <Hr />
              <Text>From: {sender}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PortfolioEmailTemplate;
