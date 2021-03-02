const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, jwtConfig.secretKey);


        if (decodedToken) {
            next();
        } else {
            throw 'Invalid user ID';
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};