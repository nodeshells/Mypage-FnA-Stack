import { Component, ChangeDetectorRef, Inject, Injectable, OnInit, DoCheck, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaMatcher } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { AuthService } from '../authguard/auth.service';
import { UserService } from '../authguard/user.service';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  providers: [AuthService, UserService, SharedService]
})
export class SidemenuComponent implements OnInit, OnChanges {

  constructor(private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private location: Location, private auth: AuthService, private user: UserService, private sharedservice: SharedService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  // ログインさせる
  async login() {
    try {
      const user = await this.user.getCurrentUser();
      if (!this.sharedservice.mailCheck(user)) { throw new Error('permisson_error'); }
    } catch (error) {
      await this.auth.doGoogleLogin();
    }
  }

}
