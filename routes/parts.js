const { getParts } = require('../controllers/PartsController/getParts');
const { searchParts } = require('../controllers/PartsController/searchParts');
const router = require('express').Router();

router.get("/getParts", async (req, res) => {
    const response = await getParts(req, res);
    return res.json(response);
});

router.get("/search", async (req, res) => {
    const response = await searchParts(req, res);
    return res.json(response);
});

exports.PartsRouter = router;