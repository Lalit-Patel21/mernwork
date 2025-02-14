import http from "http";
import fs from "fs";

const readIndex = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./index.html", "utf8", (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

const server = http.createServer((request, response) => {
  if (request.url == "/home") {
    response.write("<h1>Home Page</h1>");
    response.write(readIndex);
    response.write("<a href='/about'>About</a>");
  } else if (request.url == "/about") response.write("<h1>About Page</h1>");
  else if (request.url == "/contact") response.write("<h1>Contact Page</h1>");
  else
    response.write(
      "<h1 style='color:red'>404 Requested resource not found</h1>"
    );
  response.end();
});

server.listen(3000, () => {
  console.log("Server Started...");
});
