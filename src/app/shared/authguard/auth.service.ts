import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';
import User = firebase.User;

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(
        public afAuth: AngularFireAuth, private router: Router
    ) {
    }

    doGoogleLogin() {
        return new Promise<any>((resolve, reject) => {
            const provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            this.afAuth.signInWithPopup(provider)
                .then(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }

    checkLoginState(): Observable<User | null> {
        return this.afAuth.user;
    }

    doLogout() {
        return new Promise((resolve, reject) => {
            if (firebase.auth().currentUser) {
                this.afAuth.signOut();
                this.router.navigate(['/top']);
                resolve(true);
            } else {
                reject();
            }
        });
    }


}
