// function declaration

function squareDecl(width, height) {
  return width * height;
}

console.log(squareDecl(2, 4));

// function expression
const squareExp = function (width, height) {
  return width * height;
};

console.log(squareExp(3, 5));

// arrow function
let squareArr = (width, height) => {
  return width * height;
};

console.log(squareArr(1, 9));
