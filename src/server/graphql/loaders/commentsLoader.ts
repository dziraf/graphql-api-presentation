import DataLoader from 'dataloader';
import { getCustomRepository } from 'typeorm';

import { CommentRepository } from '../../../comment/comment.repository';

export const commentsLoader = () =>
  new DataLoader(async (postsIds: readonly number[]) => {
    const commentRepository = getCustomRepository(CommentRepository);
    const commentsGroupedByPostId = await commentRepository.getByPostsIds(
      postsIds,
    );

    return postsIds.map((postId) => commentsGroupedByPostId[postId] ?? []);
  });
