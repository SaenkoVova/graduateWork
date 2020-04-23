import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(
    private http: HttpClient
  ) { }

  getCases(pageSize, pageIndex): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const req = {pageSize, pageIndex};
    return this.http.post<any>('/api/load/cases', req, httpOptions);
  }
}
