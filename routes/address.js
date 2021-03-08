const { addAddress } = require("../controllers/addressController/addAddress");
const {
  getAllAddress,
} = require("../controllers/addressController/getAddress");
const { ensureToken } = require("../utilities/ensure-token");
const router = require("express").Router();

router.post("/add", ensureToken, async (req, res) => {
  const result = await addAddress(req, res);
  res.json(result);
});
router.get("/", ensureToken, async (req, res) => {
  const result = await getAllAddress(req, res);
  res.json(result);
});

exports.addressRouter = router;
