// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// let n = 5;
// for (let i = n; i >= 1; i--) {
//   let str = "* ";
//   let space = "  ";
//   console.log(space.repeat(n - i) + str.repeat(i));
// }

for (let i = 4; i >= 1; i--) {
  let a = "";
  for (let j = 4; j > i; j--) {
    a += " ";
  }
  console.log(a + "*".repeat(i)); //space line
}
