import { NextFunction, Request, Response } from "express";
import { Service } from "typedi";
import { MerchantService } from "../../services/merchant";

@Service()
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) { }

  async getAllUserMerchants(req: Request, res: Response, next: NextFunction) {
    try {
        const { query } = req;
        const result = await this.merchantService.findAllUserMerchants();
        return res.json(result);
    } catch (e) {
        console.log(' error ', e);
        return next(e);
    }
  }
}
