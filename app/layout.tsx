import type { Metadata } from "next";
// import { Inter } from "next/font/google";
 
import '@/css/prism-one-dark.css'
import '@/css/prism-one-light.css'
import '@/css/prism.css'
import 'css/globals.css'
import SectionContainer from "@/components/SectionContainer";
import siteMetadata from '@/data/siteMetadata'
 
// const inter = Inter({ subsets: ["latin"] });
// import { Space_Grotesk } from 'next/font/google'
// const space_grotesk = Space_Grotesk({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-space-grotesk',
// })

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';


import localFont from 'next/font/local'
import NoSSR from "./NoSSR";
import { SearchProvider } from "pliny/search";
import { ThemeProviders } from "./theme-providers";
 
import { Footer } from "@/components/Footer";
import { MainNavigation } from "@/components/MainNavigation";
import { ColorSchemeProvider } from "@/components/ColorSchemeContext";
// Font files can be colocated inside of `app`
// const myFont = localFont({
//   src: './SpaceGrotesk-VariableFont_wght.ttf',
//   display: 'swap',
// })

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth scroll-padding`}
      suppressHydrationWarning
    >
      <head>
      <script
            dangerouslySetInnerHTML={{
              __html: /* js */ `
                const savedTheme = localStorage.getItem('theme') ?? 'system'

                if (savedTheme === 'dark' || (savedTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
          `,
            }}
          />
      </head>
      <body className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
      <NoSSR> 
      <ColorSchemeProvider>
 
      {/* <div className=""> */}
      <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
        <MainNavigation/> 

        {/* <main className="mb-auto">{children}</main>
        <Footer/> */}
        {/* <SectionContainer> */}
        <div className="flex min-h-screen flex-col justify-between">
        <main className="relative pt-16  " style={{ scrollPaddingTop: '150px' }}>
            {children}
          </main>
          <Footer />
    
          </div>
          {/* </SectionContainer> */}
        {/* <div className="flex min-h-screen flex-col justify-between">
          <main className="relative pt-16" style={{ scrollPaddingTop: '150px' }}>
            {children}
          </main>

        </div> */}
        {/* <Footer /> */}
      </SearchProvider>
        {/* </div> */}
 
        </ColorSchemeProvider>
        </NoSSR> 
        </body>
    </html>
  );
}
