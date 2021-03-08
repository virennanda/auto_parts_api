const express = require("express");
const morgan = require("morgan");
const { StatusCodes } = require("http-status-codes");
//local consts
const { server } = require("./config");
const { validateUserLogin } = require("./controllers/UserController/userLogin");
const { registerUser } = require("./controllers/UserController/registerUser");
const { usersRouter } = require("./routes/users");
const { PartsRouter } = require("./routes/parts");
const { OrdersRouter } = require("./routes/orders");
const { addressRouter } = require("./routes/address");

//init
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes to Controller Routing
app.use("/user", usersRouter);

app.use("/parts", PartsRouter);

app.use("/orders", OrdersRouter);

app.use("/address", addressRouter);

//routes
app.get("/api", (req, res) => {
  res.status(StatusCodes.OK).json({ data: [1, 2, 3] });
});
app.listen(server.PORT, () =>
  console.log(`Server Running on port ${server.PORT}`)
);
