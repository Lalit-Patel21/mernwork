import http from "http";
import fs from "fs";
const server = http.createServer((request, response) => {
  // response.setHeader("Content-Type", "text/html");
  fs.readFile("./Songs.html", (err, fileData) => {
    if (err) {
      console.log(err);
    } else {
      response.write(fileData);
      response.end();
    }
  });
});
server.listen(3000, "localhost", () => {
  console.log("Server Started... on port 3000");
});
