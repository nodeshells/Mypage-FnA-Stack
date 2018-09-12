import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { map } from '../../../node_modules/rxjs/operators';
import { BreakpointObserver } from '../../../node_modules/@angular/cdk/layout';
import { Router, NavigationEnd } from '../../../node_modules/@angular/router';

declare let ga;

@Injectable()
export class SharedService {

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

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
}
