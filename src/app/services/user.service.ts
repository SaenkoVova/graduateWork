import { Injectable } from '@angular/core';
import {User} from '../models/user';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor() { }

  getUser() {
    return this.user;
  }

  signUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user =>  {
        this.user.uid = user.user.uid;
        this.user.authenticate = true;
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}
