// let str = "Hello, welcome to the JavaScript world!";
// let textToRemove = "JavaScript";

// let result = str.replace(textToRemove, "");
// console.log(result); // Output: "Hello, welcome to the  world!"

// let str = "JavaScript is fun. Learning JavaScript is rewarding.";
//

let str = "Hello, welcome to the JavaScript world!";
let textToRemove = "JavaScript";
let result = "";

for (let i = 0; i < str.length; i++) {
  if (str.slice(i, i + textToRemove.length) === textToRemove) {
    i += textToRemove.length - 1; // Skip the textToRemove
  } else {
    result += str[i];
  }
}

console.log(result); // Output: "Hello, welcome to the  world!"
