const dbConnection = require("../../utilities/postgresql-connection");
const { ADD_NEW_ADDRESS } = require("./queries");

exports.addAddress = async (req, res) => {
  const {
    address_line_1,
    address_line_2,
    city,
    state,
    pincode,
    contact_number,
  } = req.body;

  return new Promise((resolve, reject) => {
    dbConnection
      .getResult(ADD_NEW_ADDRESS, [
        req.user.id,
        address_line_1,
        address_line_2,
        city,
        state,
        pincode,
        contact_number,
      ])
      .then((result) => {
        console.log(result);
        return resolve(result);
      });
  });
};
