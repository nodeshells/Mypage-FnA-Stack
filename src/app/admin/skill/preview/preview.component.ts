import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';
import {Subject} from 'rxjs';
import {FirestoreService} from '../../../shared/firebase/firestore.service';
import {DomSanitizer} from '@angular/platform-browser';
import {map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import {AlertController} from '@ionic/angular';
import {ViewSkillDetail} from '../../../Models/Skill';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class SkillPreviewComponent implements OnInit {
  loadState = true;
  themeSubject$: Subject<String>;

  SkillData$;
  UserData$;

  constructor(private firestoreService: FirestoreService, private sanitizer: DomSanitizer, public shared: SharedService, private afs: AngularFirestore,
              private alertController: AlertController) {
    this.themeSubject$ = this.shared.themesubject;
    // FireStoreのSkillドキュメントをWatchする
    this.SkillData$ = this.firestoreService.getSkilldata().pipe(map(skill => {
      const SkillData = skill.skilldata.map((skills) => {
        const viewSkillDetail: ViewSkillDetail = {
          skillid: skills.skillid,
          skillname: skills.skillname,
          // skillの習熟度の値をバックアップ
          starRate: skills.star,
          // skillの中に入っている習熟度の数値をstyle情報に変換する(星を表示するため)
          star: this.sanitizer.bypassSecurityTrustStyle('width:' + skills.star + '%;'),
          experience: skills.experience,
          url: skills.url,
          desc: skills.desc
        };
        return viewSkillDetail;
      });
      // 読み込みを完了させる
      this.loadState = false;
      // this.SkillData = skill.skilldata;
      // console.log(this.SkillData);
      return SkillData;
    }));
    this.UserData$ = this.firestoreService.getUserData();
  }

  ngOnInit() {
  }

  async presentDeleteAlertConfirm(skillid: string) {
    const alert = await this.alertController.create({
      header: 'スキルを削除しようとしています！',
      message: '本当に削除しますか？',
      buttons: [
        {
          text: '中止する',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: '削除する',
          cssClass: 'alertDeleteButton',
          handler: () => {
            this.deleteSkill(skillid);
          }
        }
      ]
    });

    await alert.present();
  }

  // skillidを元にスキルを削除する
  deleteSkill(skillId: string) {
    const SkillDataRef = this.afs.collection('profile').doc('Skill');
    SkillDataRef.get().subscribe(async getData => {
      if (getData.exists) {
        const skillArray = getData.data().skilldata;
        const deletedArray = skillArray.filter(x => x.skillid !== skillId);
        await this.afs.collection('profile').doc('Skill').set({skilldata: deletedArray}, {merge: true});
      }
    });
  }
}
