let person = {
  firstName: "Harry",
  lastName: "Potter",
  age: 15,
};

person.email = "The_boy_who_lived@hogwarts.uk";
delete person.age;

console.log(person);
