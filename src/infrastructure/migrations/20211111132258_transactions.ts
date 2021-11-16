import { Knex } from 'knex';
export async function up(knex: Knex): Promise<void> {
    await knex.transaction(async (trx) => {
        await trx.schema.createTable('transactions', function (table) {
          table.uuid('id').unique().notNullable();
          table.uuid('user_id').notNullable();
          table.uuid('merchant_id').notNullable();
    
          table.bigInteger('amount').notNullable();
          table.bigInteger('date').notNullable();
          table.text('description').notNullable();
    
          // table.primary(['user_id', 'merchant_id']);
    
          table.timestamps(true, true);
          table.index(['date', 'user_id', 'merchant_id']);
        });
      });
      await knex.seed.run();
}
export async function down(knex: Knex): Promise<void> {
    await knex.transaction(async (trx) => {
        await trx.schema.dropTableIfExists('transactions');
      });
}