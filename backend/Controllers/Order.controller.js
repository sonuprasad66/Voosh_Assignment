const { orderModel } = require("../Models/Order.model");

const addOrder = async (req, res) => {
  try {
    const { user_id, sub_total, phone_number } = req.body;
    const new_order = new orderModel({
      user_id: user_id,
      sub_total: sub_total,
      phone_number: phone_number,
    });
    await new_order.save();
    res.send({ message: "Order Added Successfull", status: "success" });
  } catch (err) {
    res.send(err);
  }
};

const getOrder = async (req, res) => {
  const { user_id } = req.body;
  const order = await orderModel.find({ user_id: user_id });
  res.send(order);
};

module.exports = {
  addOrder,
  getOrder,
};
