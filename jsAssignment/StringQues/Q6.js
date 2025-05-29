// let str = "javascript";

// let sortedStr = str.split("").sort().join("");
// console.log(sortedStr); // Output: "aacijprstv"

// 2. Case-Insensitive Sorting
// let str = "JavaScript";

// let sortedStr = str.toLowerCase().split('').sort().join('');
// console.log(sortedStr); // Output: "aacijprstv"

// Manual Sorting Without Built-in Methods
let str = "javascript";
let arr = str.split("");

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      // Swap characters
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

let sortedStr = arr.join("");
console.log(sortedStr); // Output: "aacijprstv"
