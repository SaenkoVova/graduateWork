import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../models/User';
import {ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  fonds = [];
  cases = [];

  constructor(
    private auth: AuthService,
    private profileService: ProfileService
  ) { }

  currentUser: User;

  ngOnInit(): void {
    this.getCurrentUserData();
    this.profileService.getProfileData()
      .subscribe((data) => {
        this.fonds = data.fonds;
        console.log(this.fonds)
      });

  }

  getCurrentUserData() {
    this.auth.currentUser.subscribe(
      (data) => this.currentUser = data
    );
  }
}
