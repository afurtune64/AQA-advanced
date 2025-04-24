class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }

  set title(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Назва книги має бути рядком");
    }
    this._title = value;
  }

  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Ім’я автора має бути рядком");
    }
    this._author = value;
  }

  set year(value) {
    if (!Number.isInteger(value) || value < 0) {
      throw new Error("Рік має бути додатнім цілим числом");
    }
    this._year = value;
  }

  printInfo() {
    console.log(`Назва: ${this.title}`);
    console.log(`Автор: ${this.author}`);
    console.log(`Рік видання: ${this.year}`);
    console.log("          ");
  }

  static findOldestBook(books) {
    return books.reduce((oldest, current) => {
      return current.year < oldest.year ? current : oldest;
    });
  }
}
// let book1 = new Book(
//   "Harry Potter and the Philosopher's Stone",
//   "J. K. Rowling",
//   1997
// );
// let book2 = new Book(
//   "Harry Potter and the Chamber of Secrets",
//   "J. K. Rowling",
//   1998
// );

// book1.printInfo();
// book2.printInfo();

export default Book;
