import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  robots: {
    follow: true,
    index: true
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <main className="flex flex-col min-h-screen w-full items-center justify-start overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
