import { CommentService } from './../../../../comment/comment.service';
import { CommentData } from '../../../../comment';

export default async function addComment(
  _: any,
  args: { data: Pick<CommentData, 'content' | 'blogPostId'> },
) {
  const commentService = new CommentService();
  return commentService.addComment(args.data);
}
