import 'reflect-metadata';

import { Router } from 'express';
import { Container } from 'typedi';
import { MerchantController } from './controller';
const route = Router();

export default (app: Router) => {
  app.use('/merchants', route);

  const merchantController = Container.get(MerchantController);

  route.get('/', (req, res, next) => merchantController.getAllUserMerchants(req, res, next));
};
