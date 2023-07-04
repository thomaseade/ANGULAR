
import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UsuarioService } from '../../shared/usuario.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User = new User();

  constructor(private usuarioService: UsuarioService) {
    this.getUserData();
  }


  getUserData() {
    const userId = this.usuarioService.getUserId();
    this.usuarioService.getUser(userId).subscribe(
      (user: User) => {
        this.user = user;
      },
      
    );
  }

  onSubmit() {
    this.usuarioService.edit(this.user).subscribe(
      () => {
        console.log('Datos de usuario actualizados correctamente');
      },
    
    );
  }
}