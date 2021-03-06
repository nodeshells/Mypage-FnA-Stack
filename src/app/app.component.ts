import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {DomSanitizer, Meta} from '@angular/platform-browser';
import {SharedService} from './shared/shared.service';
import {Storage} from '@ionic/storage';
import {MenuController} from '@ionic/angular';
import {AuthService} from './shared/authguard/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import firebase from 'firebase';
import {environment} from '../environments/environment';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [],
})
export class AppComponent implements OnDestroy, OnInit, AfterViewInit {
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
    isSplitPainEnable = false;

    constructor(private domSanitizer: DomSanitizer,
                private sharedService: SharedService,
                private storage: Storage,
                private menu: MenuController, public authService: AuthService, private metaService: Meta, private afs: AngularFirestore) {
        this.setMetaTag();
        this.sharedService.routeingtop();
        const appCheck = firebase.appCheck();
        /**
         * Enable Recaptcha
         */
        appCheck.activate(environment.recaptchaSiteKey);
    }

    ngOnInit() {
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
        const themeState = this.sharedService.toggleTheme(this.sharedService.themeState);
    }

    onSplitPainEvent(event: any) {
        this.isSplitPainEnable = !!event.detail.visible;
    }

}
