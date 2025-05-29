// Descending Order
// let str = "javascript";

// let sortedStr = str
//   .split("")
//   .sort((a, b) => b.localeCompare(a))
//   .join("");
// console.log(sortedStr); // Output: "vtsprajica"

//  Sorting Words in a Sentence
let sentence = "Sorting a string in JavaScript is fun";

let sortedWords = sentence.split(" ").sort().join(" ");
console.log(sortedWords); // Output: "JavaScript Sorting a fun in is string"
