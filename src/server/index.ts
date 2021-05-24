import 'reflect-metadata';
import { createConnection } from 'typeorm';

import * as config from '../config';

import { bootstrap } from './bootstrap';

const ormconfig = require('../config/ormconfig');

const start = async (): Promise<void> => {
  await createConnection(ormconfig);

  const server = bootstrap();
  server.listen(config.server.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is listening on port: ${config.server.port}`);
  });
};

start();
