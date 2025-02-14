// const http=require("http")
// const serv1=http.createServer((req,res)=>
// {
//     res.end("working")
// })
// serv1.listen(2000,"localhost",
//                   ()=>console.log("connected with server at http://localhost:2000"))

//   const http=require("http")
//   const sr="img1.png"
//   const serv2=http.createServer((req,res)=>
//   {
//     if(req.url === "/")
//           res.end(" home page ")
//         else if (req.url ==='/about')
//           return res.end("<h1> About page <h1>")
//         else if(req.url==='/contact')
//           return res.end(" <marquee> welcome </marquee>")
//         else
//           return res.end("<h1> 404 Page not found </h1>" )
//   })
//   serv2.listen(2000,"localhost",
//                     ()=>console.log("connected with server at http://localhost:2000"))

import http from "http";
import fs from "fs";
// const fs = require("fs");
// const http = require("http");
const c = fs.readFileSync("./index.html");

const serv = http.createServer((req, res) => {
  if (req.url === "/") return res.end("<h1> home page </h1>");
  else if (req.url === "/about") return res.end("<h1> About page");
  else if (req.url === "/contact") return res.end(c);
  else return res.end("<h1> 404 Page not found </h1>");
});

serv.listen(2000, "localhost", () =>
  console.log("connected with server at http://localhost:2000")
);
