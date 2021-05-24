const blogPostsCount = process.env.FAKE_BLOG_POSTS_COUNT ? Number(process.env.FAKE_BLOG_POSTS_COUNT) : 50;
const commentsPerPostCount = process.env.FAKE_COMMENTS_COUNT ? Number(process.env.FAKE_COMMENTS_COUNT) : 20;

export default {
  blogPostsCount,
  commentsPerPostCount,
};
