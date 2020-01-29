import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Skill, SkillDetail} from '../../FirestoreModels/Skill';
import {User} from '../../FirestoreModels/User';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  db: AngularFirestore;

  constructor(private afs: AngularFirestore) {
    this.db = this.afs;
  }

  // Mypage用のSkillデータを取得しにいく
  getSkilldata(): Observable<Skill> {
    return <Observable<Skill>>this.afs.collection('profile').doc('Skill').valueChanges();
  }

  // Skillカードを更新する
  updateSkilldata() {
    const skilldataRef = this.afs.collection('profile').doc('Skill');
  }

  // Userデータを取得する
  getUserData(): Observable<User> {
    const UserDocRef = this.afs.collection('profile').doc('User');
    return <Observable<User>>UserDocRef.valueChanges();
  }
}
