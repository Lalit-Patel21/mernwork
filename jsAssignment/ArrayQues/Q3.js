// function removeDuplicates(arr) {
//   let uniqueArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueArray.includes(arr[i])) {
//       uniqueArray.push(arr[i]);
//     }
//   }
//   return uniqueArray;
// }

// // Example usage:
// let array = [10, 20, 10, 30, 20, 40];
// let updatedArray = removeDuplicates(array);
// console.log(updatedArray); // Output: [10, 20, 30, 40]

// let array = [10, 20, 10, 30, 20, 40];
// let uniqueArray = [];

// // Iterate and add only unique elements
// for (let i = 0; i < array.length; i++) {
//   if (!uniqueArray.includes(array[i])) {
//     uniqueArray.push(array[i]);
//   }
// }

// console.log(uniqueArray); // Output: [10, 20, 30, 40]

// let array = [10, 20, 10, 30, 20, 40];
// let uniqueArray = [];

// for (let i = 0; i < array.length; i++) {
//     let isDuplicate = false;
//     for (let j = 0; j < uniqueArray.length; j++) {
//         if (array[i] === uniqueArray[j]) {
//             isDuplicate = true;
//             break;
//         }
//     }
//     if (!isDuplicate) {
//         uniqueArray.push(array[i]);
//     }
// }

// console.log(uniqueArray); // Output: [10, 20, 30, 40]

// function removeDuplicates(arr) {
//     let uniqueArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         let isDuplicate = false;
//         for (let j = 0; j < uniqueArray.length; j++) {
//             if (arr[i] === uniqueArray[j]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }
//         if (!isDuplicate) {
//             uniqueArray.push(arr[i]);
//         }
//     }
//     return uniqueArray;
// }

// Example usage:
// let array = [10, 20, 10, 30, 20, 40];
// let updatedArray = removeDuplicates(array);
// console.log(updatedArray); // Output: [10, 20, 30, 40]

let array = [10, 20, 10, 30, 20, 40];
let uniqueArray = [];

// Check for duplicates manually
for (let i = 0; i < array.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < uniqueArray.length; j++) {
    if (array[i] === uniqueArray[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    uniqueArray[uniqueArray.length] = array[i]; // Append manually
  }
}

// Print the result
for (let i = 0; i < uniqueArray.length; i++) {
  console.log(uniqueArray[i]); // Output: 10, 20, 30, 40
}
