import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  processing = false;
  error = null;

  constructor() { }

  setProcessing() {
    this.processing = true;
  }
  setError(error) {
    this.error = error;
  }
  cleanError() {
    this.error = null;
  }
}
