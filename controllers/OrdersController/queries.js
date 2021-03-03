exports.ADD_ORDER=`
INSERT INTO orders_tbl
(order_date, user_id, address_line_1, address_line_2, city, state, pincode, contact_number)
VALUES(CURRENT_TIMESTAMP, $1, $2, $3, $4, $5, $6, $7) RETURNING order_id;
`;