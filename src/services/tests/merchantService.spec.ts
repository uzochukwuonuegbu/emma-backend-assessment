jest.mock('../../repository/merchantRepository');
import MerchantRepository from '../../repository/merchantRepository';
import { MerchantService } from '../merchant';

describe('MerchantService', () => {
    const MerchantRepositoryMock = <jest.Mock<MerchantRepository>>MerchantRepository;
    let merchantRepository = new MerchantRepositoryMock();
    let merchantService: MerchantService;

    beforeEach(async () => {
        jest.restoreAllMocks();

        merchantService = new MerchantService(merchantRepository);
    });

    describe('findAllUserMerchants', () => {
        it('should get all merchants a user spent money on for a period of time', async () => {
            jest.spyOn(merchantRepository, 'findUserMerchantsAndPercentileRank').mockImplementation(() => new Promise((resolve) => resolve([])));

            const queryParams = {
                user: 'xyz',
                date: '1234453443'
            };
            await merchantService.findAllUserMerchants(queryParams);
            expect(merchantRepository.findUserMerchantsAndPercentileRank).toHaveBeenCalled();
        });
    });
});
