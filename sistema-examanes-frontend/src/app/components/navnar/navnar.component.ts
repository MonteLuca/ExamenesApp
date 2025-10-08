import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navnar',
  templateUrl: './navnar.component.html',
  styleUrls: ['./navnar.component.css']
})

export class NavnarComponent {

  user:any = null;
  isLoggedIn = false;

  constructor(public loginService: LoginService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.user = this.loginService.getUser();
    this.loginService.loginStatusSubject.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.loginService.isLoggedIn();
        this.user = this.loginService.getUser();
      }
    )
  }

  public logout() {
    this.loginService.logout();
    window.location.reload();
  }

}
