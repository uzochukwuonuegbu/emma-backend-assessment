import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Merchant } from '../entities/Merchant';

@Service()
export class MerchantRepository {
    constructor(@InjectRepository(Merchant) private readonly merchantEntity: Repository<Merchant>) {}

    public async findAllUserMerchants(): Promise<Merchant[]> {
        const merchants = await this.merchantEntity.query(`SELECT * FROM MERCHANT`);
        return merchants;
    }
}
