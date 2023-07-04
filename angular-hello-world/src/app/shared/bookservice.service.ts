import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url: string = 'http://localhost:3000/books';

  constructor(private http: HttpClient,
    private usuarioService: UsuarioService,) { }



  
  

 

  








//mostrar los libros asignados a un usuario cuando se redirije a la pagina books tras loguearse
  getBooksByUser(userId: number) {
    console.log((this.url));
    const url = `${this.url}?id_user=${userId}`;
    return this.http.get<Book[]>(url);
  }



// metodo para actualizar el libro en la pagina update-book


updateBook(book: Book) {
  const url = `${this.url}?id_book=${book.id_book}`;
  return this.http.put(url, book);
}


//metodo para añadir un libro en la pagina add-book

add(book: Book) {
  return this.http.post(this.url, book);
}



//metodo para borrar un libro en la pagina book

delete(id_book: number) {
  const url = `${this.url}?id_book=${id_book}`;
  return this.http.delete(url);
}



// METODO PARA BUSCAR UN LIBRO DEL USUARIO LOGUEADO AQUI


getBookByUserAndId(userId: number, bookId: number) {
  const url = `${this.url}/user?id_user=${userId}&id_book=${bookId}`;
  return this.http.get<Book>(url);
}

}








