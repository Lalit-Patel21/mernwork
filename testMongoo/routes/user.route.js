import express from "express";
import { signIn, signUp } from "../controller/user.controller.js";

const router = express.Router();

// http://localhost:3000/user/signup
router.post("/signup", signUp);
router.post("/signin", signIn);
export default router;
