"use client"
/* eslint-disable react/jsx-key */
import { GlassPanel } from '@/components/ui/GlassPanel'
import HomeMenuIconPicker from '@/components/ui/HomeMenu/HomeMenuIconPicker'
import Link from 'next/link'
import HomePageCover from './HomePageCover'
import IconPanel from '@/components/ui/components/IconPanel/IconPanel'
export const selfHostingOptions = [
    {
      title: 'Auth',
      icon: 'auth',
      href: 'reference/self-hosting-auth/introduction',
    },
    {
      title: 'Realtime',
      icon: 'realtime',
      href: 'reference/self-hosting-realtime/introduction',
    },
    {
      title: 'Storage',
      icon: 'storage',
      href: 'reference/self-hosting-storage/introduction',
    },
    {
      title: 'Analytics',
      icon: 'analytics',
      href: 'reference/self-hosting-analytics/introduction',
    },
  ]
  
  export const clientLibraries = [
    {
      title: 'Javascript',
      icon: 'reference-javascript',
      href: 'reference/javascript/introduction',
    },
    {
      title: 'Flutter',
      icon: 'reference-dart',
      href: 'reference/dart/introduction',
    },
    {
      title: 'Python',
      icon: 'reference-python',
      href: 'reference/python/introduction',
    },
    {
      title: 'C#',
      icon: 'reference-csharp',
      href: 'reference/csharp/introduction',
    },
    {
      title: 'Swift',
      icon: 'reference-swift',
      href: 'reference/swift/introduction',
    },
    {
      title: 'Kotlin',
      icon: 'reference-kotlin',
      href: 'reference/kotlin/introduction',
    },
  ]
  
  export const additionalResources = [
    {
      title: 'Management API',
      description: 'Manage your Supabase projects and organizations.',
      icon: 'reference-api',
      href: 'reference/api/introduction',
    },
    {
      title: 'Supabase CLI',
      description: 'Use the CLI to develop, manage and deploy your projects.',
      icon: 'reference-cli',
      href: 'reference/cli/introduction',
    },
    {
      title: 'Platform Guides',
      description: 'Learn more about the tools and services powering Supabase.',
      icon: 'platform',
      href: 'guides/platform',
    },
    {
      title: 'Integrations',
      description: 'Explore a variety of integrations from Supabase partners.',
      icon: 'integrations',
      href: 'guides/integrations',
    },
  ]
  
const products = [
  {
    title: 'Database',
    icon: 'database',
    hasLightIcon: true,
    href: '/guides/database',
    description:
      'Supabase provides a full Postgres database for every project with Realtime functionality, database backups, extensions, and more.',
  },
  {
    title: 'Auth',
    icon: 'auth',
    hasLightIcon: true,
    href: '/guides/auth',
    description:
      'Add and manage email and password, passwordless, OAuth, and mobile logins to your project through a suite of identity providers and APIs.',
  },
  {
    title: 'Storage',
    icon: 'storage',
    hasLightIcon: true,
    href: '/guides/storage',
    description:
      'Store, organize, transform, and serve large files—fully integrated with your Postgres database with Row Level Security access policies.',
  },
  {
    title: 'AI & Vectors',
    icon: 'ai',
    hasLightIcon: true,
    href: '/guides/ai',
    description: 'Use Supabase to store and search embedding vectors.',
  },
  {
    title: 'Realtime',
    icon: 'realtime',
    hasLightIcon: true,
    href: '/guides/realtime',
    description:
      'Listen to database changes, store and sync user states across clients, broadcast data to clients subscribed to a channel, and more.',
  },
  {
    title: 'Edge Functions',
    icon: 'edge-functions',
    hasLightIcon: true,
    href: '/guides/functions',
    description:
      'Globally distributed, server-side functions to execute your code closest to your users for the lowest latency.',
  },
]
export default function Page() {
  return (
    <>
    <HomePageCover />
    <div className='blog prose prose-lg prose-slate prose-violet relative mx-auto 
    w-full max-w-full prose-headings:mt-16 prose-headings:font-semibold  '>
      <h2 id="v1-to-v2" className="group cursor-pointer">
   
        <a href="#v1-to-v2" aria-hidden="true" tabindex="-1">
          <span class="icon icon-link"></span>
        </a>
        Products
      </h2>
      {/* <h2 className="max-w-xl">  Products</h2> */}

      <div className="notFill  grid grid-cols-12 gap-6 not-prose [&_svg]:text-brand-1100 [&_svg]dark:text-brand-900">
        {products.map((product) => {
          return (
            <Link
              legacyBehavior
              href={product.href}
              key={product.title}
              passHref
            >
              <a className={product.span ?? 'col-span-12 md:col-span-4'}>
                <GlassPanel
                  {...product}
                  icon={
                    <HomeMenuIconPicker
                      icon={product.icon}
                      width={18}
                      height={18}
                    />
                  }
                  background={true}
                  showIconBg={true}
                  showLink={false}
                >
                  {product.description}
                </GlassPanel>
              </a>
            </Link>
          )
        })}
      </div>
      <div className="flex flex-col gap-6 py-12 border-b">

<div className="col-span-4 flex flex-col gap-1 [&_h2]:m-0 [&_h3]:m-0">

  ### Additional resources

</div>

<div className="flex flex-col lg:grid grid-cols-12 gap-6 py-12 border-b">

<div className="col-span-4 flex flex-col gap-1 [&_h2]:m-0 [&_h3]:m-0">

  <div className="md:max-w-xs 2xl:max-w-none">
    <div className="flex items-center gap-3 mb-3 text-brand-1100 dark:text-brand-900">
      {/* <IconBackground>
        <HomeMenuIconPicker icon="reference-cli" width={18} height={18} />
      </IconBackground> */}
      ## Client Libraries
    </div>
  </div>

</div>

<div className="grid col-span-8 grid-cols-12 gap-6 not-prose">
  {clientLibraries.map((product) => {
    return (
      <Link legacyBehavior href={product.href} key={product.title} passHref>
        <a className={product.span ?? 'col-span-6 md:col-span-4'}>
          <IconPanel
            {...product}
            icon={<HomeMenuIconPicker icon={product.icon} width={18} height={18} />}
            background={true}
            showIconBg={true}
            showLink={false}
          >
            {product.description}
          </IconPanel>
        </a>
      </Link>
    )
  })}
</div>

</div>

<div className="grid grid-cols-12 gap-6 not-prose">
  {additionalResources.map((product) => {
    return (
      <Link legacyBehavior
        href={product.href}
        key={product.title}
        passHref
      >
        <a className={product.span ?? 'col-span-12 md:col-span-6 lg:col-span-3'}>
          <GlassPanel {...product} icon={<HomeMenuIconPicker icon={product.icon} width={18} height={18} />} background={false}>
            {product.description}
          </GlassPanel>
        </a>
      </Link>
    )
  })}
</div>
</div>
      </div>
 </>
  )
}
