import http from 'http';

import express from 'express';

import { setupGraphQLServer } from './graphql';

export const bootstrap = (): http.Server => {
  const app = express();

  const graphQLServer = setupGraphQLServer(app);

  const httpServer = http.createServer(app);
  graphQLServer.installSubscriptionHandlers(httpServer);

  return httpServer;
};
