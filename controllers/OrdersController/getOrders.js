const dbConnection = require("../../utilities/postgresql-connection");
const { GET_ALL_ORDERS } = require("./queries");

exports.getOrders = async (req, res) => {
  return new Promise((resolve, reject) => {
    dbConnection
      .getResult(GET_ALL_ORDERS, [req.user.id])
      .then((result) => resolve({ ...result }));
  });
};
