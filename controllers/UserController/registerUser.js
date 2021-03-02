const { StatusCodes } = require('http-status-codes');
const dbConnection = require('../../utilities/postgresql-connection');
const { REGISTER_USER } = require('./queries');

const registerUser = async (req, res) => {
    const { email, password, mobile_number, first_name, last_name }
        = req.body;

    return new Promise((resolve, reject) => {
        dbConnection.getResult(REGISTER_USER, [email, password, mobile_number, first_name, last_name])
            .then(result => {
                return resolve(result);
            });
    })
}
module.exports = {
    registerUser
}