import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Router, NavigationEnd} from '@angular/router';

import {environment_config} from '../../environments/environment_config';

declare let ga;

@Injectable()
export class SharedService {

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
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

  mailCheck(user): boolean {
    if (user.email === environment_config.admin_permission.mailaddress) {
      return true;
    } else {
      return false;
    }
  }
}
