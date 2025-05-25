"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true
    }
}
class Member {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed "${book.title}" by ${book.author}`);
        }
        else {
            console.log(`"${book.title}" is not available for borrowing.`);
        }
    }
    returnBook(book) {
        const index = this.borrowedBooks.findIndex(b => b.title === book.title);
        if (index !== -1) {
            book.isAvailable = true;
            this.borrowedBooks.splice(index, 1);
            console.log(`${this.name} returned "${book.title}" by ${book.author}`);
        }
        else {
            console.log(`${this.name} does not have "${book.title}" borrowed.`);
        }
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(...books) {
        this.books.push(...books);
    }
    addMember(...member) {
        this.members.push(...member);
    }
    findBookByName(title) {
        if (this.books.find(book => book.title == title)) {
            console.log(`Book with title "${title}" found.`);
            return this.books.find(book => book.title == title);
        }
        else {
            console.log(`Book with title "${title}" not found.`);
        }
    }
}
const library = new Library();
const book1 = new Book("Oathbringer", "Brandon Sanderson");
const book2 = new Book("Afonja the Rise", "Tunde Leye");
const book3 = new Book("The City of Brass", "S.A. Chakraborty");
const book4 = new Book("Mistborn: The Final Empire", "Brandon Sanderson");
library.addBook(book1, book2, book3); // adding books to the library
console.log(`There are currently ${library.books.length} books in the library.`);
const member1 = new Member("Katrina");
const member2 = new Member("Chi-Ife");
library.addMember(member1, member2);
console.log(`There are currently ${library.members.length} members in the library.`);
const bookToBorrow = library.findBookByName("Oathbringer");
member1.borrowBook(bookToBorrow);
member2.borrowBook(bookToBorrow);
member1.returnBook(bookToBorrow);
