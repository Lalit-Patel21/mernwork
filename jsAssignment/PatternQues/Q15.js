for (let i = 1; i <= 5; i++) {
  let s = "";
  for (let k = 1; k <= 5 - i; k++) {
    s += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j == 1 || j == 2 * i - 1 || i == 5) {
      s += "*";
    } else {
      s += " ";
    }
  }
  console.log(s);
}
// for (let i = 1; i <= 3; i++) {
//   let a = "";
//   for (let j = 1; j <= 3 - i; j++) {
//     a += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (k == 1 || i == 3 || k == 2 * i - 1) {
//       a += "*";
//     } else {
//       a += " ";
//     }
//   }
//   console.log(a); //space line
// }
