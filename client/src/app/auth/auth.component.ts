import {Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Error} from '../models/Error';
import {Router} from '@angular/router';
import {BackgroundModeService} from '../services/background-mode.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  addressForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]]
  });

  isSubmit = false;
  error = null;
  nightMode: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private backgroundMode: BackgroundModeService
  ) {}

  ngOnInit(): void {
    this.backgroundMode.currentMode.subscribe(
      (data) => this.nightMode = data
    );
  }

  onSubmit() {
    this.isSubmit = true;
    this.error = null;
    const credentials = {
      email: this.addressForm.get('email').value,
      password: this.addressForm.get('password').value
    };
    this.authService.attemptAuth('signin', credentials)
      .subscribe(
        data => {
          this.router.navigateByUrl('/');
        },
        err => {
          this.error = err.message;
          this.isSubmit = false;
        }
      );
  }
}
