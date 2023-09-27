import { ThemeProvider } from '@/components/theme-provider'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import Providers from '@/app/[locale]/providers';
import { iransansX, comforter, vazir, inter } from '@/app/fonts'

export const metadata: Metadata = {
  title: "Wallet Analyzer",
  description: "Analyzes your wallet transactions",
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
    <html
      lang={locale}
      className={locale === 'fa' ? `${comforter.variable} ${iransansX.variable} ${vazir.variable}` : inter.variable}
      suppressHydrationWarning>
      <body className='min-h-screen overflow-x-hidden font-sans antialiased'>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
