import express from "express";
import {
  list,
  saveInBulk,
  getProduct,
} from "../controller/product.controller.js";

const router = express.Router();

//localhost:3000/product/save-in-bulk
// localhost:3000/product/list
router.post("/save-in-bulk", saveInBulk);
router.get("/list", list);
router.get("/:id", getProduct);
export default router;
