const VALIDATE_USER_LOGIN = `
SELECT 
    user_id,
    email
FROM
    users 
WHERE
    email=$1 AND password=$2
`;


const REGISTER_USER = "INSERT INTO public.users (email, password, mobile_number, first_name, last_name)VALUES($1, $2, $3, $4, $5)";

module.exports = {
    VALIDATE_USER_LOGIN,
    REGISTER_USER
}