class ToDo {
  static async fetchTodo() {
    try {
      let response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      let result = await response.json();
      return result;
    } catch (error) {
      throw new Error('Не вдалось отримати результат в TODO', error);
    }
  }
}

ToDo.fetchTodo()
  .then((todo) => {
    console.log('Отримано TODO:', todo);
  })
  .catch((error) => {
    console.error('Не вдалось отримати результат TODO:', error);
  });

class User {
  async fetchUser() {
    try {
      let response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      let result = await response.json();
      return result;
    } catch (error) {
      throw new Error('Не вдалось отримати результат User', error);
    }
  }
}
const myUser = new User();

myUser
  .fetchUser()
  .then((user) => {
    console.log('Отримано USER:', user);
  })
  .catch((error) => {
    console.error('Не вдалось отримати результат USER:', error);
  });
