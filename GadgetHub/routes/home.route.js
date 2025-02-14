import express from "express";
import { homeGuestPage } from "../controller/home.controller.js";
const homerouter = express.Router();
// http://localhost:3000/
homerouter.get("/", homeGuestPage);
export default homerouter;
