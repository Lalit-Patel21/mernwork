// const first = (callback) => {
//   console.log("first");
//   setTimeout(callback(), 10000);
// };
// const sec = () => {
//   setTimeout(console.log("sec"), 5000);
// };

// first(() => {
//   sec();
// });

// Simulating callback hell

function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 completed");
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 completed");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 completed");
    callback();
  }, 1000);
}

function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 completed");
    callback();
  }, 1000);
}

// Here, we nest the callbacks, causing callback hell
task1(function () {
  task2(function () {
    task3(function () {
      task4(function () {
        console.log("All tasks completed!");
      });
    });
  });
});

// inversion of control
//

const cart = ["shoes", mobile, charger];

createorder();
showordersummery();
