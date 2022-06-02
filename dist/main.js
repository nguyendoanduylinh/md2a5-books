"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./book");
let book1 = new book_1.Book("The design of everyday things", "don Norman", false);
let book2 = new book_1.Book("The most human human", "Brian Christian", true);
let books = [];
books.push(book1, book2);
for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfo = book.title + '" by ' + book.author;
    if (book.alreadyRead) {
        console.log('You already read "' + bookInfo);
    }
    else {
        console.log('You still need to read "' + bookInfo);
    }
}
//# sourceMappingURL=main.js.map