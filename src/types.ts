export interface QueryParams {
    user?: string;
    date?: string;
  }

export interface FindUserMerchantsAndPercentileRank {
  merchant_id: string;
  percentile_rank: number
}