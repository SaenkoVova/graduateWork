import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter();

  user: User;

  nav = [
    {
      title: 'Увійти',
      icon: 'lock',
      path: 'signin'
    },
    {
      title: 'Зареєструватися',
      icon: 'account_circle',
      path: 'signup'
    }
  ];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.user = this.userService.getUser();
  }
}
