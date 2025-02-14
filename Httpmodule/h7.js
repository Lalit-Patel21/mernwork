import http from "http";
import fs from "fs";
const server = http.createServer((request, response) => {
  response.write("Hello Client [Message From Server]");
  response.write(request.url);
  response.setHeader("Content-Type", "text/html");
  let path = "";
  switch (request.url) {
    case "/": {
      path += "index.html";
      break;
    }
    case "/about": {
      path += "about.html";
      break;
    }
    case "/contact": {
      path += "contact.html";
      break;
    }
    default: {
      path += "404.html";
    }
  }
  fs.readFile(path, (err, fileData) => {
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
