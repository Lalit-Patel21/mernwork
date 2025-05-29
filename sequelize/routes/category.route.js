import express from "express";
import {
  categoryList,
  deletCategory,
  save,
  saveInBulk,
} from "../controller/category.controller.js";

const router = express.Router();

// http://localhost:3000/category/save-in-bulk
// http://localhost:3000/category/list
// http://localhost:3000/category/:Womens Watches
// http://localhost:3000/category/save

router.post("/save-in-bulk", saveInBulk);

router.get("/list", categoryList);

router.delete("/:name", deletCategory);

router.post("/save", save);

export default router;
