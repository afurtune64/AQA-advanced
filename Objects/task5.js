const users = [
  { name: "Harry", email: "The_boy_who_lived@hogwarts.uk", age: 21 },
  { name: "Ron", email: "one_more_Weasley@hogwarts.uk", age: 20 },
  {
    name: "Hermione",
    email: "next_Minister_for_Magic_granger@hogwarts.uk",
    age: 22,
  },
];

for (const { name, email, age } of users) {
  console.log(`Ім'я: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Вік: ${age}`);
  console.log("           ");
}
