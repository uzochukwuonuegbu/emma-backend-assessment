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
        // merchantRepository = new MerchantRepository(new DbClass());
    });

    describe('findAllUserMerchants', () => {
        it('should get all merchants a user spent money on for a period of time', async () => {
            jest.spyOn(merchantRepository, 'findAllUserMerchants').mockImplementation(() => new Promise((resolve) => resolve('')));

            await merchantService.findAllUserMerchants();
            expect(merchantRepository.findAllUserMerchants).toHaveBeenCalled();
        });
    });
});
