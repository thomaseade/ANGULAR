import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UsuarioService} from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      photo: [''],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
  }









  
  onSubmit() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      if (userData.password !== userData.repeatPassword) {
        console.log('Las contraseñas no coinciden');
        return;
      }

      this.usuarioService.register(userData).subscribe(
        function (response) {
          console.log('Registro exitoso:', response);
        
        },
        
      );
    }
  }
}