import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { ThemeToggle } from '@/components/ThemeToggle';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
});

export const metadata: Metadata = {
  title: 'Dhanya Sridhar — Senior SDET',
  description:
    'Senior SDET with 5+ years across fintech and healthcare. MS Computer Science, Loyola University Chicago. Playwright, Selenium, REST Assured, CI/CD.',
  authors: [{ name: 'Dhanya Sridhar' }],
  openGraph: {
    title: 'Dhanya Sridhar — Senior SDET',
    description: 'Senior SDET. Playwright · Java · CI/CD. Chicago, IL.',
    type: 'website',
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored ? stored === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', isDark);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans">
        <div className="min-h-screen relative overflow-hidden noise-texture bg-amber-50 dark:bg-stone-950 text-slate-800 dark:text-stone-200 transition-colors duration-500">
          <Nav />
          <main className="relative z-10">{children}</main>
          <ThemeToggle />
        </div>
      </body>
    </html>
  );
}
