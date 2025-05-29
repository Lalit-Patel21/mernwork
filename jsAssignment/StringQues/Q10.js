// Convert comma separated string to array using JavaScript
// let str = "apple,banana,cherry,grape";

// let arr = str.split(",");
// console.log(arr);
// // Output: ["apple", "banana", "cherry", "grape"]

let str = "apple,banana,cherry,grape";
let arr = [];
let temp = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] === ",") {
    arr.push(temp);
    temp = ""; // Reset temp for the next word
  } else {
    temp += str[i];
  }
}
arr.push(temp); // Push the last word
console.log(arr);
// Output: ["apple", "banana", "cherry", "grape"]
