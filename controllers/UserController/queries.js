const VALIDATE_USER_LOGIN = `
SELECT 
    user_id,
    email,
    first_name,
    last_name
FROM
    users 
WHERE
    email=$1 AND password=$2
`;


const REGISTER_USER = "INSERT INTO public.users (email, password, mobile_number, first_name, last_name)VALUES($1, $2, $3, $4, $5)";

const ADD_ADDRESS = `INSERT INTO user_address
(user_id, address_line_1, address_line_2, city, state, pincode, contact_number)
VALUES($1,$2,$3,$4,$5,$6,$7);
`;

module.exports = {
    VALIDATE_USER_LOGIN,
    REGISTER_USER,
    ADD_ADDRESS
}