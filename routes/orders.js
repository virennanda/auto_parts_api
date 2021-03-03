const { addOrder } = require('../controllers/OrdersController/addOrder');
const { ensureToken } = require('../utilities/ensure-token');
const router = require('express').Router();

router.post("/add",ensureToken, async (req, res) => {

    const response = await addOrder(req, res);
    return res.json(response);
});

exports.OrdersRouter = router;