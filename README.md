# Steps Taken To Build The Query:

1. ### Get all merchants the use spend money on within a period (name: derived_table):
 - SELECT transactions.merchant_id AS merchant_id,
SUM(transactions.amount) AS logged_in_user_amount_spent FROM transactions WHERE transactions.user_id='${user}' 
AND transactions.date>'${date}' GROUP BY transactions.merchant_id

2. ### Query transactions and sum other users amount spent of the merchants gotten from the first sub-query:
 - FROM (SELECT transactions.merchant_id, transactions.user_id, logged_in_user_amount_spent, SUM(transactions.amount) AS other_user_amount_spent FROM transactions, (derived_table) WHERE transactions.merchant_id=derived_table.merchant_id

3. ### Calculate percentile rank for each merchant returned using the formular:
 - (no of users who spent less amount on each merchant) / (total number of users who spent on each merchant)
 - CAST(SUM(CASE WHEN logged_in_user_amount_spent > other_user_amount_spent THEN 1 ELSE 0 END) as FLOAT) / COUNT(DISTINCT user_id) AS   percentile_rank


# How I ensured scalability for my application:

1. Avoided the use of window functions while building the queries.

2. Setup indexes on user_id, merchant_id and date for transactions table, because it's a large table. So, queries are generally faster because we're reducing the time our database needs to locate the data for a the query.

3. Avoided long running loops in the business logic layer, and used sub-queries instead.

4. Postgres handles caching quite well, but, I implemented a simple caching layer using node-cache, and this improves application layer 
performance. Implementing a caching layer would definitely improve performance with these tasks:

    i.  multiple systems and services on behalf of end users (to display data in the app)
    ii. automated batch jobs that generate weekly or monthly reports for all users.

5. Introduced best practices like using dependency injection to help easy code maintainance, dockerized and implemented unit tests (proofs of concepts).


# Run the project:

_Note:_ _Make sure to have Docker installed_

- RUN: **docker-compose up -d** (installs NodeJS and postgres, creates database and tables needed, then seeds them)
- RUN: **yarn start** (Start the web application)

# Tests:

- Run: **npm test**


