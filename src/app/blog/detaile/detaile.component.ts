import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../shared/shared.service';

@Component({
  selector: 'app-detaile',
  templateUrl: './detaile.component.html',
  styleUrls: ['./detaile.component.scss'],
  providers: []
})
export class DetaileComponent implements OnInit {
  themeSubject$;
  mdTest =
      '## MDテスト \n ' +
      '# MDテスト \n ' +
      '--- \n' +
      '- こんにちは！ \n' +
      '  - **やったぜ！** \n' +
      '\n' +
      '![名刺工房ロゴ画像](https://meishi.artisj.com/summary/image/logo.gif "アーティス名刺工房")';

  constructor(private shared: SharedService) {
    this.themeSubject$ = this.shared.themesubject;
  }

  ngOnInit() {
  }

}
