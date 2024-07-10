import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react';

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Daniel Mauricio Flores',
    default:
      'Daniel Mauricio Flores | Full-Stack Software Engineer ⎯ ex: CRITEO, IBM',
  },
  description:
    `A product-oriented full-stack software engineer. 🎨 For front-end, I have mainly developed using React, Angular, Next.js, Java (Android, JSP), SAP OpenUI5, TypeScript, JavaScript, jQuery (yes, the good old school), HTML/CSS, Cypress, Jest, Playwright and others. ⚙️ For back-end, I have mainly used Node.js (Express, Nest.js), Python (Flask, Django), Scala (Play Framework, http4s), Java (Play Framework, Servlets), C#, PHP, Docker, Gradle, CI/CD tools and others. Lately, I'm playing with 🔮 Generative AI (LLMs, ComfyUI, Stable Diffusion, Midjourney, RunwayML) and my latest experiment was about generation of dashboards using text prompts ✨. I worked 4.5 years for CRITEO and 5.5 years for IBM. I'm peruvian 🇵🇪 and based in Paris 🇫🇷 since 2020.`,
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
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
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
