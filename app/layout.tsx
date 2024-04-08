import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import 'css/globals.css'
import  MainNavigation from "@/components/MainNavigation";
import SectionContainer from "@/components/SectionContainer";
import siteMetadata from '@/data/siteMetadata'
import Footer from "@/components/Footer";
// const inter = Inter({ subsets: ["latin"] });
import { Space_Grotesk } from 'next/font/google'
const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

import localFont from 'next/font/local'
import NoSSR from "./NoSSR";
import { SearchProvider } from "pliny/search";
import { ThemeProviders } from "./theme-providers";
 
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: './SpaceGrotesk-VariableFont_wght.ttf',
  display: 'swap',
})

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
      className={`${myFont.className} scroll-smooth`}
      suppressHydrationWarning
    >
      
      <body className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
      <NoSSR> 
      <ThemeProviders>
      <SectionContainer>
      <div className="flex h-screen flex-col justify-between font-sans">
        <MainNavigation/> 
        <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
        <main className="mb-auto">{children}</main>
        <Footer/>
      </SearchProvider>
        </div>
        </SectionContainer>
        </ThemeProviders>
        </NoSSR> 
        </body>
    </html>
  );
}
