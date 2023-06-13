import { Component } from '@angular/core';
import { BookService } from 'src/app/shared/bookservice.service';
import { Book } from 'src/app/models/book';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  
})
export class BooksComponent {
  books: Book[] = [];
  newBook: Book = new Book(0, 0, '', '', '', 0, '');
  searchId: number | null = null;

  constructor(private bookService: BookService) {
    this.getBooks();
  }

  addBook() {
    this.bookService.add(this.newBook).subscribe(
      (response) => {
        console.log(response);
        this.newBook = new Book(0, 0, '', '', '', 0, '');
        this.getBooks();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteBook(book: Book) {
    this.bookService.delete(book.id).subscribe(
      (response) => {
        console.log(response);
        this.getBooks();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  searchBooks() {
    if (this.searchId === null) {
      this.getBooks();
    } else {
      this.bookService.getOne(this.searchId).subscribe(
        (book) => {
          this.books = book ? [book as Book] : [];
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  resetSearch() {
    this.searchId = null;
    this.getBooks();
  }

  private getBooks() {
    this.bookService.getAll().subscribe(
      (books) => {
        this.books = books as Book[];
      },
      (error) => {
        console.log(error);
      }
    );
  }
}