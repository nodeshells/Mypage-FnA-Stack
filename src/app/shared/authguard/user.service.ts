import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
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

    async logOut() {
        await this.afAuth.signOut();
    }

    // updateCurrentUser(value): Promise<any> {
    //   return new Promise((resolve, reject): any => {
    //     const user = firebase.auth().currentUser;
    //     user.updateProfile({
    //       displayName: value.name,
    //       photoURL: user.photoURL
    //     }).then((res) => {
    //       resolve(res);
    //     }, (err) => reject(err));
    //   });
    // }
}
