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





//buscar libro por su id/id user logueado;


  searchBooks() {
    if (this.searchId === null) {
      this.getBooks();
    } else {
      const userId = this.usuarioService.getUserId();
      this.bookService.getBookByUserAndId(userId, this.searchId).subscribe(
        (book) => {
          this.books = book ? [book] : [];
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

 






  // recibe los libros, del Id_user que se loguea

  private getBooks() {
  this.bookService.getBooksByUser(this.usuarioService.getUserId()).subscribe(
    (books: Book[]) => {
      console.log(books); //comprobar que llegna libros
      this.books = books;
    },
    
  );
}



// metodo para borrar un libro por su id_book;




deleteBook(bookId: number) {
  this.bookService.delete(bookId).subscribe(
    () => {
      console.log('Libro eliminado correctamente');
      // Actualizar la lista de libros después de eliminar uno
      const userId = this.usuarioService.getUserId();
      this.bookService.getBooksByUser(userId).subscribe(
        (response) => {
          this.books = response;
        },
        
      );
    },
    
  );
}
}





