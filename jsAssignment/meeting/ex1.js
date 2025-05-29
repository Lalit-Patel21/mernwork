// // call bind apply
// let name = {
//   fn: "lalit",
//   ln: "patel",
// };

// function printName(city, state) {
//   console.log(this.fn + " " + this.ln + " " + city + " " + state);
// }

// function printName(city) {
//   console.log(this.fn + " " + this.ln + " " + city + " ");
// }

// printName.call(name, "indore", "m.p.");
// printName.apply(name, ["indore", "m.p."]);
// let methodb = printName.bind(name, "indore", "m.p.");

// methodb();

//  function add(a) {
//    return function (b) {
//      return a + b;
//    };
//  }

//  add(3)();
let arr = [1, 2, 3, 5];
function printName(city) {
  console.log(this.fn + " " + this.ln + " " + city + " ");
}
