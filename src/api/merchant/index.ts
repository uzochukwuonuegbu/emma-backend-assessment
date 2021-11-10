import { NextFunction, Request, Response, Router } from 'express';
import { Container } from 'typedi';
import { MerchantService } from '../../services/merchant';
const route = Router();

export default (app: Router) => {
  app.use('/merchants', route);

  route.get(
    '/users/:{id}',
    async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const merchantServiceInstance = Container.get(MerchantService);
            const userMerchants = await merchantServiceInstance.findAllUserMerchants();
            return res.json({ merchants: userMerchants }).status(200);
        } catch (e) {
            console.log(' error ', e);
            return next(e);
        }
    },
  );
};