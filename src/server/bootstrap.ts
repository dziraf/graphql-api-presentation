import http from 'http';

import express from 'express';

export const bootstrap = (): http.Server => {
  const app = express();

  const httpServer = http.createServer(app);

  return httpServer;
};
