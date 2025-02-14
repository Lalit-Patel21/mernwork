import express from "express";
import path from "path";
import url, { fileURLToPath } from "url";
// import { name } from "ejs";
const __filename = fileURLToPath(import.meta.url);
// console.log(__filename);
const __dirname = path.dirname(__filename);

import HomeRouter from "./routes/home.route.js";
const app = express();

app.set("view engine", "ejs");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", HomeRouter);

app.listen(3000, () => {
  console.log("Server started...");
});
