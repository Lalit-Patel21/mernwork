// let str = "hello world";

// // Using substring
// let result = str.substring(1);
// console.log(result); // Output: "ello world"

// // Using slice
// let result2 = str.slice(1);
// console.log(result2); // Output: "ello world"

let str = "hello world";
let result = "";

for (let i = 1; i < str.length; i++) {
  result += str[i];
}

console.log(result); // Output: "ello world"
