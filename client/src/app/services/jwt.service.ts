import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  getToken(): string {
    return window.localStorage.jwtToken;
  }
  getAdminToken(): string {
    return window.localStorage.adminJwtToken;
  }
  saveAdminToken(token): string {
    return window.localStorage.adminJwtToken = token;
  }
  destroyAdminToken() {
    window.localStorage.removeItem('adminJwtToken');
  }
  saveToken(token: string) {
    window.localStorage.jwtToken = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }
}
