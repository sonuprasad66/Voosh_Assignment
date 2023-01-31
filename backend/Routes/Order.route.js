const express = require("express");
const orderRouter = express.Router();
const { addOrder, getOrder } = require("../Controllers/Order.controller");
const { authentication } = require("../Middlewares/authenticate");

orderRouter.post("/add-order", authentication, addOrder);
orderRouter.get("/get-order", authentication, getOrder);

module.exports = {
  orderRouter,
};
