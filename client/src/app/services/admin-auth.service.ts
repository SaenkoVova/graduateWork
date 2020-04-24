import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';
import {User} from '../models/User';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {JwtService} from './jwt.service';
import {ApiService} from './api.service';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  private currentUserSubject = new BehaviorSubject({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private http: HttpClient,
    private jwtService: JwtService,
    private apiService: ApiService,
    private router: Router
  ) { }

  populate() {
    const token = this.jwtService.getAdminToken();
    if (token) {
      this.apiService.post(`/auth/user`, {token})
        .subscribe(
          data => this.setAuth(data),
          err => this.purgeAuth()
        );
    } else {
      this.purgeAuth();
    }
  }
  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }
  setAuth(user: User) {
    this.jwtService.saveAdminToken(user.token);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    this.jwtService.destroyAdminToken();
    this.currentUserSubject.next({} as User);
    this.isAuthenticatedSubject.next(false);
    this.router.navigateByUrl('/admin');
  }

  attemptAuth(type, credentials): Observable<User> {
    const route = (type === 'signin') ? '/auth/signin' : '/auth/signup';
    return this.apiService.post(route, credentials)
      .pipe(map(
        data => {
          this.setAuth(data);
          return data;
        }
      ));
  }
}
