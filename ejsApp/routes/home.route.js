import express from "express";
import { homePage } from "../controller/home.controller.js";

const homerouter = express.Router();

//localhost:3000
homerouter.get("/", homePage);
export default homerouter;
