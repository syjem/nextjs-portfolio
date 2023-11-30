import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import { Toaster } from 'react-hot-toast';
import ActiveSectionContextProvider from '@/context/active-section';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jemuel Repoylo',
  description: 'Official developer portfolio of Mr. Jemuel Repoylo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} h-[1500px] bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50 relative`}>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
