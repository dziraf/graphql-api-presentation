import { CommentData } from '../../../../comment';

export default async function addComment(
  _: any,
  _args: { data: Pick<CommentData, 'content' | 'blogPostId'> },
) {
  return null;
}
