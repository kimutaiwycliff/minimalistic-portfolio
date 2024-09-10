import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://next-supabase-vote.vercel.app/'),

  title: 'Wycliff Kimutai',
  authors: {
    name: 'Wycliff Kimutai',
  },

  description:
    'I am a software engineer, passionate about building scalable and performant applications.',
  openGraph: {
    title: 'Wycliff Kimutai',
    description:
      'I am a software engineer, passionate about building scalable and performant applications.',
    url: 'https://next-supabase-vote.vercel.app/',
    siteName: 'Wycliff Kimutai',
    images: '/bio.png',
    type: 'website',
  },
  keywords: ['daily web coding', 'chensokheng', 'dailywebcoding'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
