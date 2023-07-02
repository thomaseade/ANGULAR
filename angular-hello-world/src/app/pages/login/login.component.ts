import { Component } from '@angular/core';
import { UsuarioService} from 'src/app/shared/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  constructor(private usuarioService: UsuarioService) { }
}
