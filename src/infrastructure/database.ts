import { Knex, knex } from 'knex';
import knexConfig from '../../knexfile';

export class DbClass {
  createConnectionPool(): Knex {
    return knex(knexConfig);
  }

  async checkConnection(db: Knex) {
    try {
      await db.raw('SELECT 1');
      console.log('PostgreSQL connected');
    } catch (error: any) {
      const message = 'PostgreSQL not connected';
  
      console.error(`${message}:`, error);
  
      throw Error(message);
    }
  }
}
