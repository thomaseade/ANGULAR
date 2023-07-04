import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }



  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }






  // metodo login que crea un objeto usuario con todos sus datos menos la contraseña, importante para el Id_user

  login(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const user = new User(); 
      user.email = email;
      user.password = password;
  
      this.usuarioService.login(user).subscribe(
        (response: any) => {
          console.log(response); 
          if (response.success) {
            console.log('Inicio de sesión exitoso');
            console.log(this.usuarioService.usuario)
            this.usuarioService.logueado = true;
            this.usuarioService.usuario = response.user;// Asignar el usuario devuelto por la respuesta
            console.log(this.usuarioService.usuario) 
            this.router.navigate(['/books']);
          } else {
            console.log(response.message);
          }
        }
      );
    } 
  }
  }
