// import { Knex } from 'knex';
// import { COMMANDS_TABLE } from '../../../infrastructure/repositories/command';

// export async function up(knex: Knex): Promise<void> {
//   await knex.transaction(async (trx) => {
//     await trx.schema.createTable(COMMANDS_TABLE, function (table) {
//       table.uuid('id').unique().notNullable();
//       table.uuid('parentCommandId').notNullable();
//       table.uuid('distributorId').notNullable();

//       table.text('name').notNullable();
//       table.text('actorId').notNullable();
//       table.text('serviceName').notNullable().defaultTo('sfs-payment');
//       table.jsonb('metadata').notNullable();
//       table.jsonb('payload').notNullable();
//       table.jsonb('result');

//       table.primary(['parentCommandId', 'distributorId']);

//       table.timestamps(true, true);
//       table.index('created_at');
//     });
//   });
// }

// export async function down(knex: Knex): Promise<void> {
//   await knex.transaction(async (trx) => {
//     await trx.schema.dropTableIfExists(COMMANDS_TABLE);
//   });
// }
