import { validate } from 'class-validator';
import { getCustomRepository } from 'typeorm';

import { ValidationError } from '../utils/errors';

import { BlogPostData, BlogPost } from './blog-post.entity';
import { BlogPostRepository } from './blog-post.repository';

export class BlogPostService {
  private blogPostRepository;

  constructor() {
    this.blogPostRepository = getCustomRepository(BlogPostRepository);
  }

  public async addBlogPost(
    data: Pick<BlogPostData, 'content'>,
  ): Promise<BlogPost> {
    const blogPost = BlogPost.create(data);

    const errors = await validate(blogPost);
    if (errors.length) {
      throw new ValidationError('AddBlogPostValidationError', errors);
    }

    await this.blogPostRepository.save(blogPost);

    return blogPost;
  }
}
