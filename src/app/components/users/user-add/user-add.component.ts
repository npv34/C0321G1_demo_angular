import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  hide = true;
  formAddUser: FormGroup | undefined;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formAddUser = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      address: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]]
    })
  }

  submit() {
    let data = this.formAddUser?.value;
    console.log(data)
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
