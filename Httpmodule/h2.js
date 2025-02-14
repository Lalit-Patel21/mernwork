// var http = require("http");

// // Create a server object
// var server = http
//   .createServer(function (req, res) {
//     res.write("Hello World!"); // Write a response to the client
//     res.end(); // End the response
//   })
//   .listen(8080); // The server object listens on port 8080

// // To close the server
// server.close(() => {
//   console.log("Server closed!");
// });

import http from "http";
const server = http.createServer((request, response) => {
  if (request.url == "/home") {
    response.write("<h1>Home Page</h1>");
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
