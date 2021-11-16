import e from 'express';
import { Knex } from 'knex';
import { Cache } from '../infrastructure/cache';
import { QueryParams } from 'pd/types';
import { Service } from 'typedi';
import { DbClass } from '../infrastructure/database'
import { findUserMerchantsAndPercentileRank } from './sqlQueries';


@Service()
export default class MerchantRepository {
    dbInstance: Knex<any, unknown[]>;
    constructor(private readonly dbClass: DbClass, private readonly cache: Cache) {
        this.dbInstance = this.dbClass.createConnectionPool();
    }

    public async findUserMerchantsAndPercentileRank(queryParams: QueryParams): Promise<any[]> {
        const { user = '', date = '' } = queryParams;
        try {
            const query = findUserMerchantsAndPercentileRank(user, date);
            const cachedData = await this.cache.getAsync(query);
            if (cachedData == undefined) {
                const { rows } = await this.dbInstance.raw(findUserMerchantsAndPercentileRank(user, date));
                await this.cache.setAsync(query, JSON.stringify(rows), 10000);
                return rows;
            }
            return JSON.parse(cachedData);
        } catch(error) {
            console.log(error);
            throw e;
        }
    }
}
