import express from "express";
import path from "path";
import url, { fileURLToPath } from "url";
// import { name } from "ejs";

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/contact", (req, res) => {
  res.send("Contact");
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// app.use(exp.static(path.join(__dirname, "public")));
// app.set("view engine", "ejs");
// app.get("/", (req, res) => {
//   res.render("index.ejs");
//   res.end();
// });

app.listen(3000);
