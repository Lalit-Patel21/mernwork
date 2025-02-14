// 4. Find the difference in age between the oldest
// and youngest family members, and
// return their respective ages and the age difference.
//   input:-  output:- [13, 67, 54];
const objArr = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

// let ages = objArr.filter((person) => person.age).map((person) => person.age);
// let ages = objArr.map((person) => person.age);
// console.log(ages);
const ages = objArr.map((person) => person.age);
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);
const ageDifference = maxAge - minAge;
const result = [minAge, maxAge, ageDifference];
console.log(result);
