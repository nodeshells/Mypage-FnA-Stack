import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { map } from '../../../node_modules/rxjs/operators';
import { BreakpointObserver } from '../../../node_modules/@angular/cdk/layout';
import { Router, NavigationEnd } from '../../../node_modules/@angular/router';

@Injectable()
export class SharedService {

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  // 画面サイズの検出
  displaysizedetect(): Observable<boolean> {
    return this.breakpointObserver.observe('(max-width: 1024px)').pipe(map((state) => state.matches));
  }

  // 遷移時に画面の一番上へ
  routeingtop() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
