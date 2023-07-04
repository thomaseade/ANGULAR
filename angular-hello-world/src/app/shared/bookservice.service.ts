import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url: string = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }



  getAll() {
    return this.http.get<Book[]>(this.url);
  }

  getOne(id_book: number) {
    const url = `${this.url}?id_book=${id_book}`;
    return this.http.get<Book>(url);
  }

  add(book: Book) {
    return this.http.post(this.url, book);
  }

  edit(book: Book) {
    const url = `${this.url}?id_book=${book.id_book}`;
    return this.http.put(url, book);
  }

  delete(id_book: number) {
    const url = `${this.url}?id_book=${id_book}`;
    return this.http.delete(url);
  }








//mostrar los libros asignados a un usuario cuando se redirije a la pagina books tras loguearse
  getBooksByUser(userId: number) {
    console.log((this.url));
    const url = `${this.url}?id_user=${userId}`;
    return this.http.get<Book[]>(url);
  }



// metodo para el buscador de pagina books, buscar libro por su id_book.




}




