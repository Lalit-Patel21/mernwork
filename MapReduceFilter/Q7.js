// 7. Count the occurrences of distinct elements in the given 2D array.
// The given input is an array, the elements of which are arrays of strings.
// The result is an object whose property names are the values from the arrays
// and their value is the number of their occurrences.

// const input = [
//   ["a", "b", "c"],
//   ["c", "d", "f"],
//   ["d", "f", "g"],
// ];
// output:   {
//     a: 1,
//     b: 1,
//     c: 2,
//     d: 2,
//     f: 2,
//     g: 1,
//   }

// function countOccurrences(arr) {
//   const flatArray = arr.flat();
//   const occurrences = {};
//   flatArray.forEach((element) => {
//     occurrences[element] = (occurrences[element] || 0) + 1;
//   });
//   return occurrences;
// }

// const input = [
//   ["a", "b", "c"],
//   ["c", "d", "f"],
//   ["d", "f", "g"],
// ];

// const output = countOccurrences(input);
// console.log(output);

// function countOccurrences(arr) {
//   const flatArray = arr.reduce((acc, val) => acc.concat(val), []);
//   const occurrences = {};

//   flatArray.forEach((element) => {
//     occurrences[element] = (occurrences[element] || 0) + 1;
//   });

//   return occurrences;
// }

// const input = [
//   ["a", "b", "c"],
//   ["c", "d", "f"],
//   ["d", "f", "g"],
// ];

// const output = countOccurrences(input);
// console.log(output);
// let i = 0;
// for (let row in input) {
//   for (let ele in row){
//     arr[i] = row;
//     i++;
//   }
// }
// console.log(arr);

// const input = [
//   ["a", "b", "c"],
//   ["c", "d", "f"],
//   ["d", "f", "g"],
// ];
// let arr = [];
// let k = 0;
// for (let i = 0; i < input.length; i++) {
//   for (let j = 0; j < input[i].length; j++) {
//     arr[k] = input[i][j];
//     k++;
//   }
// }
// console.log(arr);
// console.log(arr.length);

// let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//   let isDuplicate = false;
//   let count = 0;
//   for (let j = 0; j < arr1.length; j++) {
//     if (arr[i] === arr[j]) {
//       isDuplicate = true;
//       break;
//     }
//   }
//   if (isDuplicate) {
//     continue;
//   }
//   for (let l = 0; l < arr.length; l++) {
//     if (arr[l] === arr[i]) {
//       count++;
//     }
//   }
//   arr1[i] = arr[i];
//   console.log(arr[i] + ":" + count);
// }

let input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

input = input.flat();
let data = {};
input.reduce((acc, currentValue) => {
  if (!acc[currentValue]) {
    acc[currentValue] = 1;
  } else {
    acc[currentValue]++;
  }
  return acc;
}, data);
console.log(data);
