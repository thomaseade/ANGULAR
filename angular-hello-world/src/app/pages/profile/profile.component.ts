
import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User = new User();

  onSubmit() {
    this.user.name = document.getElementById('nombreInput')['value'];
    this.user.last_name = document.getElementById('apellidosInput')['value'];
    this.user.email = document.getElementById('correoInput')['value'];
  
    let url = document.getElementById('urlInput')['value'];

    let imagenPerfil = document.getElementById('imagenPerfil');
    imagenPerfil.setAttribute('src', url);
  }
}
