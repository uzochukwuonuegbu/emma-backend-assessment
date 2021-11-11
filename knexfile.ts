const path = require('path');

const { resolve } = path;

const connection = {
  host: 'localhost',
  database: 'emma_backend',
  user: 'postgres',
  password: 'my_password',
  port: 54320,
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