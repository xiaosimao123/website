// import '@/css/prism.css'
// import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
 
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import {
  sortPosts,
  coreContent,
  allCoreContent,
} from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors } from 'contentlayer/generated'
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
import { BlogHeader } from '@/components/blog/BlogHeader'

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
  const slug = decodeURI(params.slug.join('/'))
  const post = allBlogs.find((p) => p.slug === slug)
  const authorList = post?.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })
  if (!post) {
    return
  }

  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  const authors = authorDetails.map((author) => author.name)
  let imageList = [siteMetadata.socialBanner]
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  const paths = allBlogs.map((p) => ({ slug: p.slug.split('/') }))

  return paths
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  // Filter out drafts in production
  const sortedCoreContents = allCoreContent(sortPosts(allBlogs))
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
  if (postIndex === -1) {
    return notFound()
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const post = allBlogs.find((p) => p.slug === slug) as Blog
  const authorList = post?.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })
  const mainContent = coreContent(post)
  const jsonLd = post.structuredData
  jsonLd['author'] = authorDetails.map((author) => {
    return {
      '@type': 'Person',
      name: author.name,
    }
  })

  // const Layout = layouts[post.layout || defaultLayout]
  // <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
  // {/* <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} /> */}
  // <Mdx code={post.body.code}  />
  // <TocNavigation headings={post.headings} />
  // </Layout>
  return (

    <div className="relative px-4 py-8 mx-auto max-w-screen-2xl md:px-8 md:py-16 lg:px-0">
    <BlogHeader post={post} />
    <div className="blog prose prose-lg prose-slate prose-violet relative mx-auto w-full max-w-full prose-headings:mt-16 prose-headings:font-semibold prose-a:font-normal prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-gray-200 dark:prose-invert dark:prose-a:text-violet-400 dark:prose-hr:border-gray-800 lg:max-w-[994px] lg:px-16">
    <Mdx code={post.body.code} />
      <hr />
      {/* {post.authors.map((author, index) => (
        <Author key={index} {...author} />
      ))}
      {post.related_posts && <RelatedPosts posts={post.related_posts} />} */}
    </div>
    <div
 
      className="fixed flex top-[146px] left-[20px]"
    >
      <TocNavigation headings={post.headings} />
    
      
    </div>
  </div>


    // <div className="relative w-full mx-auto max-w-screen-2xl lg:flex lg:items-start">
    //   <div className="relative w-full grow">
    //   <DocsHeader tree={[]} breadcrumbs={[]} title={"doc.title"} />
    //     <div className="w-full max-w-3xl p-4 pb-8 mx-auto mb-4 prose docs prose-slate prose-violet shrink prose-headings:font-semibold prose-a:font-normal prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-gray-200 dark:prose-invert dark:prose-a:text-violet-400 dark:prose-hr:border-gray-800 md:mb-8 md:px-8 lg:mx-0 lg:max-w-full lg:px-16">
    //       <Mdx code={post.body.code} />
    //     </div>
    //   </div>
    //   <div
    //     style={{ maxHeight: 'calc(100vh - 128px)' }}
    //     className="sticky top-32  w-80 shrink-0 overflow-y-scroll p-8 pr-16 1.5xl:block"
    //   >
    //     <TocNavigation headings={post.headings} />
    //     <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-t from-white/0 to-white/100 dark:from-gray-950/0 dark:to-gray-950/100" />
    //     <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-white/0 to-white/100 dark:from-gray-950/0 dark:to-gray-950/100" />
    //   </div>

    //   {/* <div
    //     style={{ maxHeight: 'calc(100vh - 128px)' }}
    //     className="sticky top-32 hidden w-80 shrink-0 overflow-y-scroll p-8 pr-16 1.5xl:block"
    //   >
    //     <TocNavigation headings={post.headings} />
    //     <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-t from-white/0 to-white/100 dark:from-gray-950/0 dark:to-gray-950/100" />
    //     <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-white/0 to-white/100 dark:from-gray-950/0 dark:to-gray-950/100" />
    //   </div> */}
    // </div>
  )
}
