exports.ADD_NEW_ADDRESS = `
INSERT INTO user_address
(user_id, address_line_1, address_line_2, city, state, pincode, contact_number)
VALUES($1, $2, $3, $4, $5, $6, $7) returning *;

`;
exports.GET_ALL_ADDRESS = `
SELECT address_id, address_line_1, address_line_2, city, state, pincode, contact_number
FROM user_address
WHERE user_id=$1
`;
