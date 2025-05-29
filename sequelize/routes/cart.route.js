import express from "express";
import { addToCart, getCartItems } from "../controller/cart.controller.js";

const router = express.Router();
// http://localhost:3000/cart/add-to-cart
// http://localhost:3000/cart/1

router.post("/add-to-cart", addToCart);
router.get("/:userId", getCartItems);
export default router;
