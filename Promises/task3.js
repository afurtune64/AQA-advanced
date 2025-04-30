async function fetchTodo() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let result = await response.json();
    return result;
  } catch (error) {
    throw new Error('Не вдалось отримати результат в TODO', error);
  }
}

async function fetchUser() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    let result = await response.json();
    return result;
  } catch (error) {
    throw new Error('Не вдалось отримати результат User', error);
  }
}

fetchTodo()
  .then((todo) => {
    console.log('Отримано TODO:', todo);
  })
  .catch((error) => {
    console.error('Не вдалось отримати результат TODO:', error);
  });

fetchUser()
  .then((user) => {
    console.log('Отримано USER:', user);
  })
  .catch((error) => {
    console.error('Не вдалось отримати результат USER:', error);
  });

Promise.all([fetchTodo(), fetchUser()])
  .then((results) => {
    const [todo, user] = results;
    console.log('Результат Promise.all:');
    console.log('Todo:', todo);
    console.log('User:', user);
  })
  .catch((error) => {
    console.error('Помилка у Promise.all:', error);
  });

Promise.race([fetchTodo(), fetchUser()])
  .then((result) => {
    console.log('Результат Promise.race:');
    console.log(result);
  })
  .catch((error) => {
    console.error('Помилка у Promise.race:', error);
  });
