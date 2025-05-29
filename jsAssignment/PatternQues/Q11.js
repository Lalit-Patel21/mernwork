//         1
//       1 2 3
//     1 2 3 4 5
//   1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8 9

const n = 5;
for (let i = 1; i <= n; i++) {
  let arr = [];
  let count = 1;
  for (let j = 1; j <= 2 * n; ++j) {
    if (i + j >= n + 1 && i >= j - n + 1) {
      arr.push(count);
      count++;
    } else {
      arr.push(" ");
    }
  }
  console.log(arr.join(" "));
}
