import { Component } from '@angular/core';
import { BookService } from 'src/app/shared/bookservice.service';
import { Book } from 'src/app/models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  
})
export class BooksComponent {
  books: Book[] = [];
  newBook: Book = new Book(0, 0, '', '', '', 0, '');
  searchId: number | null = null;
  userId: number;

  constructor(   private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService) {
    this.getBooks();
  }

  // addBook() {
  //   this.bookService.add(this.newBook).subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.newBook = new Book(0, 0, '', '', '', 0, '');
  //       this.getBooks();
  //     },
   
  //   );
  // }



  deleteBook(id:number) {
    console.log(id);
    this.bookService.delete(id).subscribe(
      (response : string) => {
        console.log(response);
        this.getBooks();
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
      
      );
    }
  }

  resetSearch() {
    this.searchId = null;
    this.getBooks();
  }

  navigateToUpdateBook(bookId: number) {
    this.router.navigate(['/updatebook', bookId]);
  }






  // recibe los libros, del Id_user que se loguea

  private getBooks() {
  this.bookService.getBooksByUser(this.usuarioService.getUserId()).subscribe(
    (books: Book[]) => {
      console.log(books); //comprobar que llegna libros
      this.books = books;
    },
    
  );
}



// metodo para buscar un libro por su id_book






}