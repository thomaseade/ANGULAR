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
  newBook: Book = new Book(0, 0, "", "", "", 0, "");
  searchId: number | null = null;



  addBook() {
    this.bookService.addBook(this.newBook);
    this.newBook = new Book(0, 0, "", "", "", 0, "");
  }
  
  deleteBook(book: Book) {
    this.bookService.deleteBook(book);
  }

  constructor(private bookService: BookService) {
   
   this.books = this.bookService.getBooks();
  }

  searchBooks() {
    if (this.searchId === null) {
      this.books = this.bookService.getBooks();
    } else {
      const book = this.bookService.getBookById(this.searchId);
      if (book) {
        this.books = [book];
      } else {
        this.books = [];
      }
    }
  }

  resetSearch() {
    this.searchId = null;
    this.books = this.bookService.getBooks();
  }

 
}


