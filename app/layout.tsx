import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/sonner';
import ActiveSectionContextProvider from '@/context/active-section';
import { cn } from '@/lib/utils';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jemuel Repoylo',
  description: 'Official developer portfolio of Jemuel Repoylo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={cn('bg-slate-950 text-slate-50 relative', inter.className)}>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
