import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  checkAccount(data: any) {
    return data.email == 'admin@gmail.com' && data.password == '1234';
  }

  isLogin() {
    return localStorage.getItem('token');
  }
}
