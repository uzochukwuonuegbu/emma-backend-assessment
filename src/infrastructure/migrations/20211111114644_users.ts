import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.transaction(async (trx) => {
        await trx.schema.createTable('users', function (table) {
          table.uuid('id').unique().notNullable();
    
          table.text('first_name').notNullable();
          table.text('last_name').notNullable();
    
          table.timestamps(true, true);
          table.index('created_at');
        });
      });
      await knex.seed.run();
}


export async function down(knex: Knex): Promise<void> {
    await knex.transaction(async (trx) => {
        await trx.schema.dropTableIfExists('users');
      });
}

