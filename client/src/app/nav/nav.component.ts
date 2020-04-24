import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthService} from '../services/auth.service';
import {BackgroundModeService} from '../services/background-mode.service';
import {User} from '../models/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
  );

  nightMode: boolean;

  currentUser: User;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private auth: AuthService,
    private backgroundModeService: BackgroundModeService
  ) {}

  ngOnInit() {
    this.backgroundModeService.currentMode
      .subscribe(
        (data) => {
          this.nightMode = data;
        }
      );
    this.getCurrentUser();
  }

  logOut() {
    this.auth.purgeAuth();
  }
  toggleMode() {
    this.backgroundModeService.toggleMode(this.nightMode);
    this.backgroundModeService.currentMode.subscribe(
      (data) => {
        this.nightMode = data;
      }
    );
  }
  getCurrentUser() {
    this.auth.currentUser.subscribe(
      (userData) => {
        console.log(userData);
        this.currentUser = userData;
      }
    );
  }
}
