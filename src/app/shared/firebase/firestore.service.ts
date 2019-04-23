import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs: AngularFirestore) {
  }

  getSkilldata(): Observable<any> {
    const skilldataRef = this.afs.collection('profile').doc('Skill');
    return skilldataRef.valueChanges();
  }
}
