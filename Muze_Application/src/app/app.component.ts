import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogged: boolean = false;
  userInfo: any;

  constructor(private router:Router) {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    const userData = localStorage.getItem('EmployerUser');
    if (userData == null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
      this.userInfo = JSON.parse(userData);
      return
    }
  }

  logoff() {
    localStorage.removeItem('EmployerUser');
    this.isLogged = false;
    this.userInfo = null;
    this.router.navigate(['/home']);
    return
  }
}