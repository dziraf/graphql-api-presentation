import { BlogPostData } from '../../../../blog-post/blog-post.entity';

export default async function addBlogPost(
  _: any,
  _args: { data: Pick<BlogPostData, 'content'> },
) {
  return null;
}
