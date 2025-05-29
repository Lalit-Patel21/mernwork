// import { response } from "express";
import { Cart } from "../model/cart.model.js";

export const addToCart = async (request, response, next) => {
  try {
    let { userId, productId } = request.body;
    let cart = await Cart.findOne({ userId });
    if (cart) {
      let status = cart.cartItems.some((item) => {
        return item.productId == productId;
      });
      if (status)
        return response
          .status(200)
          .json({ message: "Item is already added in cart" });

      cart.cartItems.push({ productId });

      await cart.save();
      return response
        .status(201)
        .json({ message: "Item successfully added in cart" });
    } else {
      let userCart = await Cart.create({ userId, cartItems: [{ productId }] });
      return response
        .status(201)
        .json({ message: "Item added successfully", userCart });
    }
  } catch (err) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchCart = async (request, response, next) => {
  try {
    let userId = request.params.id;
    let cart = await Cart.findOne({ userId }).populate("cartItems.productId");
    return response.status(200).json({ cartDetails: cart });
  } catch (err) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};
export const removeItem = async (request, response, next) => {
  try {
    let { userId, productId } = request.params;
    let result = await Cart.updateOne(
      { userId },
      { $pull: { cartItems: { productId } } }
    );
    if (result.modifiedCount)
      return response.status(200).json({ message: "Item removed" });
    return response
      .status(404)
      .json({ error: "Requested resouce not found | Id not found" });
  } catch (err) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};
