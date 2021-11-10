import { MerchantRepository } from 'pd/repository/merchantRepository';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Merchant } from '../entities/Merchant';

@Service()
export class MerchantService {
    constructor(@InjectRepository(MerchantRepository) private readonly merchantRepository: MerchantRepository) {}

    public async findAllUserMerchants(): Promise<Merchant[]> {
        return await this.merchantRepository.findAllUserMerchants();
    }
}