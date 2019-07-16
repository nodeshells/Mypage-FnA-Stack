import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {Subject} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
import {SharedService} from './shared/shared.service';
import {Storage} from '@ionic/storage';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent implements OnDestroy, OnInit, AfterViewInit {
  themeState$: Subject<String>;

  constructor(private domSanitizer: DomSanitizer, private sharedservice: SharedService, private storage: Storage,
              private menu: MenuController) {
    this.sharedservice.initTheme();
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
    const themeState = this.sharedservice.toggleTheme(this.sharedservice.themeState);
    this.storage.set('Theme', themeState).then();
  }

  closeMenu() {
    this.menu.close().then();
  }

}
