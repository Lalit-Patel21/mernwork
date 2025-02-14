import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 30;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Define a route to serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.ejs"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.ejs"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.ejs"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
