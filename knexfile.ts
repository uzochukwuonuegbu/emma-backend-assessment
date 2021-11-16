const path = require('path');
import config from './src/config';

const { resolve } = path;

const connection = {
  host: 'localhost',
  database: config.db.database,
  user: config.db.user,
  password: config.db.password,
  port: config.db.port,
};

const knexConfig = {
  client: 'postgresql',
  connection,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    extension: 'ts',
    tableName: 'knex_migrations',
    schemaName: 'public',
    // loadExtensions: config.get('knex.migrationExtension'),
    directory: [resolve(__dirname, './src/infrastructure/migrations')],
  },
};

export default knexConfig;