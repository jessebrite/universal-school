import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(user: string, password: string): any {
    if (user === 'user' && password === 'password') {
      localStorage.setItem('username', user);
      return this.router.navigate(['home']);
    }
    return false;
  }

  logout(): any {
    localStorage.removeItem('username');
    return this.router.navigate(['login']);
    console.log('Successful logout');
  }

  getUser(): string {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];


