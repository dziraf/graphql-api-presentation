import { BlogPostService, BlogPostData } from '../../../../blog-post';

export default async function addBlogPost(
  _: any,
  args: { data: Pick<BlogPostData, 'content'> },
) {
  const blogPostService = new BlogPostService();
  return blogPostService.addBlogPost(args.data);
}
