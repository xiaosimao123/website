import { Blog, allBlogs } from 'contentlayer/generated';
 

export async function getAllPosts(): Promise<Blog[]> {
  return allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

 
 
/**
 * 
 */
export async function getPostData(fileName: string): Promise<Blog> {
  const post = allBlogs.find((post) => post.slug === fileName);
  if (!post) throw new Error(`${fileName}no post find`);
  return post;
}

 