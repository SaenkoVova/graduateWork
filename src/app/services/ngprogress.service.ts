import { Injectable } from '@angular/core';
import { NgProgressRef, NgProgress } from 'ngx-progressbar';

@Injectable({
  providedIn: 'root'
})
export class NgprogressService {

  progressRef: NgProgressRef;

  constructor(public ngProgress:NgProgress) { 
    this.progressRef = this.ngProgress.ref();
  }

  ngProgressStart() {
   this.progressRef.start();
  }
  ngProgressComplete() {
    this.progressRef.complete();
  }
}
