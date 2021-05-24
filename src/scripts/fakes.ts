import { createConnection, getCustomRepository } from 'typeorm';
import faker from 'faker';

import * as config from '../config';
import { BlogPost, BlogPostRepository } from '../blog-post';
import { Comment } from '../comment';

const ormconfig = require('../config/ormconfig');

const fakes = async () => {
  await createConnection(ormconfig);
  const repository = getCustomRepository(BlogPostRepository);
  const data = Array.from({ length: config.fakes.blogPostsCount }, () => {
    const post = new BlogPost();
    post.content = faker.lorem.paragraph();
    post.comments = Array.from({ length: config.fakes.commentsPerPostCount }, () => {
      const comment = new Comment();
      comment.content = faker.lorem.sentence();

      return comment;
    });

    return post;
  });

  await repository.save(data);
}

fakes()
  .then(() => process.exit(0))
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
    process.exit(1);
  })