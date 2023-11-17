import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ModGlo Skincare',
  description: 'Enjoy beautiful skin with ModGlo Skincare.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
