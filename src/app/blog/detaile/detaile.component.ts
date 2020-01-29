import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../shared/shared.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-detaile',
  templateUrl: './detaile.component.html',
  styleUrls: ['./detaile.component.scss'],
})
export class DetaileComponent implements OnInit {
  themeSubject$: Subject<String>;
  testData = {
    date: new Date(),
    title: 'テストデータ',
    auther: 'テストマン',
    tag: ['初投稿', '技術系', 'Angular', 'ノウハウ', '悲しみ', '尊い', 'デビルマン'],
    blogmain:
        '# MDテスト \n ' +
        '## MDテスト \n ' +
        '--- \n' +
        '- こんにちは！ \n' +
        '  - **やったぜ！** \n' +
        '\n' +
        '![猫さんの画像](https://www.asahicom.jp/articles/images/AS20171019002581_comm.jpg)\n' +
        '\n' +
        '---\n' +
        '\n' +
        '# 終わりです'
  };

  constructor(private shared: SharedService) {
    this.themeSubject$ = this.shared.themesubject;
  }

  ngOnInit() {
  }

}
