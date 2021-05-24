import { BlogPostService } from './../../../../blog-post/blog-post.service';
import { BlogPostData } from '../../../../blog-post/blog-post.entity';

export default async function addBlogPost(
  _: any,
  args: { data: Pick<BlogPostData, 'content'> },
) {
  const blogPostService = new BlogPostService();
  return blogPostService.addBlogPost(args.data);
}
