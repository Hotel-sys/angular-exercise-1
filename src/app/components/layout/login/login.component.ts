import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MdbFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  login: LoginComponent = new LoginComponent();

  router = inject(Router);

  logar(){
    if(this.login.username == 'admin' && this.login.password == 'admin'){
      this.router.navigate(['admin/carros']);
    }else
      alert('não de ucerto'); 
  }

  

}