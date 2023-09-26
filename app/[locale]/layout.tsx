import { ThemeProvider } from '@/components/theme-provider'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import Providers from '@/app/[locale]/providers';
import { generalInfo } from '@/config/globals';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: generalInfo.title,
    template: `%s | ${generalInfo.title}`,
  },
  description: generalInfo.description,
  keywords: generalInfo.keywords,
  robots: "noindex, nofollow",
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: string }
}) {

  const locale = useLocale();

  // Validate that the incoming `locale` parameter is a valid locale
  if (params.locale !== locale) {
    notFound();
  }

  if (process.env.NODE_ENV === 'production') {
    console.log = () => 0
    console.debug = () => 0
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
