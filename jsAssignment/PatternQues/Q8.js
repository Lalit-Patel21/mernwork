// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 5; j >= i; j--) {
    str += j + " ";
  }
  console.log(str);
}
