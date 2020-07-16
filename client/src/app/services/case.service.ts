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

  getCases(pageSize, pageIndex, fondId): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const req = {pageSize, pageIndex, fondId};
    return this.http.post<any>('/api/load/cases', req, httpOptions);
  }
}
