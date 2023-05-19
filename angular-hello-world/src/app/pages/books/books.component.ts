import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  
  books: Book[] = []; 
  

  newBook: Book = new Book(0, 0, "", "", "", 0, "");
  addBook() {
   
    this.books.push(this.newBook);

   
    this.newBook = new Book(0, 0, "", "", "", 0, "");
  }
  

  constructor() {
   
    this.books.push(
      new Book(1, 100, "Codenotch", "Novela", "Dani", 10.99, "assets/libro-icono.png"),
      new Book(2, 200, "2023", "Ciencia ficción", "Thomas Eade", 8.99, "assets/libro-icono.png"),
      new Book(undefined, undefined, "Mogly", "Novela", "John Lennon", 12.99, "assets/libro-icono.png"),
  
    );
  }
}




class Book {
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