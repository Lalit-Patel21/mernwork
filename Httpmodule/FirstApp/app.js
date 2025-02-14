import http from "http";
import url, { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
http
  .createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    let __filename = fileURLToPath(import.meta.url);
    let __dirname = path.dirname(__filename);
    console.log(parsedUrl.pathname);
    if (
      (parsedUrl.pathname == "/" || parsedUrl.pathname == "/home") &&
      request.method == "GET"
    ) {
      try {
        let homePagePath = path.join(__dirname, "views/home.html");
        let data = fs.readFileSync(homePagePath);
        response.write(data);
        response.end();
      } catch (err) {
        console.log(err);
        response.end("Oops! something went wrong...");
      }
    } else if (parsedUrl.pathname.match(".html$")) {
      let htmlFilePath = path.join(__dirname, parsedUrl.pathname);
      let readStream = fs.createReadStream(htmlFilePath);
      readStream.pipe(response);
    } else if (parsedUrl.pathname.match(".css$")) {
      let cssFilePath = path.join(__dirname, parsedUrl.pathname);
      let readStream = fs.createReadStream(cssFilePath);
      readStream.pipe(response);
    } else if (parsedUrl.pathname.match(".jpeg$")) {
      let imgFilePath = path.join(__dirname, parsedUrl.pathname);
      let readStream = fs.createReadStream(imgFilePath);
      readStream.pipe(response);
    }
  })
  .listen(3000, () => {
    console.log("server started");
  });
