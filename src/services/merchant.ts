import MerchantRepository from '../repository/merchantRepository';
import { Service } from 'typedi';
import { QueryParams } from '../types';

@Service('merchantRepository')
export class MerchantService {
    constructor(private readonly merchantRepository: MerchantRepository) {}

    public async findAllUserMerchants(queryParams: QueryParams): Promise<any> {
        return await this.merchantRepository.findUserMerchantsAndPercentileRank(queryParams);
    }
}