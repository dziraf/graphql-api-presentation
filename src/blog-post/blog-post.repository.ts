import { EntityRepository, Repository } from 'typeorm';

import { BlogPost } from './blog-post.entity';

@EntityRepository(BlogPost)
export class BlogPostRepository extends Repository<BlogPost> {}
