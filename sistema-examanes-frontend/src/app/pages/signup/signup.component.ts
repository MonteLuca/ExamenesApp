import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  private notifications: string[] = [];
  private flag: Boolean = false;
  public password2: string = '';

  showNotification(message: string | undefined) {

    if (message) {
      this.notifications.push(message);
    }

    if (!this.flag) {
      this.showNextNotification();
    }
  }

  showNextNotification() {
    if (this.notifications.length > 0) {

      const message = this.notifications.shift();
      this.flag = true;

      if (message) {
        const snackBarRef = this.snack.open(message, ' Cerrar ', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });

        snackBarRef.afterDismissed().subscribe(() => {
          this.flag = false;
          this.showNextNotification();
        })
      }
    }
  }

  public user: Usuario = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  }

  constructor(private userService: UserService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit() {

    if (this.user.username == '' || this.user.username == null) {
      this.showNotification('El usuario esta vacio');
      return
    }

    if (this.user.password == '' || this.user.password == null) {
      this.showNotification('La contraseña esta vacia');
      return
    }

    if (this.user.password != this.password2){
      this.showNotification('Ambas contraseñas deben ser iguales');
      return
    }

    if (this.user.nombre == '' || this.user.nombre == null) {
      this.showNotification('El nombre esta vacio')
      return
    }

    if (this.user.apellido == '' || this.user.apellido == null) {
      this.showNotification('El apellido esta vacio')
      return
    }

    if (this.user.email == '' || this.user.email == null) {
      this.showNotification('El email esta vacio')
      return
    }

    if (this.user.telefono == '' || this.user.telefono == null) {
      this.showNotification('El telefono esta vacio')
      return
    }

    this.userService.registrarUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Usuario guardado', 'Usuario registrado con exito en el sistema', 'success');
      }, (error) => {
        console.log(error);
        this.snack.open('Ha ocurrido un error', 'Okay', {
          duration: 3000,
        });
      }
    )
  }

  // validar() {

  //   if (this.user.username == '' || this.user.username == null) {
  //     this.showNotification('El usuario esta vacio');
  //     return
  //   }

  //   if (this.user.password == '' || this.user.password == null) {
  //     this.showNotification('La contraseña esta vacia');
  //     return
  //   }

  //   if (this.user.password != this.password2){
  //     this.showNotification('Ambas contraseñas deben ser iguales');
  //     return
  //   }

  //   if (this.user.nombre == '' || this.user.nombre == null) {
  //     this.showNotification('El nombre esta vacio')
  //     return
  //   }

  //   if (this.user.apellido == '' || this.user.apellido == null) {
  //     this.showNotification('El apellido esta vacio')
  //     return
  //   }

  //   if (this.user.email == '' || this.user.email == null) {
  //     this.showNotification('El email esta vacio')
  //     return
  //   }

  //   if (this.user.telefono == '' || this.user.telefono == null) {
  //     this.showNotification('El telefono esta vacio')
  //     return
  //   }

  // }

}
