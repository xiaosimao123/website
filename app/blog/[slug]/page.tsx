 
 
import {
  getAllPosts,
 
  getPostData,
 
} from '@/service/posts';
import { getMDXComponent } from 'next-contentlayer/hooks';

type Props = {
  params: { slug: string };
};
 

export async function generateMetadata({ params: { slug } }: Props) {
  const { title, description, tags } = await getPostData(slug);
  return {
    title,
    description,
 
  };
}

export default async function PostDetailPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
 
  const MDXContent = getMDXComponent(post.body.code || '')

  return (
    <div>
    <MDXContent/>
    </div>

  //  <MDXContent/>
  );
}

//  
// export async function generateStaticParams() {
//   const posts = await getAllPosts();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }
