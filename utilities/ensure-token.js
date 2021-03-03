const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');

exports.ensureToken = (req, res, next) => {
        const authHeader=req.headers.authorization;
        
        if(authHeader){
            const token = authHeader.split(' ')[1];

            jwt.verify(token,jwtConfig.secretKey,(err,user)=>{
                if(err){
                        return res.status(StatusCodes.OK).json({
                        status:StatusCodes.UNAUTHORIZED,
                        data:[],
                        errorMessage:err.message
                    });
                }

                req.user=user;
                next();
            })
        }
        else{
            return res.status(StatusCodes.OK).json({
                status:StatusCodes.UNAUTHORIZED,
                data:[],
                errorMessage:"Authorization Token is missing !!"
            });
        }
    

    }
