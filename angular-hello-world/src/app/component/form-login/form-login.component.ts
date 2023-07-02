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

  login(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const user = new User(); 
      user.email = email;
      user.password = password;

      this.usuarioService.login(user).subscribe(
        (response: any) => {
          if (response.success) {
            console.log('Inicio de sesión exitoso');
            this.usuarioService.logueado = true;
            this.usuarioService.usuario = user;
            this.router.navigate(['/books']);
          } else {
            console.log(response.message);
          }
        }
      )
    } 
    }
  }
