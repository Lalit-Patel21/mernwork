import fs from "fs";
fs.readFile("./data.txt", (err, data) => {
  err ? console.log(err) : console.log(data.toString());
});
