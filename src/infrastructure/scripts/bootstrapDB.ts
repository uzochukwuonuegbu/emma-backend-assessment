import { DbClass } from '../database';

const knexConfig = require('../../../knexfile');

export async function bootstrapDB(): Promise<void> {
  const db = new DbClass();
  const dbClient = db.createConnectionPool();
  await dbClient.migrate.latest(knexConfig);
  await dbClient.destroy();
}

export async function teardownDB(): Promise<void> {
  const db = new DbClass();
  const dbClient = db.createConnectionPool();
  await dbClient.migrate.rollback(knexConfig, true); // Rollback all migrations
  await dbClient.destroy();
}

export async function truncateTable(): Promise<void> {
  const db = new DbClass();
  const dbClient = db.createConnectionPool();

  await dbClient.raw(`TRUNCATE TABLE users`);
  await dbClient.raw(`TRUNCATE TABLE merchants`);
  await dbClient.raw(`TRUNCATE TABLE transactions`);

  await dbClient.destroy();
}
