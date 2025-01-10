import express from "express";
import {
  addProductAction,
  addProductPage,
  viewProductPage,
  deleteProductPage,
  editProductPage,
  editProductAction,
} from "../controller/product.controller.js";

import { verify } from "../middleware/auth.js";
const productrouter = express.Router();

//localhost:3000/add-product/
productrouter.get("/add-product", verify, addProductPage);
productrouter.post("/add-product", verify, addProductAction);
productrouter.get("/view-product", verify, viewProductPage);
productrouter.get("/delete-product/:productId", verify, deleteProductPage);
productrouter.get("/edit-product/:productId", verify, editProductPage);
productrouter.post("/edit-product", verify, editProductAction);

export default productrouter;
