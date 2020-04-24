import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BackgroundModeService} from '../services/background-mode.service';
import {AdminAuthService} from '../services/admin-auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  addressForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]]
  });

  isSubmit = false;
  error = null;
  nightMode: boolean;

  constructor(
    private fb: FormBuilder,
    private adminAuthService: AdminAuthService,
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
    this.adminAuthService.attemptAuth('signin', credentials)
      .subscribe(
        data => {
          this.router.navigateByUrl('admin/dashboard');
        },
        err => {
          this.error = err.message;
          this.isSubmit = false;
        }
      );
  }

}
