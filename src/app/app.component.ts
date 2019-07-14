import {Component, OnInit, OnDestroy, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Subscription} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
import {SharedService} from './shared/shared.service';
import {fadeAnimation} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SharedService],
  animations: [fadeAnimation]
})
export class AppComponent implements OnDestroy, OnInit, AfterViewInit {
  mobileQuery: MediaQueryList;
  isMobile = false;
  displaydetectSubscription: Subscription;


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private domSanitizer: DomSanitizer, private sharedservice: SharedService) {

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
  }

  ngAfterViewInit(): void {

  }
}
