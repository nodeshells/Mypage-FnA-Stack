import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs: AngularFirestore) {
  }

  // Mypage用のSkillデータを取得しにいく
  getSkilldata(): Observable<any> {
    const skilldataRef = this.afs.collection('profile').doc('Skill');
    return skilldataRef.valueChanges();
  }

  // Skillカードを更新する
  updateSkilldata() {
    const skilldataRef = this.afs.collection('profile').doc('Skill');
  }

  // Userデータを取得する
  getUserData(): Observable<any | undefined> {
    const UserDocRef = this.afs.collection('profile').doc('User');
    return UserDocRef.valueChanges();
  }
}
