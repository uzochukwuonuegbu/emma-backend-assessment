import { MerchantRepository } from '../repository/merchantRepository';
import { Service } from 'typedi';

@Service('merchantRepository')
export class MerchantService {
    constructor(private readonly merchantRepository: MerchantRepository) {}

    public async findAllUserMerchants(): Promise<any> {
        return await this.merchantRepository.findAllUserMerchants();
    }
}