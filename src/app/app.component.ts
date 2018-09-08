import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  isMobile = false;
  modechange = '';
  sidebarstatus = false;
  displaydetectSubscription: Subscription;


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private breakpointObserver: BreakpointObserver) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.displaydetectSubscription = this.displaysizedetect().subscribe((isMobile: boolean) => {
      this.isMobile = isMobile;
      if (!isMobile) {
        setTimeout(0, this.sidebarstatus = true);
        this.modechange = 'side';
      } else {
        setTimeout(0, this.sidebarstatus = false);
        this.modechange = 'over';
      }
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    if (this.displaydetectSubscription) {
      this.displaydetectSubscription.unsubscribe();
    }
  }

  displaysizedetect(): Observable<boolean> {
    return this.breakpointObserver.observe('(max-width: 1024px)').pipe(map((state) => state.matches));
  }
}
