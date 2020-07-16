import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtService} from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class FondsService {

  constructor(
    private http: HttpClient,
    private jwtService: JwtService
  ) { }

  getFonds(pageSize, pageIndex): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const req = {pageSize, pageIndex};
    return this.http.post<any>('/api/load/fonds', req, httpOptions);
  }
  addToProfile(fondId): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.jwtService.getToken()}`
      })
    };
    const req = {fondId};
    return this.http.post<any>(
      '/api/profile/addFond',
      req,
      httpOptions
    );
  }

  addFond(fond) {
    const adminToken = window.localStorage.getItem('adminJwtToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${adminToken}`
      })
    };
    return this.http.post<any>(
      '/api/admin/addFond',
      fond,
      httpOptions
    );
  }
}
