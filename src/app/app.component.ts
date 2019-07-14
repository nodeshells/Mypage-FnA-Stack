import {Component, OnInit, OnDestroy, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {BehaviorSubject, Subject, Subscription} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
import {SharedService} from './shared/shared.service';
import {fadeAnimation} from './animations';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
  animations: [fadeAnimation]
})
export class AppComponent implements OnDestroy, OnInit, AfterViewInit {
  themeState = '';
  themeState$: Subject<String>;

  constructor(private domSanitizer: DomSanitizer, private sharedservice: SharedService, private storage: Storage) {
    this.themeState$ = this.sharedservice.themesubject;
  }

  ngOnInit() {
    this.sharedservice.routeingtop();
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {

  }

  toggleTheme() {
    const themeState = this.sharedservice.toggleTheme(this.themeState);
    this.storage.set('Theme', themeState).then();
    this.themeState = themeState;
  }

}
