import { Injectable } from '@angular/core';
import {User} from '../models/user';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {GeneralService} from './general.service';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = {
    uid: null,
    authenticate:  false
  };

  constructor(
    private generalService: GeneralService
  ) { }

  getUser() {
    return of(this.user);
  }
  setUser(user) {
    this.user.uid = user.uid;
    this.user.authenticate = true;
  }
  signUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( user => {
        this.setUser(user);
      })
      .catch(error => {
        this.generalService.setError(error.message);
      });
  }
}
