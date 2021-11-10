import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Merchant } from '../models/Merchant';

@Service()
export default class MerchantService {
    constructor(@InjectRepository(Merchant) private readonly merchantRepository: Repository<Merchant>) {}

    public async findAllUserMerchants(): Promise<Merchant[]> {
    // 
    // return await this.merchantRepository.findAllUserMerchants();
    return [];
    }
}