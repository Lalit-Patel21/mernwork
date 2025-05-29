let array = [10, 20, 30, 10, 40, 50, 20];
let duplicates = [];

// Check for duplicates manually
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] === array[j]) {
      // Check if the duplicate is already in the duplicates array
      let isAlreadyAdded = false;
      for (let k = 0; k < duplicates.length; k++) {
        if (duplicates[k] === array[i]) {
          isAlreadyAdded = true;
          break;
        }
      }
      if (!isAlreadyAdded) {
        duplicates[duplicates.length] = array[i]; // Add to duplicates array
      }
    }
  }
}

// Print duplicates
for (let i = 0; i < duplicates.length; i++) {
  console.log(duplicates[i]); // Output: 10, 20
}
