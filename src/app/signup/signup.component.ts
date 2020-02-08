import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {GeneralService} from '../services/general.service';
import {ErrorMessage} from '../models/error';
import {Processing} from '../models/processing';
import {Router} from '@angular/router';
import {User} from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(10)]);
  error: ErrorMessage = {
    message: null
  };
  user: User;
  constructor(
    private userService: UserService,
    private generalService: GeneralService,
    private route: Router
  ) { }

  ngOnInit() {
    this.getError();
    this.isAuthenticate();
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
    this.generalService.cleanError();
    this.userService.signUp(email, password);
  }
  getError() {
    this.generalService.getError().subscribe(error => {
      this.error = error;
    });
  }
  isAuthenticate() {
    this.userService.getUser().subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }
}
