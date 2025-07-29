import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://domaindrivendigital.com'),
  title: 'DomainDriven - Where Domain Expertise Drives Digital Innovation',
  description: 'Empowering organizations by unlocking the knowledge of subject matter experts and enabling everyone to become citizen developers and digital innovators.',
  keywords: ['domain driven', 'citizen development', 'digital transformation', 'consultancy', 'software development'],
  authors: [{ name: 'DomainDriven' }],
  openGraph: {
    title: 'DomainDriven - Where Domain Expertise Drives Digital Innovation',
    description: 'Empowering organizations by unlocking the knowledge of subject matter experts and enabling everyone to become citizen developers and digital innovators.',
    url: 'https://domaindrivendigital.com',
    siteName: 'DomainDriven',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DomainDriven - Where Domain Expertise Drives Digital Innovation',
    description: 'Empowering organizations by unlocking the knowledge of subject matter experts and enabling everyone to become citizen developers and digital innovators.',
  },
  robots: 'index, follow',
}

export const viewport = 'width=device-width, initial-scale=1'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 