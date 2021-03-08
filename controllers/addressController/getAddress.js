const dbConnection = require("../../utilities/postgresql-connection");
const { GET_ALL_ADDRESS } = require("./queries");

exports.getAllAddress = async (req, res) => {
  return new Promise((resolve, reject) => {
    dbConnection
      .getResult(GET_ALL_ADDRESS, [req.user.id])
      .then((result) => resolve(result));
  });
};
