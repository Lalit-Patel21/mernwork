// 2.If the given input is an array of numbers, return the sum of all the positives ones.
// If the array is empty or there aren't any positive numbers, return 0.

// const input = [1, -4, 12, 0, -3, 29, -150];
// output :- 42;

// let a = [1, 2, 3, 4, 5];
// function sum(n) {
//   let sum = 0;
//   if (n >= 0) sum += n;
//   return sum;
// }
// var sum = a.reduce(sum);
// console.log(sum);

// let a = [1, -4, 12, 0, -3, 29, -150];

// function fil(n) {
//   if (n >= 0) return n;
// }
// var pos = a.filter(fil);
// console.log(pos);

// function sum(n1, n) {
//   let sum = 0;
//   sum = n1 + n;
//   return sum;
// }

// var sum = pos.reduce(sum);
// console.log(sum);

//only reduce method
let a = [1, -4, 12, 0, -3, 29, -150];
function sum(sum, n) {
  if (n > 0) sum = sum + n;
  else sum = sum + 0;
  return sum;
}

var sum = a.reduce(sum);
console.log(sum);
