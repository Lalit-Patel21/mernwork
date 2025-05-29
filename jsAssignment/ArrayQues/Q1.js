// function insertElement(arr, element, position) {
//   for (let i = arr.length; i > position; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[position] = element;
//   return arr;
// }

// // Example usage:
// let array = [10, 20, 30, 40];
// let updatedArray = insertElement(array, 25, 2); // Insert 25 at index 2
// console.log(updatedArray); // Output: [10, 20, 25, 30, 40]

let array = [10, 20, 30, 40];
let element = 25;
let position = 2;

// Shift elements to the right
for (let i = array.length; i > position; i--) {
  array[i] = array[i - 1];
}

// Insert the element
array[position] = element;

console.log(array); // Output: [10, 20, 25, 30, 40]
