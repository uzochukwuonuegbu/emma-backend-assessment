import { NextFunction, Request, Response } from "express";
import { QueryParams } from "../../types";
import { Service } from "typedi";
import { MerchantService } from "../../services/merchant";

@Service()
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) { }

  async getAllUserMerchants(req: Request, res: Response, next: NextFunction) {
    const queryParams: QueryParams = {};
    try {
        const { query: { user, date } } = req;
        if (user && date) {
          queryParams.user = user as string;
          queryParams.date = date as string;
        }
        const result = await this.merchantService.findAllUserMerchants(queryParams);
        return res.json(result);
    } catch (e) {
        console.log(' error ', e);
        return next(e);
    }
  }
}
