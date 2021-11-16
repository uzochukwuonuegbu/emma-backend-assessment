export const findUserMerchantsAndPercentileRank = (user: string, date: string): string => `
SELECT merchant_id, 
CAST(SUM(CASE WHEN logged_in_user_amount_spent > other_user_amount_spent THEN 1 ELSE 0 END) as FLOAT) / COUNT(DISTINCT user_id)
AS percentile_rank 
FROM (SELECT transactions.merchant_id, transactions.user_id, logged_in_user_amount_spent, SUM(transactions.amount)
AS other_user_amount_spent
FROM transactions, (SELECT transactions.merchant_id AS merchant_id, SUM(transactions.amount)
AS logged_in_user_amount_spent FROM transactions WHERE transactions.user_id='${user}' AND transactions.date>'${date}' GROUP BY transactions.merchant_id) AS derived_table
WHERE transactions.merchant_id=derived_table.merchant_id
GROUP BY transactions.merchant_id, derived_table.logged_in_user_amount_spent, transactions.user_id) AS final_table
GROUP BY final_table.merchant_id
`