// function declaration

function squareDecl(width, height) {
  console.log(width * height);
}

squareDecl(2, 4);

// function expression
const squareExp = function (width, height) {
  console.log(width * height);
};

squareExp(3, 5);

// arrow function
let squareArr = (width, height) => {
  console.log(width * height);
};
squareArr(1, 9);
