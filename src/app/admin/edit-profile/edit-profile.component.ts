import {Component, OnInit} from '@angular/core';
import {FirestoreService} from '../../shared/firebase/firestore.service';
import {DomSanitizer} from '@angular/platform-browser';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  loadState = true;
  SkillData$;
  SkillData;

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
  }


  ngOnInit() {
    // FireStoreのドキュメントをWatchする
    this.SkillData$ = this.firestoreService.getSkilldata().pipe(map(skill => {
      skill.skilldata.forEach((skills) => {
        // skillの習熟度の値をバックアップ
        skills.starRate = skills.star;

        // skillの中に入っている習熟度の数値をstyle情報に変換する(星を表示するため)
        skills.star = this.sanitizer.bypassSecurityTrustStyle('width:' + skills.star + '%;');

        if (!skills.color) {
          // カードの情報が無かったらデフォルトのカラーを適用
          skills.color = 'green darken-1';
        }
      });
      // 読み込みを完了させる
      this.loadState = false;
      this.SkillData = skill.skilldata;
      console.log(this.SkillData);
      return skill.skilldata;
    }));
  }

  changeSkillCard(changeData, index, changeObject) {
    console.log('changeData', changeData);
    console.log('index', index);
    console.log('changeObj', changeObject);
  }

}
