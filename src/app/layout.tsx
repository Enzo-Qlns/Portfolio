import { type Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'
import React from 'react'

export const metadata: Metadata = {
  title: {
    template: '%s - Enzo QUELENIS',
    default: 'Enzo QUELENIS - Software Engineer',
  },
  description: "Software Engineer, étudiant à l'ESGI et alternant chez PUM.",
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
    <html lang="fr" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <ShootingStars />
        <StarsBackground />
      </body>
      <GoogleAnalytics gaId="G-VG6R4B6L8Z" />
    </html>
  )
}
