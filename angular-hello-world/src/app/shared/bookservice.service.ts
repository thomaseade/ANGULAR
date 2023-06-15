import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {


private url:string = 'http://localhost:3000/books'
constructor(private http:HttpClient){}


getAll() {
  return this.http.get(this.url);
}

getOne(id_book: number) {
  const url = `${this.url}?id=${id_book}`;
  return this.http.get(url);
}

add(book: any) {
  return this.http.post(this.url, book);
}

edit(book: any) {
  return this.http.put(this.url, book);
}


delete(id_book:number){
  return this.http.request('delete', this.url, {body:{id_book:id_book}});
}


}