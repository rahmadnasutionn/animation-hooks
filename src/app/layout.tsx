import { Suspense } from 'react';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import * as config from '~/lib/config';

import MainNav from '~/components/layouts/main-nav'
import ThemeProvider from '~/components/theme-provider';
import Footer from '~/components/layouts/footer';
import ScrollToTop from '~/components/layouts/scroll-to-top';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: config.title,
    template: `%s - ${config.title}`
  },
  description: config.description,
  keywords: [
    'Next.JS',
    'React.JS',
    'Server Components',
    'Framer Motion'
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <Suspense>
          <ScrollToTop />
        </Suspense>
        <Suspense>
          <MainNav />
        </Suspense>
        {children}
        <Suspense>
          <Footer />
        </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
