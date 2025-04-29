import Book from './book.js';
import EBook from './eBook.js';

const book1 = new Book(
  'Harry Potter and the Philosopher`s Stone',
  'J. K. Rowling',
  1997
);
const book2 = new Book(
  'Harry Potter and the Chamber of Secrets',
  'J. K. Rowling',
  1998
);
const book3 = new Book(
  'Harry Potter and the Prisoner of Azkaban',
  'J. K. Rowling',
  1999
);

const ebook1 = new EBook(
  'The Lord of the Rings',
  'ВJ. R. R. Tolkien',
  1968,
  'EPUB'
);

book1.printInfo();
console.log('         ');
book2.printInfo();
console.log('         ');
book3.printInfo();
console.log('         ');
ebook1.printInfo();
console.log('         ');

ebook1.fileFormat = 'PDF';
console.log('Новий формат:', ebook1.fileFormat);
console.log('         ');

const allBooks = [book1, book2, book3, ebook1];
const oldest = Book.findOldestBook(allBooks);
console.log('Найдавніша книга:');
oldest.printInfo();
console.log('         ');

const ebookFromBook = EBook.fromBook(book1, 'TXT');
console.log('Book перетворюємо на eBook:');
ebookFromBook.printInfo();
console.log('         ');
