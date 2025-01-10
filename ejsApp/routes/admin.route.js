import express from "express";
import {
  signInPage,
  signInAction,
  signUpPage,
  signUpAction,
  dashboardPageAction,
} from "../controller/admin.controller.js";
import { verify } from "../middleware/auth.js";
const adminrouter = express.Router();

// http://localhost:3000/admin/sign-in
adminrouter.get("/sign-in", signInPage);
adminrouter.post("/sign-in", signInAction);

// http://localhost:3000/admin/sign-up
adminrouter.get("/sign-up", signUpPage);
adminrouter.post("/sign-up", signUpAction);

//localhost:3000/admin/dashboard
adminrouter.get("/dashboard", verify, dashboardPageAction);
export default adminrouter;
