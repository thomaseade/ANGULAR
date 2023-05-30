import { Injectable } from '@angular/core';
import { Book } from '../pages/books/books.component';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [];

  constructor() {
    this.books.push(
      new Book(1, 100, "Codenotch", "Novela", "Dani", 10.99, "assets/libro-icono.png"),
      new Book(2, 200, "2023", "Ciencia ficción", "Thomas Eade", 8.99, "assets/libro-icono.png"),
      new Book(undefined, undefined, "Mogly", "Novela", "John Lennon", 12.99, "assets/libro-icono.png"),
    );
  }

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  deleteBook(book: Book): void {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
}