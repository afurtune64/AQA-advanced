let car1 = {
  brand: 'Toyota',
  model: 'C-HR',
  year: '2021',
};

let car2 = {
  brand: 'Kia',
  model: 'Sorento',
  year: '2019',
  owner: 'Anna Hanna', // додала овнер
};

let car3 = {
  ...car1,
  ...car2,
};

console.log('Виводимо car3:', car3);
console.log('           ');
car3 = [car1, car2];
console.log('Об`єднуємо 2 об`єкти у car3:', car3);
