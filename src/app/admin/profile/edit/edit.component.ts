import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FirestoreService} from '../../../shared/firebase/firestore.service';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: []
})
export class ProfileEditComponent implements OnInit {
  themeState$;
  UserData$: Observable<any>;
  editForm: FormGroup;
  editFormObj = {};

  constructor(private sharedService: SharedService, private builder: FormBuilder, private firestoreService: FirestoreService, private afs: AngularFirestore) {
    this.themeState$ = this.sharedService.themesubject;
    this.UserData$ = this.firestoreService.getUserData();
    this.UserData$.subscribe(user => {
      this.editFormObj = user;
    });
    this.editForm = this.builder.group({
      name: [''],
      job: [''],
      hobby: [''],
      pr: ['']
    });
  }

  ngOnInit() {
  }

  async updateProfile() {
    const updateProfileObject = {
      name: this.editForm.controls.name.value,
      job: this.editForm.controls.job.value,
      hobby: this.editForm.controls.hobby.value,
      pr: this.editForm.controls.pr.value,
    };

    await this.afs.collection('profile').doc('User').set(updateProfileObject, {merge: true});
    this.sharedService.dispToast('プロフィールの更新が完了しました。').then();
  }

}
