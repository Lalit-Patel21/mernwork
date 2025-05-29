//   var arr1 = [10, 20, 30];
//   var arr2 = [...arr1];

//   arr2.splice(1, 1);
//   document.write(arr1); // [10,30]
//   document.write("<hr/>");

//   var obj1 = { a: 10, b: 20 };
//   var obj2 = { ...obj1, c: 500 };
//   document.write(obj2.a + "  " + obj2.b + "  " + obj2.c);

// a();
// b();
// let a = function () {
//   console.log("let");
// };
// var b = function () {
//   console.log("let");
// };

let a = [1, 2, 3, 4];
let b = [...a]; //deep copy[not change in original because of premitive]
b[0] = 5;
console.log(a);
console.log(b);

let obj = { name: "lalit", id };
// let b = [...a];
// b[0] = 5;
// console.log(a);
// console.log(b);
