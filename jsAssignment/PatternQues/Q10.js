// 4321;
//  432;
//   43;
//    4;

// for (let i = 1; i <= 4; i++) {
//   let a = "";
//   for (let j = 1; j < i; j++) {
//     a += " ";
//   }
//   for (k = 4; k >= i; k--) {
//     a += k;
//   }
//   console.log(a); //space line
// }

for (let i = 1; i <= 5; i++) {
  let a = "";
  for (let j = 1; j <= 5; j++) {
    if (i == 1 || j == 1 || i == 5 || j == 5) a += "*";
    else a += " ";
  }
  console.log(a); //space line
}
