// Remove All Occurrences:
// let str = "hello world";
// let charToRemove = 'o';

// let result = str.split(charToRemove).join('');
// console.log(result); // Output: "hell wrld"

let str = "hello world";
let charToRemove = "o";
let result = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] !== charToRemove) {
    result += str[i];
  }
}

console.log(result); // Output: "hell wrld"

// for (let i = 0; i < str.length; i++) {
//   if (str[i] == charToRemove) {
//     continue;
//   }
//   result += str[i];
// }

// console.log(result); // Output: "hell wrld"
