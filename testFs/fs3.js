import fs from "fs";

console.log("At the start...");
try {
  let data = fs.readFileSync("./dta.txt", "utf8");
  console.log(data);
} catch (err) {
  console.log(err);
}
console.log("At the end....");
