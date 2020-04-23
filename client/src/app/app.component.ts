import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {BackgroundModeService} from './services/background-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private appMode: BackgroundModeService
  ) {
  }

  ngOnInit(): void {
    this.auth.populate();
    this.appMode.getCurrentMode();
  }
}
