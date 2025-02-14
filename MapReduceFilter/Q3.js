// 3. The given input is a string of multiple words with
//  a single space between each of them.
// Abbreviate the name and return the name initials.
//  const input = "George Raymond Richard Martin";
//  output :- "GRRM";

// const input = "George Raymond Richard Martin";
// var index = arr.findIndex((element) => {
//   return element == 5;
// });

let sentence = "George Raymond Richard Martin";
let wordsArray = sentence.split(" ");
console.log(wordsArray);

function ss(n) {
  return n.charAt(0);
}
console.log(wordsArray.map(ss));
var v = wordsArray.map(ss).join("");
// console.log(v.toString);
console.log(v);
