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
  email: string;
  message: string;
};

const PortfolioEmailTemplate = ({ email, message }: PortfolioEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{message}</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Text>{message}</Text>
              <Hr />
              <Text>From: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PortfolioEmailTemplate;
