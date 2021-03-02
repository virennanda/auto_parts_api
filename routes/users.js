const { registerUser } = require('../controllers/UserController/registerUser');
const { validateUserLogin } = require('../controllers/UserController/userLogin');

const router = require('express').Router();


router.post("/login", async (req, res) => {
    const response = await validateUserLogin(req, res);
    return res.json(response);
});
router.post("/register", async (req, res) => {
    const response = await registerUser(req, res);
    return res.json(response);
});

exports.usersRouter = router;