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
        // const { user, date } = queryParams;
        // const d = new Date();
        // const newDate = String(d.setMonth(d.getMonth()-1));
        // console.log({data:d});
        const merchants = await this.dbInstance
        .select('*')
        // .sum('amount')
        .from('transactions')
        // .where('user_id', '6c84fb90-12c4-11e1-840d-7b25c5ee775a')
        // .where('created_at', 1636718400)
        // .innerJoin('merchants', 'transactions.merchant_id', 'merchants.id')
        // group merchants by the amount spent
        // use each amount(per merchant) to rank, considering the toal amount spent on
        return merchants;
    }
}
