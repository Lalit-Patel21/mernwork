//    1;
//   12;
//  123;
// 1234;

for (let i = 1; i <= 4; i++) {
  let a = "";
  for (let j = 1; j <= 4 - i; j++) {
    a += " ";
  }
  for (k = 1; k <= i; k++) {
    a += k;
  }
  console.log(a); //space line
}
