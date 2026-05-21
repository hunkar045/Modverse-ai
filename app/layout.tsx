import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ModVerse AI - The AI Co-Moderator Reddit Never Had',
  description: 'Production-grade AI-powered Reddit moderation platform. Detect toxicity, prevent conflicts, and reduce moderator burnout.',
  keywords: ['Reddit', 'Moderation', 'AI', 'Community Management', 'Toxicity Detection'],
  authors: [{ name: 'ModVerse AI Team' }],
  creator: 'ModVerse AI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://modverse-ai.com',
    title: 'ModVerse AI',
    description: 'The AI Co-Moderator Reddit Never Had',
    images: [
      {
        url: 'https://modverse-ai.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ModVerse AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ModVerse AI',
    description: 'The AI Co-Moderator Reddit Never Had',
    images: ['https://modverse-ai.com/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#070B14" />
      </head>
      <body className={`${inter.className} bg-space-dark text-soft-white`}>
        <div className="fixed inset-0 z-0">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-dark opacity-50" />
          <div className="absolute inset-0 bg-radial-glow opacity-30" />
          
          {/* Floating Particles */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-ai-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-glow" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-ai-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-glow animation-delay-2" />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-ai-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-glow animation-delay-4" />
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
