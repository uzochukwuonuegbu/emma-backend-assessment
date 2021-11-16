import Container from 'typedi';
import { MerchantController } from '../merchant/controller';

describe('Merchant Controller', () => {
  let controller: MerchantController;
  beforeEach(async () => {

    controller = Container.get(MerchantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});