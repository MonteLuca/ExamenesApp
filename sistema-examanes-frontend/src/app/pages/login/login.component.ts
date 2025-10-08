import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  logindata = {
    "username" : '',
    "password" : ''
  }

  constructor(private snack: MatSnackBar, private loginService: LoginService, private router: Router) {}

  formSubmit(){

    if(this.logindata.username.trim() == '' || this.logindata.username.trim() == null) {
      this.snack.open('El campo Usuario esta vacio', 'Aceptar', {
        duration:3000
      })
      return;
    }

    if(this.logindata.password.trim() == '' || this.logindata.password.trim() == null) {
      this.snack.open('El campo contraseña esta vacio', 'Aceptar', {
        duration:3000
      })
      return;
    }

    this.loginService.generateToken(this.logindata).subscribe(
      (data:any) => {
        console.log(data);
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe(
          (user:any) => {
            this.loginService.setUser(user);
            console.log(user);

            if ( this.loginService.getUserRole() == "ADMIN" ) {
              // * Dashboard admin
              // window.location.href = '/admin';
              this.router.navigate(['admin']);
              this.loginService.loginStatusSubject.next(true);
            } else if (this.loginService.getUserRole() == "NORMAL" ) {
              // * Dashboard user
              // window.location.href = '/user-dashboard'
              this.router.navigate(['user-dashboard/0']);
              this.loginService.loginStatusSubject.next(true);
            } else {
              this.loginService.logout();
            }
          })
      }, (error) => {
        console.log(error);
        this.snack.open('Detalles invalidos , vuelva a intentar', 'Aceptar', {
          duration: 3000
        })
      }
    )

  }

}
