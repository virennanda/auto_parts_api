const { addOrder } = require("../controllers/OrdersController/addOrder");
const { getOrders } = require("../controllers/OrdersController/getOrders");
const { ensureToken } = require("../utilities/ensure-token");
const router = require("express").Router();

router.post("/add", ensureToken, async (req, res) => {
  const response = await addOrder(req, res);
  return res.json(response);
});

router.get("/", ensureToken, async (req, res) => {
  const response = await getOrders(req, res);
  return res.json(response);
});

exports.OrdersRouter = router;
