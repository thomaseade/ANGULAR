import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = 'http://localhost:3000';

  logueado: boolean = false;
  usuario: User = new User();

  constructor(private http: HttpClient) {}

 




  register(user: User) {
    return this.http.post(`${this.url}/register`, user);
  }



  login(user: User) {
    return this.http.post(`${this.url}/login`, user);
  }
} 