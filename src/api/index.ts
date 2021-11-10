import { Router } from 'express';
import merchant from './merchant';

const router = Router();
merchant(router);

export default router;