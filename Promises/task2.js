function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => {
      if (!response.ok) {
        throw new Error("Не вдалось отримати результат в TODO");
      }
      return response.json();
    }
  );
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (response) => {
      if (!response.ok) {
        throw new Error("Не вдалось отримати результат User");
      }
      return response.json();
    }
  );
}

fetchTodo()
  .then((todo) => {
    console.log("Отримано TODO:", todo);
  })
  .catch((error) => {
    console.error("Не вдалось отримати результат TODO:", error);
  });

fetchUser()
  .then((user) => {
    console.log("Отримано USER:", user);
  })
  .catch((error) => {
    console.error("Не вдалось отримати результат USER:", error);
  });

Promise.all([fetchTodo(), fetchUser()])
  .then((results) => {
    const [todo, user] = results;
    console.log("Результат Promise.all:");
    console.log("Todo:", todo);
    console.log("User:", user);
  })
  .catch((error) => {
    console.error("Помилка у Promise.all:", error);
  });

Promise.race([fetchTodo(), fetchUser()])
  .then((result) => {
    console.log("Результат Promise.race:");
    console.log(result);
  })
  .catch((error) => {
    console.error("Помилка у Promise.race:", error);
  });
