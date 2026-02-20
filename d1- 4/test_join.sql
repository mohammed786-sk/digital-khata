SELECT customers.customer_name,
transactions.item_name,
transactions.amount
FROM customers
INNER JOIN transactions
ON customers.id = transactions.customer_id;

SELECT customers.customer_name,
FROM customers
INNER JOIN transactions
ON customers.id = transactions.customer_id;
order by amount desc limit 1;



    