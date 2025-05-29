// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let str = arr.join();
// console.log(str);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let str = arr.toString();
// console.log(str);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let str = JSON.stringify(arr).slice(1, -1);
// console.log(str);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let str = arr.reduce((myString, values, myArr) => {
//   if (myArr === 0) {
//     return `${values}`;
//   } else {
//     return `${myString},${values}`;
//   }
// }, "");
// console.log(str);

function arrayToString(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

console.log(arrayToString([1, 2, 3, 4, 5]));
