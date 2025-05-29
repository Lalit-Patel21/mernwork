//   Removes First Occurrence
// let str = "hello world";
// let charToRemove = 'o';

// let result = str.replace(charToRemove, ''); // Removes the first occurrence of 'o'
// console.log(result); // Output: "hell world"

let str = "hello world";
let charToRemove = "o";
let result = "";

let found = false; // To track the first occurrence
for (let i = 0; i < str.length; i++) {
  if (str[i] === charToRemove && !found) {
    found = true; // Skip the first occurrence
  } else {
    result += str[i]; // Append other characters
  }
}
console.log(result); // Output: "hell world"
