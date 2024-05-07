/* eslint-disable react/jsx-key */
import { GlassPanel } from '@/components/ui/GlassPanel'
import HomeMenuIconPicker from '@/components/ui/HomeMenu/HomeMenuIconPicker'
import Link from 'next/link'

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
    <div  >
   
      <div className="max-w-xl">  Products</div>

      <div className="grid grid-cols-12 gap-6 not-prose [&_svg]:text-brand-1100 [&_svg]dark:text-brand-900">
        {products.map((product) => {
            return (
                <Link legacyBehavior href={product.href} key={product.title} passHref>
                <a className={product.span ?? 'col-span-12 md:col-span-4'}>
                <GlassPanel {...product} icon={<HomeMenuIconPicker icon={product.icon} width={18} height={18} />} background={true} showIconBg={true} showLink={false}>
                {product.description}
              </GlassPanel>
          </a>
          </Link>
            )
        })}
     </div>
 
 
 
  </div>)
}
