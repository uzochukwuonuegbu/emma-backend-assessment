import MerchantRepository from '../repository/merchantRepository';
import { Service } from 'typedi';
import { FindUserMerchantsAndPercentileRank, QueryParams } from '../types';

@Service('merchantRepository')
export class MerchantService {
    constructor(private readonly merchantRepository: MerchantRepository) {}

    public async findAllUserMerchants(queryParams: QueryParams): Promise<FindUserMerchantsAndPercentileRank[]> {
        try {
            return await this.merchantRepository.findUserMerchantsAndPercentileRank(queryParams);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}