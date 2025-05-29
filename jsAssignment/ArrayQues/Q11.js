function findPeakElement(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (
      (i === 0 || arr[i] >= arr[i - 1]) &&
      (i === n - 1 || arr[i] >= arr[i + 1])
    ) {
      return i;
    }
  }
  return -1;
}

// Test the function
let arr = [5, 7, 3, 4, 8, 9];
console.log(findPeakElement(arr));
