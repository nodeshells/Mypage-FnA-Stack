import { Component, ChangeDetectorRef, Inject, Injectable, OnInit } from '@angular/core';
import { SharedModule } from '../shared.module';
import { Router, NavigationEnd } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor(private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { }

  ngOnInit() {
  }

}
