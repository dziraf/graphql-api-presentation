import pubsub from "../../../../utils/pubsub";

const commentAdded = {
  subscribe: () => pubsub.asyncIterator(['COMMENT_ADDED']),
};

export default commentAdded;
