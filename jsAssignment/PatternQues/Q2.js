//   *
//  **
// ***
//****

// for (let i = 1; i <= 4; i++) {
//   let a = "";
//   for (let j = 1; j <= 4 - i; j++) {
//     a += " ";
//   }
//   for (k = 1; k <= i; k++) {
//     a += "*";
//   }
//   console.log(a); //space line
// }

// for (let i = 1; i <= 4; i++) {
//   let a = "";
//   for (let j = 1; j <= 4 - i; j++) {
//     a += " ";
//   }
//   console.log(a + "*".repeat(i)); //space line
// }

let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "* ";
  let space = "  ";
  console.log(space.repeat(n - i) + str.repeat(i));
}
