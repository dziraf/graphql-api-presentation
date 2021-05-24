// import { classToPlain } from 'class-transformer';
import { CommentService } from './../../../../comment/comment.service';
import { CommentData } from '../../../../comment';
// import pubsub from '../../../../utils/pubsub';

export default async function addComment(
  _: any,
  args: { data: Pick<CommentData, 'content' | 'blogPostId'> },
) {
  const commentService = new CommentService();
  const comment = commentService.addComment(args.data);

  // pubsub.publish('COMMENT_ADDED', {
  //   commentAdded: classToPlain(comment),
  // });

  return comment;
}
