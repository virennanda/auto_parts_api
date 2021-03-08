const { StatusCodes } = require("http-status-codes");
const dbConnection = require("../../utilities/postgresql-connection");
const { ADD_ORDER, GET_USER_ADDRESS, ADD_ORDER_DETAILS } = require("./queries");

exports.addOrder = async (req, res) => {
  let { address_id, parts } = req.body;
  let address;
  await dbConnection
    .getResult(GET_USER_ADDRESS, [address_id])
    .then((result) => {
      if (result.data.length > 0) {
        address = result.data[0];
      } else {
        return res.json({ ...result, errorMessage: "Invalid Address" });
      }
    });

  if (typeof address === "undefined") return;

  return new Promise((resolve, reject) => {
    let {
      address_line_1,
      address_line_2,
      city,
      state,
      pincode,
      contact_number,
    } = address;

    dbConnection
      .getResult(ADD_ORDER, [
        req.user.id,
        address_line_1,
        address_line_2,
        city,
        state,
        pincode,
        contact_number,
      ])
      .then(async (result) => {
        if (result.data.length === 0) {
          return resolve({
            ...result,
            errorMessage: "There was some problem in Adding Your Order",
          });
        }
        let { order_id } = result.data[0];
        let orderData = [];

        for (let index = 0; index < parts.length; index++) {
          let part = parts[index];

          let result = await dbConnection.getResult(ADD_ORDER_DETAILS, [
            order_id,
            part.part_id,
            part.qty,
            part.qty * part.part_price,
          ]);
          orderData.push(result.data[0]);
        }

        return resolve({
          status: StatusCodes.CREATED,
          data: [...orderData],
          errorMessage: "",
        });
      });
  });
};
