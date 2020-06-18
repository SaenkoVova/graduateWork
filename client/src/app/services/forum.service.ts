import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(
    private http: HttpClient
  ) { }

  getTopics() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<any>('/api/forum', httpOptions);
  }

  getReviewsForTopic(topicId) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>('/api/forum/getreview', {topicId}, httpOptions);
  }

  doQuestion(question, token) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    };
    return this.http.post<any>('/api/forum/question', {question}, httpOptions);
  }

  doAnswer(topicId, answer) {
    const token = window.localStorage.getItem('adminJwtToken');
    console.log(token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    };
    return this.http.post<any>('/api/forum/doanswer', {topicId, answer}, httpOptions);
  }
}
