import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  errLogin: string = '';
  formLogin: FormGroup | undefined;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  login() {
    let data = this.formLogin?.value;
    if (this.authService.checkAccount(data)) {
      localStorage.setItem('token', '121212');
      this.router.navigate(['admin/users'])
    } else {
      this.errLogin = 'Account not exist';
    }
  }

}
