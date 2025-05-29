// How to make First Letter of a String Uppercase in JavaScript?
//  let str = "hello world";

// let result = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(result); // Output: "Hello world"

let str = "hello world";
let result = "";

for (let i = 0; i < str.length; i++) {
  if (i === 0) {
    result +=
      str[i] >= "a" && str[i] <= "z"
        ? String.fromCharCode(str.charCodeAt(i) - 32)
        : str[i];
  } else {
    result += str[i];
  }
}

console.log(result); // Output: "Hello world"
