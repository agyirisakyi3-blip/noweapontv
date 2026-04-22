import type { Metadata } from 'next';
import { Cinzel_Decorative, Cinzel, EB_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel-decorative',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  title: 'NO WEAPON TV | Ignite Your Faith',
  description: 'Premium Christian streaming platform spreading the Gospel through powerful sermons, live worship, and life-changing testimonies.',
  keywords: ['Christian TV', 'Online church', 'Sermons', 'Faith', 'Worship', 'Streaming'],
  authors: [{ name: 'NO WEAPON TV' }],
  openGraph: {
    title: 'NO WEAPON TV | Ignite Your Faith',
    description: 'Premium Christian streaming platform spreading the Gospel through powerful sermons, live worship, and life-changing testimonies.',
    type: 'website',
    locale: 'en_US',
    siteName: 'NO WEAPON TV',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NO WEAPON TV | Ignite Your Faith',
    description: 'Premium Christian streaming platform spreading the Gospel through powerful sermons, live worship, and life-changing testimonies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className={`${cinzelDecorative.variable} ${cinzel.variable} ${ebGaramond.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-bg-deep text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}