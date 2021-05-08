import {Component, OnInit} from '@angular/core';
import {FirestoreService} from '../../../shared/firebase/firestore.service';
import {DomSanitizer} from '@angular/platform-browser';
import {map} from 'rxjs/operators';
import {ViewSkillDetail} from '../../../Models/Skill';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  loadState = true;
  SkillData$;
  UserData$;
  SkillData;
  currentYear;
  myAge;

  colorInfo = [
    {name: '赤', colorStyle: 'red'},
    {name: 'ピンク', colorStyle: 'pink'},
    {name: '紫', colorStyle: 'purple'},
    {name: '深紫', colorStyle: 'deep-purple'},
    {name: '藍色', colorStyle: 'indigo'},
    {name: '青', colorStyle: 'blue'},
    {name: '薄青', colorStyle: 'light-blue'},
    {name: 'シアン', colorStyle: 'cyan'},
    {name: 'ティール', colorStyle: 'teal'},
    {name: '緑', colorStyle: 'green'},
    {name: '薄緑', colorStyle: 'light-green'},
    {name: 'ライム', colorStyle: 'lime'},
    {name: '黄', colorStyle: 'yellow'},
    {name: 'アンバー', colorStyle: 'amber'},
    {name: 'オレンジ', colorStyle: 'orange'},
    {name: '深オレンジ', colorStyle: 'deep-orange'},
    {name: '茶', colorStyle: 'brown'},
    {name: 'グレー', colorStyle: 'grey'}
  ];

  constructor(private firestoreService: FirestoreService, private sanitizer: DomSanitizer) {
    // FireStoreのSkillドキュメントをWatchする
    this.SkillData$ = this.firestoreService.getSkilldata().pipe(map(skill => {
      this.SkillData = skill.skilldata.map((skills) => {
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
      return this.SkillData;
    }));
    this.UserData$ = this.firestoreService.getUserData();
    this.getOld();
  }


  ngOnInit() {
  }

  changeSkillCard(changeData, index, changeObject) {
    console.log('changeData', changeData);
    console.log('index', index);
    console.log('changeObj', changeObject);
  }

  getOld() {
    // あなたの誕生日
    const yourBirthDay = {
      year: 1996,
      month: 4,
      date: 19
    };

// Dateインスタンスに変換
    const birthDate = new Date(yourBirthDay.year, yourBirthDay.month - 1, yourBirthDay.date);

// 文字列に分解
    const y2 = birthDate.getFullYear().toString().padStart(4, '0');
    const m2 = (birthDate.getMonth() + 1).toString().padStart(2, '0');
    const d2 = birthDate.getDate().toString().padStart(2, '0');

// 今日の日付
    const today = new Date();
    const y1 = today.getFullYear().toString().padStart(4, '0');
    const m1 = (today.getMonth() + 1).toString().padStart(2, '0');
    const d1 = today.getDate().toString().padStart(2, '0');

    this.currentYear = y1;

// 引き算
    this.myAge = Math.floor((Number(y1 + m1 + d1) - Number(y2 + m2 + d2)) / 10000);
    // console.log(this.myAge);
  }

}
