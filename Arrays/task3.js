const arrayNumbers = [10, 20, 30, 40, 50];
const initialValue = 0;
const sum = arrayNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);

console.log('Сума елементів масиву:', sum);
