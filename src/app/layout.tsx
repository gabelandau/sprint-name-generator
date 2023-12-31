import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://springs.gabelandau.com'),
  title: 'Sprint Name Generator',
  description: 'Themed name generator for Agile Scrum sprints.',
  openGraph: {
    title: 'Sprint Name Generator',
    description: 'Themed name generator for Agile Scrum sprints.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-slate-950 text-slate-50">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
