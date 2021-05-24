import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import * as config from '.';

module.exports = {
  url: config.database.databaseUrl,
  name: 'default',
  type: 'postgres',
  ssl: config.database.ssl === true ? { require: true } : undefined,
  logging: 'all',
  cli: { migrationsDir: './src/db/migrations' },
  migrations: ['./dist/db/migrations/*.js'],
  entities: ['./dist/**/*.entity.js'],
  migrationsRun: false,
  migrationsTableName: 'migrations',
  migrationsTransactionMode: 'each',
  synchronize: config.database.sync === true,
} as PostgresConnectionOptions;
