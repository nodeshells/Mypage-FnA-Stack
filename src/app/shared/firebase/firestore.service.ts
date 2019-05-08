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
    const skilldataRef = this.afs.collection('profile').doc('skill');
  }
}
