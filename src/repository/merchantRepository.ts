import { Knex } from 'knex';
import { QueryParams } from 'pd/types';
import { Service } from 'typedi';
import { DbClass } from '../infrastructure/database'

@Service()
export default class MerchantRepository {
    dbInstance: Knex<any, unknown[]>;
    constructor(private readonly dbClass: DbClass) {
        this.dbInstance = this.dbClass.createConnectionPool();
    }

    public async findAllUserMerchants(queryParams: QueryParams): Promise<any[]> {
        const { user, date } = queryParams;
        // date = 1636502400
        // const d = new Date();
        // const newDate = String(d.setMonth(d.getMonth()-1));
        // console.log({data:d});
        const { rows } = await this.dbInstance.raw(`
        SELECT merchant_id, 
        CAST(SUM(CASE WHEN logged_in_user_amount_spent > other_user_amount_spent THEN 1 ELSE 0 END) as FLOAT) / COUNT(DISTINCT user_id)
        AS percentile_rank 
        FROM (SELECT transactions.merchant_id, transactions.user_id, logged_in_user_amount_spent, SUM(transactions.amount)
        AS other_user_amount_spent
        FROM transactions, (SELECT transactions.merchant_id AS merchant_id, SUM(transactions.amount)
        AS logged_in_user_amount_spent FROM transactions WHERE transactions.user_id='${user}' GROUP BY transactions.merchant_id) AS derived_table
        WHERE transactions.merchant_id=derived_table.merchant_id
        GROUP BY transactions.merchant_id, derived_table.logged_in_user_amount_spent, transactions.user_id) AS final_table
        GROUP BY final_table.merchant_id
        `)
        return rows;
    }
}
