import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  currentUser: User;

  ngOnInit(): void {
    this.getCurrentUserData();
  }

  getCurrentUserData() {
    this.auth.currentUser.subscribe(
      (data) => this.currentUser = data
    );
  }
}
