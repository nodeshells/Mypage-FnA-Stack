import { Component, ChangeDetectorRef, Inject, Injectable, OnInit, DoCheck, OnChanges } from '@angular/core';
import { SharedModule } from '../shared.module';
import { Router, NavigationEnd } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaMatcher } from '@angular/cdk/layout';
import { Location } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit, OnChanges {

  public activebox = {
    top: false,
    profile: false
  };

  constructor(private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private location: Location) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.activebox.top = false;
    this.activebox.profile = false;

    switch (String(this.location.path)) {
      case '/top':
        this.activebox.top = true;
        break;

      case '/profile':
        this.activebox.profile = true;
        break;
      default:
        break;
    }
  }

}
