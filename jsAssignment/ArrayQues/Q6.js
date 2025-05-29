// How to Select a Random Element from Array in JavaScript ?
// Given array
// let a = [ 10, 20, 30, 40 , 50 ];

// // Get a random index using Math.random()
// let i = Math.floor(Math.random() * a.length);

// // Access the random element using index
// let r = a[i];

// // Display the random element
// console.log("Random element from array:", r);

// Function to apply Fisher-Yates shuffle
function shuffleArray(array) {
  // Iterate over the array using for loop
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Driver Code
let a = [10, 20, 30, 40, 50];

// Shuffle the array
shuffleArray(a);

// Display the shuffled array
// (optional, to verify shuffle)
console.log("Shuffled array:", a);

// Pick the first element as the random element
let r = a[0];
console.log("Random element from shuffled array:", r);
