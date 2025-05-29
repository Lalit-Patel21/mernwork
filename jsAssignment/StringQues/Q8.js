// javaScript – String Contains Only Alphabetic Characters or Not

// 1. Using Regular Expressions
// let str = "HelloWorld";

// let isAlphabetic = /^[a-zA-Z]+$/.test(str);
// console.log(isAlphabetic); // Output: true (only alphabets)

let str = "HelloWorld";
let isAlphabetic = true;

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (!(char >= "a" && char <= "z") && !(char >= "A" && char <= "Z")) {
    isAlphabetic = false;
    break;
  }
}

console.log(isAlphabetic); // Output: true (only alphabets)
