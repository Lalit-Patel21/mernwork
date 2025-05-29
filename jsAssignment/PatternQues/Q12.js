for (let i = 1; i <= 5; i++) {
  let a = "";
  for (let j = 1; j <= 5; j++) {
    if (i == 1 || j == 1 || i == 5 || j == 5) a += "*";
    else a += " ";
  }
  console.log(a); //space line
}
