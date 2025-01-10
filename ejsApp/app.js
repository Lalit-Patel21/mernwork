import express from "express";
import bodyParser from "body-parser";
import AdminRouter from "./routes/admin.route.js";
import HomeRouter from "./routes/home.route.js";
import session from "express-session";
import ProductRouter from "./routes/product.route.js";
import CategoryRouter from "./routes/category.route.js";

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "abcdefghijklm" }));

app.use("/", HomeRouter);
app.use("/admin", AdminRouter);
app.use("/product", ProductRouter);
app.use("/category", CategoryRouter);

app.listen(3000, () => {
  console.log("Server started...");
});
