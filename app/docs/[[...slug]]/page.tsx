// import '@/css/prism.css'
// import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
 
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import {
  sortPosts,
  coreContent,
  allCoreContent,
} from 'pliny/utils/contentlayer'
import { allDocs } from 'contentlayer/generated'
import type { Authors, Blog } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/mdx/mdx'
import { TocNavigation } from '@/components/TocNavigation'
import { DocsNavigation } from '@/components/docs/DocsNavigation'
import { DocsHeader } from '@/components/docs/DocsHeader'
import { buildDocsTree } from 'utils/build-docs-tree'
import { DocsFooter } from '@/components/docs/DocsFooter'
 
 

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  // const slug = decodeURI(params.slug.join('/'))
  // const post = allDocs.find((p) => p.slug === slug)

  // if (!post) {
  //   return
  // }

  // let imageList = [siteMetadata.socialBanner]
  // if (post.images) {
  //   imageList = typeof post.images === 'string' ? [post.images] : post.images
  // }
  // const ogImages = imageList.map((img) => {
  //   return {
  //     url: img.includes('http') ? img : siteMetadata.siteUrl + img,
  //   }
  // })

  return {
    // title: post.title,
    // description: post.summary,
    // openGraph: {
    //   title: post.title,
    //   description: post.summary,
    //   siteName: siteMetadata.title,
    //   locale: 'en_US',
    //   type: 'article',

    //   url: './',
    //   images: ogImages,
    // },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: post.title,
    //   description: post.summary,
    //   images: imageList,
    // },
  }
}

// export const generateStaticParams = async () => {
//   const paths = allDocs.map((p) => ({ slug: p.url_path_without_id.split('/') }))

//   return paths
// }

export default async function Page({ params }: { params: { slug: string[] } }) {

 
  let path = ''
  let breadcrumbs: any = []
 
  let slugs = params.slug ? ['docs', ...params.slug] : []
  for (const slug of slugs) {
    path += `/${slug}`
    const breadcrumbDoc = allDocs.find(
      (_) => _.url_path === path || _.url_path_without_id === path
    )
    if (!breadcrumbDoc) continue
    breadcrumbs.push({
      path: breadcrumbDoc.url_path_without_id,
      title: breadcrumbDoc?.nav_title || breadcrumbDoc?.title,
    })
  }
  const pagePath = params.slug?.join('/') ?? ''
  let doc
  // If on the index page, we don't worry about the global_id
  if (pagePath === '') {
    doc = allDocs.find((_) => _.url_path === '/docs') 
  }else{
    doc = allDocs.find((p) => p.url_path_without_id === '/docs/' + pagePath)
  }

  // if(path == ''){
  //   doc = allDocs.find((p) => p.url_path_without_id === '/docs/' + path)
  // }
  // else{
  //   doc = allDocs.find((p) => p.url_path_without_id === '/docs/' + path)
  // }
  const tree = buildDocsTree(allDocs)

  return (
 
    <div className="relative w-full mx-auto max-w-screen-2xl lg:flex lg:items-start">
    <div
      style={{ height: 'calc(100vh - 64px)' }}
      className="sticky hidden border-r border-gray-200 top-16 shrink-0 dark:border-gray-800 lg:block"
    >
      <div className="h-full p-8 pl-16 -ml-3 overflow-y-scroll">
        <DocsNavigation tree={tree} />
      </div>
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-t from-white/0 to-white/100 dark:from-gray-950/0 dark:to-gray-950/100" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-white/0 to-white/100 dark:from-gray-950/0 dark:to-gray-950/100" />
    </div>

    <div className="relative w-full grow">
      <DocsHeader tree={tree} breadcrumbs={breadcrumbs} title={doc.title} />
      <div className="w-full max-w-3xl p-4 pb-8 mx-auto mb-4 prose docs prose-slate prose-violet shrink prose-headings:font-semibold prose-a:font-normal prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-gray-200 dark:prose-invert dark:prose-a:text-violet-400 dark:prose-hr:border-gray-800 md:mb-8 md:px-8 lg:mx-0 lg:max-w-full lg:px-16">
 
      <Mdx code={doc.body.code} />
      {/* {doc.show_child_cards && (
              <>
                <hr />
                <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2">
                  {childrenTree.map((card: any, index: number) => (
                    <div key={index} onClick={() => router.push(card.urlPath)} className="cursor-pointer">
                      <ChildCard className="h-full p-6 py-4 hover:border-violet-100 hover:bg-violet-50 dark:hover:border-violet-900/50 dark:hover:bg-violet-900/20">
                        <h3 className="mt-0 no-underline">{card.title}</h3>
                        {card.label && <Label text={card.label} />}
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          <p>{card.excerpt}</p>
                        </div>
                      </ChildCard>
                    </div>
                  ))}
                </div>
              </>
            )} */}
      <DocsFooter doc={doc} />
      </div>
    </div>
    <div
      style={{ maxHeight: 'calc(100vh - 128px)' }}
      className="sticky top-32  w-80 shrink-0 overflow-y-scroll p-8 pr-16 1.5xl:block"
    >
      <TocNavigation headings={doc.headings} />
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-t from-white/0 to-white/100 dark:from-gray-950/0 dark:to-gray-950/100" />
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-white/0 to-white/100 dark:from-gray-950/0 dark:to-gray-950/100" />
    </div>
  </div>
  )
}
