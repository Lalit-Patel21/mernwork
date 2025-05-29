// let a = [1, 2, 3, 4, 5];
// a.reverse();
// console.log(a);

const array = [1, 2, 3, 4, 5];
let revArray = [];
for (let i = array.length - 1; i >= 0; i--) {
  revArray.push(array[i]);
}

console.log("Reversed Array: ", revArray);
