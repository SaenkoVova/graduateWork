import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Error} from '../models/Error';
import {AuthService} from '../services/auth.service';
import {NgProgressService} from '../services/ng-progress.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  addressForm = this.fb.group({
    firstName: [null, Validators.required],
    secondName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
    confirm: [null, Validators.required, ]
  });

  isSubmit = false;
  error = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private ngProgressService: NgProgressService,
    private router: Router
  ) {}

  onSubmit() {
    this.isSubmit = true;
    this.error = null;
    const credentials = {
      firstName: this.addressForm.get('firstName').value,
      secondName: this.addressForm.get('secondName').value,
      email: this.addressForm.get('email').value,
      password: this.addressForm.get('password').value
    };
    this.authService.attemptAuth('signup', credentials)
      .subscribe(
        data => this.router.navigateByUrl('/'),
        err => {
          this.error = err.message;
          this.isSubmit = false;
        }
      );
  }
}
