const express = require("express");
const morgan = require("morgan");
const { StatusCodes } = require("http-status-codes");
//local consts
const { server } = require("./config");
const { validateUserLogin } = require("./controllers/UserController/userLogin");
const { registerUser } = require("./controllers/UserController/registerUser");
const { usersRouter } = require("./routes/users");

//init
const app = express();


//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', usersRouter);

//routes
app.get("/api", (req, res) => {
    res.status(StatusCodes.OK).json({ data: [1, 2, 3] })
});


//Listner
app.listen(
    server.PORT,
    () => console.log(`Server Running on port ${server.PORT}`)
);
