import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtService} from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient,
    private  jwtService: JwtService
  ) { }


  getProfileData(): any {
      return this.http.get<any>('/api/profile', {headers: new HttpHeaders({
          'Content-type': 'application/json',
          Authorization: `Bearer ${this.jwtService.getToken()}`
        })
      });
    }
  }
