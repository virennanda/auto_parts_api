const { Pool } = require('pg');
var { StatusCodes } = require("http-status-codes");

var settings = require("../config.js");

async function getResult(sqlQuery, params = []) {
    var res = await getResultArray(sqlQuery, params) // a is 5
    return res;
}

async function getResultArray(sqlQuery, params = []) {
    return new Promise(function (resolve, reject) {
        let status = StatusCodes.OK;
        let data = [];
        let errorMessage = "";

        pool = new Pool({
            user: settings.dbConnection.user,
            host: settings.dbConnection.host,
            database: settings.dbConnection.database,
            password: settings.dbConnection.password,
            port: settings.dbConnection.port,
        });

        return pool.query(sqlQuery, [...params], (err, result) => {
            if (err) {

                errorMessage = err.message;

                return resolve({
                    status: StatusCodes.OK,
                    data: [],
                    errorMessage
                });
            }

            switch (result.command) {

                case "INSERT":
                    if (result.rowCount > 0) {
                        data = [...result.rows];
                        status = StatusCodes.CREATED
                    }

                    break;
                case "UPDATE":
                    if (result.rowCount > 0) {
                        data = [];
                        status = StatusCodes.ACCEPTED
                    }

                    break;
                case "DELETE":

                    if (result.rowCount > 0) {
                        data = [];
                        status = StatusCodes.NO_CONTENT
                    }

                    break;

                default:
                    if (result.rows.length > 0) {

                        data = result.rows
                        status = StatusCodes.OK
                    } else {
                        data = [];
                        status = StatusCodes.OK
                    }
                    break;
            }

            return resolve({
                status,
                data,
                errorMessage
            });

        })

    });
}

module.exports = {
    getResult
}