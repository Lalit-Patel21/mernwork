// function removeElement(arr, position) {
//   for (let i = position; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr.length -= 1; // Decrease the array size
//   return arr;
// }

// // Example usage:
// let array = [10, 20, 30, 40];
// let updatedArray = removeElement(array, 2); // Remove element at index 2
// console.log(updatedArray); // Output: [10, 20, 40]

let array = [10, 20, 30, 40];
let position = 2;

// Shift elements to the left
for (let i = position; i < array.length - 1; i++) {
  array[i] = array[i + 1];
}

// Decrease the array size
array.length -= 1;

console.log(array); // Output: [10, 20, 40]
