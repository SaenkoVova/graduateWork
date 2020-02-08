import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {ErrorMessage} from '../models/error';
import {Processing} from '../models/processing';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  error: ErrorMessage = {
    message: null
  };

  constructor() { }

  getError() {
    return of(this.error);
  }

  setError(error) {
    this.error.message = error;
  }
  cleanError() {
    this.error.message = null;
  }

}
