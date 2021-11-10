import { Service, Inject } from 'typedi';
import { Merchant } from '../models/Merchant';

@Service()
export default class MerchantService {
  constructor(@Inject(Merchant) private readonly merchantRepository: Merchant) {}

  public async findAllUserMerchants(): Promise<Merchant[]> {
    return await this.merchantRepository.findAllUserMerchants();
  }
}