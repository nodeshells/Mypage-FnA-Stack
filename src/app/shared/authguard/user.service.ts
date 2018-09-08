import { Injectable } from '@angular/core';
import 'rxjs-compat/operator/toPromise';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor(
    public db: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {
  }


  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      const user = firebase.auth().onAuthStateChanged((users) => {
        if (users) {
          resolve(users);
        } else {
          reject('No user logged in');
        }
      });
    });
  }

  updateCurrentUser(value): Promise<any> {
    return new Promise((resolve, reject): any => {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: value.name,
        photoURL: user.photoURL
      }).then((res) => {
        resolve(res);
      }, (err) => reject(err));
    });
  }
}
