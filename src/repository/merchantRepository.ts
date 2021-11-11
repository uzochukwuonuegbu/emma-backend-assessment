import { Knex } from 'knex';
import { Service } from 'typedi';
import { DbClass } from '../infrastructure/database'

@Service()
export default class MerchantRepository {
    dbInstance: Knex<any, unknown[]>;
    constructor(private readonly dbClass: DbClass) {
        this.dbInstance = this.dbClass.createConnectionPool();
    }

    public async findAllUserMerchants(): Promise<string> {
        return 'Merchants'
    }
}
