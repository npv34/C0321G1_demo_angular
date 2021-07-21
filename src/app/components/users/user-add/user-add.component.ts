import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  hide = true;
  formAddUser: FormGroup | undefined;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formAddUser = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      address: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
      image: ['']
    })
  }

  submit() {
    this.formAddUser?.patchValue({
      image: 'https://img.icons8.com/bubbles/2x/user.png'
    })
    let data = this.formAddUser?.value;
    this.userService.add(data).subscribe(res => {
       this.router.navigate(['admin/users'])
    })
  }

  getErrorMessageEmail() {
    if (this.email?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email?.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageName() {
    return this.name?.hasError('required') ? 'You must enter a value' : '';
  }

  getErrorMessagePhone() {
    if (this.phone?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.phone?.hasError('pattern') ? 'Not a valid phone number' : '';
  }

  getErrorMessagePassword() {
    if (this.password?.hasError('required')) {
      return 'You must enter a value';
    } else if (this.password?.hasError('minlength')) {
      return 'Min 6 characters'
    }
    return this.password?.hasError('maxlength') ? 'Max 32 characters' : '';
  }

  get email() {
    return this.formAddUser?.get('email')
  }

  get name() {
    return this.formAddUser?.get('name')
  }

  get phone() {
    return this.formAddUser?.get('phone')
  }

  get password() {
    return this.formAddUser?.get('password')
  }
}
