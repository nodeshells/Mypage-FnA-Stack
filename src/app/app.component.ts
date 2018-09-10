import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, retry } from 'rxjs/operators';
import { MatIconRegistry } from '../../node_modules/@angular/material';
import { DomSanitizer } from '../../node_modules/@angular/platform-browser';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedService]
})
export class AppComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  isMobile = false;
  displaydetectSubscription: Subscription;


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private maticonregistory: MatIconRegistry, private domSanitizer: DomSanitizer, private sharedservice: SharedService) {

    this.maticonregistory.addSvgIcon('nglogo', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/Angular_full_color_logo.svg'));
    this.maticonregistory.addSvgIcon('firebaselogo', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/firebase-logo.svg'));
    this.maticonregistory.addSvgIcon('sitelogo', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/logo_transparent.png.svg'));
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.displaydetectSubscription = this.sharedservice.displaysizedetect().subscribe((isMobile: boolean) => {
      this.isMobile = isMobile;
    });
  }

  ngOnInit() {
    this.sharedservice.routeingtop();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    if (this.displaydetectSubscription) {
      this.displaydetectSubscription.unsubscribe();
    }
  }
}
