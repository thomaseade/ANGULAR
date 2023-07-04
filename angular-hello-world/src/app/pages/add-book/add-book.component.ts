import { Component } from '@angular/core';
import { BookService } from 'src/app/shared/bookservice.service';
import { Book } from 'src/app/models/book'; 
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  newBook: Book = new Book(0, 0, '', '', '', 0, '');


  constructor(private bookService: BookService,
    private usuarioService: UsuarioService,) { }

  addBook() {
    const userId = this.usuarioService.getUserId(); // Obtener ID del usuario logueado

    this.newBook.id_user = userId; // Asignar ID del usuario al libro

    this.bookService.add(this.newBook).subscribe(
      (response) => {
        console.log(response);
      },
    
    );
  }
}




