import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message = '';

  constructor(private authService: AuthService) { }

  login(username: string, password: string) {
    if (!this.authService.login(username, password)) {
      this.message = 'Wrong credentials';
      setTimeout(function() {
        this.message = '';
      }.bind(this), 2500);
    }
    console.log('Logged in');
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }

  ngOnInit() {
  }

}
