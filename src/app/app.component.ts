import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {DomSanitizer, Meta} from '@angular/platform-browser';
import {SharedService} from './shared/shared.service';
import {Storage} from '@ionic/storage';
import {MenuController} from '@ionic/angular';
import {AuthService} from './shared/authguard/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import * as Ballcap from '@1amageek/ballcap';
import * as firestorm from 'firebase-firestorm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent implements OnDestroy, OnInit, AfterViewInit {
  themeState$: Subject<String>;
  sideMenu = [
    {labelName: 'トップ', iconName: 'home', routerLink: '/top'},
    {labelName: '管理者の自己紹介', iconName: 'happy', routerLink: '/profile'},
    // TODO ブログの優先度が高い
    // {labelName: 'ブログ', iconName: 'text', routerLink: '/blog'},
    // { labelName: '職務経歴', iconName: 'filing', routerLink: '' },
    // { labelName: '技術プレビュー', iconName: 'construct', routerLink: '' },
    {labelName: '管理者ページ', iconName: 'glasses', routerLink: '/admin'},
  ];
  // メタデータの設定
  metaObject = {
    title: 'Kenta Technology Lab',
    desc: 'Webの技術に将来性を見出すしがないエンジニアのホームページです。',
    type: 'website',
    site_url: 'https://kenta-technology-lab.work',
    image_url: 'assets/mysite_ogp.jpg',
    twitter_card: 'summary',
    twitter_site: '@nodeshells',
    twitter_creator: '@nodeshells'
  };

  constructor(private domSanitizer: DomSanitizer, private sharedservice: SharedService, private storage: Storage,
              private menu: MenuController, public authService: AuthService, private metaService: Meta, private afs: AngularFirestore) {
    this.sharedservice.initTheme();
    this.themeState$ = this.sharedservice.themesubject;
    this.setMetaTag();

    Ballcap.initialize(this.afs.firestore);
    // firestorm.initialize(this.afs.firestore);
  }

  ngOnInit() {
    this.sharedservice.routeingtop();
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {

  }

  setMetaTag() {
    this.metaService.addTag({property: 'og:title', content: this.metaObject.title});
    this.metaService.addTag({property: 'og:description', content: this.metaObject.desc});
    this.metaService.addTag({property: 'og:type', content: this.metaObject.type});
    this.metaService.addTag({property: 'og:url', content: this.metaObject.site_url});
    this.metaService.addTag({property: 'og:image', content: this.metaObject.image_url});
    this.metaService.addTag({property: 'twitter:card', content: this.metaObject.twitter_card});
    this.metaService.addTag({property: 'twitter:site', content: this.metaObject.twitter_site});
    this.metaService.addTag({property: 'twitter:creator', content: this.metaObject.twitter_creator});
  }

  toggleTheme() {
    const themeState = this.sharedservice.toggleTheme(this.sharedservice.themeState);
    this.storage.set('Theme', themeState).then();
  }

}
