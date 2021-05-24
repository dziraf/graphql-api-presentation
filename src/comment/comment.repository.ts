import { EntityRepository, Repository } from 'typeorm';
import { groupBy } from 'lodash';

import { Comment } from './comment.entity';

@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment> {
  async getByPostsIds(postsIds: readonly number[]) {
    if (!postsIds.length) return [];

    const query = this.manager
      .createQueryBuilder(Comment, 'comments')
      .where('comments.blog_post_id IN (:...postsIds)', { postsIds });

    const comments = await query.getMany();

    return groupBy(comments, 'blogPostId');
  }
}
