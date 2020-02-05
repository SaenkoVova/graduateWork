import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(10)]);

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }
  getErrorEmailMessage() {
    return this.email.hasError('required') ? 'Поле не може бути пустим' :
      this.email.hasError('email') ? 'Не дійсний email' :
        '';
  }
  getErrorPasswordMessage() {
    return this.password.hasError('required') ? 'Поле не може бути пустим' :
      this.password.hasError('required') ? 'Пароль закороткий' :
        '';
  }
  signUp(email, password) {
    console.log(email, password);
    this.userService.signUp();
  }
}
