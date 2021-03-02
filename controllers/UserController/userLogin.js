const { StatusCodes } = require('http-status-codes');
const { VALIDATE_USER_LOGIN } = require('./queries');
const { jwtConfig: { secretKey } } = require('../../config');
const jwt = require("jsonwebtoken");
const dbConnection = require('../../utilities/postgresql-connection');

const validateUserLogin = async (req, res) => {
    const { email, password } = req.body;

    return new Promise((resolve, reject) => {

        dbConnection.getResult(VALIDATE_USER_LOGIN, [email, password])
            .then(result => {
                if (result.data.length > 0) {
                    const token = generateToken(result.data[0]);
                    return resolve({
                        data: [{ token }],
                        status: StatusCodes.OK,
                        errorMessage: ""
                    })
                } else {
                    return resolve({
                        data: [],
                        status: StatusCodes.NOT_FOUND,
                        errorMessage: "Invalid Credentials"
                    })
                }
            });
    });
}

const generateToken = (user) => {
    return jwt.sign(
        {
            id: user.user_id,
            email: user.email,
        },
        secretKey,
        { expiresIn: "4h" }
    );
};

module.exports = {
    validateUserLogin
}