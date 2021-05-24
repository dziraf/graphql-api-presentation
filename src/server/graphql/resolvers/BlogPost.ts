export default {
  comments(source: { id: number }, _args: unknown, context: any) {
    return context.loaders.commentsLoader.load(source.id);
  },
};
