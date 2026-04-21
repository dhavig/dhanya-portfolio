import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Cursor } from '@/components/Cursor';
import { ScrollBar } from '@/components/ScrollBar';
import { Nav } from '@/components/Nav';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dhanya Sridhar — Senior SDET',
  description:
    'Senior SDET with 5+ years across fintech and healthcare. MS Computer Science, Loyola University Chicago. Playwright, Selenium, REST Assured, CI/CD.',
  authors: [{ name: 'Dhanya Sridhar' }],
  openGraph: {
    title: 'Dhanya Sridhar — Senior SDET',
    description:
      'Senior SDET. Playwright · Java · CI/CD. Chicago, IL. 5+ years across fintech and healthcare.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <ScrollBar />
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
