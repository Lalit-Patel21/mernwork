// given an array of integer return an aaray where each element is
// the product of all element  except itself.

// let input = [1, 2, 3, 4];

//output:[24,12,8,6]

// let arr = [1, 2, 3, 4, 2, 3, 2, 4, 5, 1, 1];
// let counted = []; // Array to track already counted elements

// for (let i = 0; i < arr.length; i++) {
//   let count = 0;
//   let element = arr[i];

//   // Skip the element if it has already been counted
//   let alreadyCounted = false;
//   for (let j = 0; j < counted.length; j++) {
//     if (counted[j] === element) {
//       alreadyCounted = true;
//       break;
//     }
//   }
//   if (alreadyCounted) {
//     continue;
//   }

//   // Count the occurrences of the element
//   for (let k = 0; k < arr.length; k++) {
//     if (arr[k] === element) {
//       count++;
//     }
//   }

//   // Mark the element as counted
//   counted.push(element);

//   // Print the result
//   console.log(` ${element}: ${count} `);
// }

// var arr = [1, 2, 3, 4, 2, 3, 2, 4, 5, 1, 1];
// var newarr = []; // Array to track already counted elements
// for (let i = 0; i < arr.length; i++) {
//   let count = 0;
//   let a = arr[i];

//   let b = false; // Skip the element if it has already been counted
//   for (let j = 0; j < newarr.length; j++) {
//     if (newarr[j] === a) {
//       b = true;
//       break;
//     }
//   }
//   if (b) {
//     continue;
//   }
//   for (let k = 0; k < arr.length; k++) {
//     if (arr[k] === a) {
//       count++;
//     }
//   }
//   newarr[i] = a;
//   // Print the result
//   console.log(a + " " + count);
// }

// input: [1, 2, 3, 5, 8];
// output: [2,3,5,8,1]
// [ 8, 1, 2, 3, 5 ]

var arr = [1, 2, 3, 5, 8];
let a = arr[arr.length - 1];
for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}
arr[0] = a;
console.log(arr);
