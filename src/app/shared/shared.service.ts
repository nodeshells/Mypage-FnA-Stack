import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Router, NavigationEnd} from '@angular/router';
import {Storage} from '@ionic/storage';


declare let ga;

@Injectable()
export class SharedService {
  public themesubject: Subject<String>;
  public themeState = '';

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private storage: Storage) {
    this.storage.get('Theme').then((value) => {
      if (value !== null) {
        this.themesubject.next(value);
      }
    });
    this.themesubject = new BehaviorSubject(this.themeState);
  }

  // 画面サイズの検出
  displaysizedetect(): Observable<boolean> {
    return this.breakpointObserver.observe('(max-width: 1024px)').pipe(map((state) => state.matches));
  }

  // ページ遷移時発動する関数
  routeingtop() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        // ルーティングが終わってなかったら
        return;
      }
      // ルーティングが終わったら
      window.scrollTo(0, 0); // 画面の一番上に行く
      ga('set', 'page', evt.urlAfterRedirects); // GoogleAnalyticsにページのURLを投げ飛ばす
      ga('send', 'pageview');
    });
  }

  // テーマの切り替え(ダークorライト)
  toggleTheme(state: string) {
    if (state === 'dark') {
      this.themesubject.next('');
      return '';
    } else {
      this.themesubject.next('dark');
      return 'dark';
    }
  }

  mailCheck(user): boolean {
    if (false) {
      return true;
    } else {
      return false;
    }
  }
}
