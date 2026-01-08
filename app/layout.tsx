import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Victor Li | Senior UX/UI Engineer | AI-Assisted UX Prototyping & Internal Tools',
  description: 'Victor Li - Senior UX/UI Engineer portfolio showcasing UX engineering, AI-enhanced prototyping, and internal tooling experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}

