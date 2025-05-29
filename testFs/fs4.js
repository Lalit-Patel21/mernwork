import fs from "fs";
try {
  fs.writeFileSync("./abc.txt", "adsflsdjf sflfsdfd fsdlfjdsf");
  console.log("Operation success...");
} catch (err) {
  console.log(err);
}
