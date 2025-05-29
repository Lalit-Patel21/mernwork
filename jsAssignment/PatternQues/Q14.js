for (let i = 1; i <= 3; i++) {
  let a = "";
  for (let j = 1; j <= 3 - i; j++) {
    a += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    if (k == 1 || i == 3 || k == 2 * i - 1) {
      a += "*";
    } else {
      a += " ";
    }
  }
  console.log(a); //space line
}
