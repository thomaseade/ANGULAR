import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/shared/bookservice.service';
import { UsuarioService } from 'src/app/shared/usuario.service';



@Component({

  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})

export class UpdateBookComponent {
  updatedBook: Book = new Book(0, 0, '', '', '', 0, '');

  constructor( private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService,) {}



  //actualizar metodo updatebook para actualizar el libro con el metodo de la API aqui

  updateBook() {
    const userId = this.usuarioService.getUserId(); // Obtener ID del usuario logueado

    // Verificar si la ID del usuario coincide
    if (userId === this.updatedBook.id_user) {
      this.bookService.updateBook(this.updatedBook).subscribe(
        (response) => {
          console.log(response);
      
        },
        
      );
    } else {
      console.log('No tiene permiso para editar este libro');
    }
  }
}

