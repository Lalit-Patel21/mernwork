let array = [10, 20, 30, 40, 50];
let elementToFind = 30;
let isFound = false;

// Loop through the array to check for the element
for (let i = 0; i < array.length; i++) {
  if (array[i] === elementToFind) {
    isFound = true;
    break; // Exit the loop once the element is found
  }
}

if (isFound) {
  console.log("Element is present in the array.");
} else {
  console.log("Element is not present in the array.");
}

// Output: Element is present in the array.
