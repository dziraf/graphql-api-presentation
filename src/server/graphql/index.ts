import path from 'path';
import fs from 'fs';

import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { Express, json } from 'express';

import { commentsLoader } from './loaders/commentsLoader';
import { resolvers } from './resolvers';

const schemaPath = path.join(__dirname, '../../../schema.graphql');
const typeDefs = fs.readFileSync(schemaPath, 'utf8');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});

export const setupGraphQLServer = (app: Express): ApolloServer => {
  const apollo = new ApolloServer({
    schema,
    context: () => {
      const loaders = {
        commentsLoader: commentsLoader(),
      };

      return {
        loaders,
      };
    },
  });

  app.use('/graphql', json());
  apollo.applyMiddleware({ app, path: '/graphql' });

  return apollo;
};
