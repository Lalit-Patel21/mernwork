import event from "events";

const eventEmitter = new event.EventEmitter();

eventEmitter.on("add", (a, b) => {
  console.log("Addition : " + (a + b));
});
eventEmitter.on("sub", (a, b) => {
  console.log("Subtraction : " + (a - b));
});
eventEmitter.on("mult", (a, b) => {
  console.log("Multiplication : " + a * b);
});

eventEmitter.emit("add", 20, 10);
eventEmitter.emit("sub", 20, 10);
eventEmitter.emit("mult", 20, 10);
