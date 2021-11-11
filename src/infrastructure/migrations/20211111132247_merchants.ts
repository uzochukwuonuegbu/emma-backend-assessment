import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.transaction(async (trx) => {
        await trx.schema.createTable('merchants', function (table) {
          table.uuid('id').unique().notNullable();
    
          table.text('display_name').notNullable();
          table.text('icon_url').notNullable();
          table.text('funny_gif_url').notNullable()
    
          table.timestamps(true, true);
          table.index('created_at');
        });
      });
}


export async function down(knex: Knex): Promise<void> {
    await knex.transaction(async (trx) => {
        await trx.schema.dropTableIfExists('merchants');
      });
}

