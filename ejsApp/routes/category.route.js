import express from "express";
import {
  addCategoryAction,
  addCategoryPage,
  viewCategoryPage,
  deleteCategoryPage,
  editCategoryPage,
  editCategoryAction,
} from "../controller/category.controller.js";

import { verify } from "../middleware/auth.js";
const categoryrouter = express.Router();

//localhost:3000/add-category
http: categoryrouter.get("/add-category", verify, addCategoryPage);
categoryrouter.post("/add-category", verify, addCategoryAction);
categoryrouter.get("/view-category", verify, viewCategoryPage);
categoryrouter.get("/delete-category/:categoryId", verify, deleteCategoryPage);
categoryrouter.get("/edit-category/:categoryId", verify, editCategoryPage);
categoryrouter.post("/edit-category", verify, editCategoryAction);

export default categoryrouter;
