import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {User} from 'firebase';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(
      public afAuth: AngularFireAuth
  ) {
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
          .signInWithPopup(provider)
          .then(res => {
            resolve(res);
          }, err => {
            reject(err);
          });
    });
  }

  checkLoginState(): Observable<User | null> {
    return this.afAuth.authState;
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afAuth.auth.signOut();
        resolve();
      } else {
        reject();
      }
    });
  }


}
