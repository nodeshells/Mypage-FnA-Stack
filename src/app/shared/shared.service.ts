import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {BreakpointObserver} from '@angular/cdk/layout';
import {NavigationEnd, Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {ToastController} from '@ionic/angular';
import * as uuid from 'uuid';


declare let ga;

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    public themesubject: Subject<String>;
    public themeState = '';

    constructor(private breakpointObserver: BreakpointObserver, private router: Router, private storage: Storage, private toast: ToastController) {
    }

    // toast
    async dispToast(toastmessage: string, killtime = 2000) {
        const toast = await this.toast.create({message: toastmessage, duration: killtime});
        await toast.present();
    }

    // 画面サイズの検出
    displaysizedetect(): Observable<boolean> {
        return this.breakpointObserver.observe('(max-width: 1024px)').pipe(map((state) => state.matches));
    }

    // ページ遷移時発動する関数
    routeingtop() {
        return this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                // ルーティングが終わってなかったら
                // ルーティングが終わったら
                window.scrollTo(0, 0); // 画面の一番上に行く
                ga('set', 'page', evt.urlAfterRedirects); // GoogleAnalyticsにページのURLを投げ飛ばす
                ga('send', 'pageview');
            }
        });
    }

    // テーマ設定の初期化
    initTheme() {
        this.storage.get('Theme').then((value) => {
            if (value !== null) {
                this.themeState = value;
                this.themesubject.next(value);
            }
        });
        this.themesubject = new BehaviorSubject(this.themeState);
    }

    // テーマの切り替え(ダークorライト)
    toggleTheme(state: string) {
        if (state === 'dark') {
            this.themesubject.next('');
            this.themeState = '';
            return '';
        } else {
            this.themesubject.next('dark');
            this.themeState = 'dark';
            return 'dark';
        }
    }

    // ルーティング関係
    redirectToNoquery(url) {
        // this.router.navigateByUrl('/routeing', {skipLocationChange: true}).then(() =>
        //     this.router.navigate([url]));
        this.router.navigate([url]);
    }

    redirectTo(url, query) {
        // queryでparametaを送信する時はMatrixURIを使用する('hoge', {hogehoge:'hugahuga')
        this.router.navigate([url, query]);
    }

    // UUID生成
    genUuid() {
        return uuid.v4();
    }

    formatDate(date) {
        const y = date.getFullYear();
        const m = date.getMonth() + 1;
        const d = date.getDate();
        const h = date.getHours();
        const minute = date.getMinutes();
        const day = '日月火水木金土'.charAt(date.getDay());
        return `${y}年${m}月${d}日(${day}) ${h}時${minute}分`;
    }

}
