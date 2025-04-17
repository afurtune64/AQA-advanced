function numFunction(num) {
  console.log(num);
  if (num > 0) {
    numFunction(num - 1);
  }
}

numFunction(5);
