import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {BackgroundModeService} from './services/background-mode.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentRoute;
  constructor(
    private auth: AuthService,
    private appMode: BackgroundModeService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.auth.populate();
    this.appMode.getCurrentMode();
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.currentRoute = e.url;
      }
    });

  }
}
