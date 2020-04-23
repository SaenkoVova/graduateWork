import { Injectable } from '@angular/core';
import {BehaviorSubject, ReplaySubject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackgroundModeService {

  private currentModeSubject = new ReplaySubject<boolean>(1);
  public currentMode = this.currentModeSubject.asObservable();

  constructor() { }

  getCurrentMode() {
    if (window.localStorage.nightMode) {
      this.currentModeSubject.next(true);
    } else {
      this.currentModeSubject.next(false);
    }
  }
  toggleMode(currentMode) {
    currentMode ? this.currentModeSubject.next(false) : this.currentModeSubject.next(true);
  }
}
