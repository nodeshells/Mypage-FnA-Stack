import {Component, OnInit} from '@angular/core';
import {FirestoreService} from '../shared/firebase/firestore.service';
import {map} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss'],
  providers: [FirestoreService]
})
export class MypageComponent implements OnInit {
  myAge = 0;
  currentYear = '';
  loadState = true;

  SkillData$;

  constructor(private firestoreService: FirestoreService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    // 年齢を取得して変数に入れる
    this.getOld();
    // FireStoreのドキュメントをWatchする
    this.SkillData$ = this.firestoreService.getSkilldata().pipe(map(skill => {
      skill.skilldata.forEach((skills) => {
        // skillの中に入っている習熟度の数値をstyle情報に変換する(星を表示するため)
        skills.star = this.sanitizer.bypassSecurityTrustStyle('width:' + skills.star + '%;');

        if (!skills.color) {
          // カードの情報が無かったらデフォルトのカラーを適用
          skills.color = 'green darken-1';
        }
      });
      // 読み込みを完了させる
      this.loadState = false;
      return skill.skilldata;
    }));
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
