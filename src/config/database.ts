const databaseUrl = process.env.DATABASE_URL;
const ssl = process.env.DATABASE_SSL === 'true';
const sync = process.env.DATABASE_SYNC === 'true';

export default {
  databaseUrl,
  ssl,
  sync,
};
