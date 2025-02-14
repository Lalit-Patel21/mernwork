// 6. If the given input is a number, you should return the factorial of that number.
// The factorial of a natural number n is the product of the positive integers
//  less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.

// const input = 6;
// output: 720

let input = 6;
let fact = 1;
while (input != 0) {
  fact = fact * input--;
}
console.log(fact);

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// const input = 6;
// const output = factorial(input);
// console.log(output); // Output: 720
