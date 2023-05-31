import { Component } from '@angular/core';
import { BookService } from 'src/app/shared/bookservice.service';



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



  export class Book {
    id_book: number;
    id_user: number;
    title: string;
    type: string;
    author: string;
    price: number;
    photo: string;
  
    constructor(
      id_book: number = 0,
      id_user: number = 0,
      title: string,
      type: string,
      author: string,
      price: number,
      photo: string
    ) {
      this.id_book = id_book;
      this.id_user = id_user;
      this.title = title;
      this.type = type;
      this.author = author;
      this.price = price;
      this.photo = photo;
    }
  }