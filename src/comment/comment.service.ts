import { getCustomRepository } from 'typeorm';
import { validate } from 'class-validator';

import { ValidationError } from '../utils/errors';

import { CommentRepository } from './comment.repository';
import { Comment, CommentData } from './comment.entity';

export class CommentService {
  private commentRepository;

  constructor() {
    this.commentRepository = getCustomRepository(CommentRepository);
  }

  public async addComment(
    data: Pick<CommentData, 'content' | 'blogPostId'>,
  ): Promise<Comment> {
    const comment = Comment.create(data);

    const errors = await validate(comment);
    if (errors.length) {
      throw new ValidationError('AddCommentValidationError', errors);
    }

    await this.commentRepository.save(comment);

    return comment;
  }
}
