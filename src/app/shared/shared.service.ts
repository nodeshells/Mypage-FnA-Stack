import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { map } from '../../../node_modules/rxjs/operators';
import { BreakpointObserver } from '../../../node_modules/@angular/cdk/layout';

@Injectable()
export class SharedService {

  constructor(private breakpointObserver: BreakpointObserver) { }

  // 画面サイズの検出
  displaysizedetect(): Observable<boolean> {
    return this.breakpointObserver.observe('(max-width: 1024px)').pipe(map((state) => state.matches));
  }
}
