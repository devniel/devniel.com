import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react';

import '@/styles/tailwind.css'

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://devniel.com')

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    template: '%s - Daniel Mauricio Flores',
    default:
      'Daniel Mauricio Flores | AI Systems Software Engineer',
  },
  description:
    'Daniel Mauricio Flores is a tech-stack agnostic software engineer with 12+ years of experience building AI systems, voice AI, agentic platforms, backend services and cloud infrastructure.',
  keywords: [
    'Daniel Mauricio Flores',
    'software engineer',
    'AI systems',
    'voice AI',
    'agentic systems',
    'backend engineering',
    'cloud infrastructure',
    'CRITEO',
    'IBM',
    'ROUNDED',
  ],
  authors: [{ name: 'Daniel Mauricio Flores', url: siteUrl.toString() }],
  creator: 'Daniel Mauricio Flores',
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': `${siteUrl}/feed.xml`,
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Daniel Mauricio Flores | AI Systems Software Engineer',
    description:
      'Software engineer building AI systems, voice AI, agentic platforms, backend services and cloud infrastructure.',
    siteName: 'Daniel Mauricio Flores',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Daniel Mauricio Flores | AI Systems Software Engineer',
    description:
      'Software engineer building AI systems, voice AI, agentic platforms, backend services and cloud infrastructure.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="alternate" type="text/markdown" href="/index.md" />
        <link rel="describedby" href="/llms.txt" />
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfilePage',
              mainEntity: {
                '@type': 'Person',
                '@id': `${siteUrl}/#daniel-mauricio-flores`,
                name: 'Daniel Mauricio Flores',
                url: siteUrl.toString(),
                jobTitle: 'Senior Software Engineer',
                description: metadata.description,
                email: 'dnielfs@gmail.com',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Paris',
                  addressCountry: 'FR',
                },
                sameAs: [
                  'https://github.com/devniel',
                  'https://www.linkedin.com/in/devniel',
                ],
                knowsAbout: [
                  'Artificial intelligence',
                  'Voice AI',
                  'Agentic systems',
                  'Backend engineering',
                  'Cloud infrastructure',
                ],
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
