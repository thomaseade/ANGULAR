import { Component } from '@angular/core';
import {UsuarioService} from 'src/app/shared/usuario.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private usuarioService: UsuarioService) { }
}
