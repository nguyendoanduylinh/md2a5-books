import { Book } from "./book";

let book1 = new Book("The design of everyday things", "don Norman", false);
let book2 = new Book("The most human human", "Brian Christian", true);

let books: Book[] = [];
books.push(book1, book2);

for (let i = 0; i < books.length; i++) {
  let book = books[i];
  let bookInfo = book.title + '" by ' + book.author;
  if (book.alreadyRead) {
    console.log('You already read "' + bookInfo);
  } else {
    console.log('You still need to read "' + bookInfo);
  }
}
