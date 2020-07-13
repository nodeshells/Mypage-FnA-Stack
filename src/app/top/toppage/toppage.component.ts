import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedService} from '../../shared/shared.service';
import {Platform} from '@ionic/angular';
import {interval, Subscription} from 'rxjs';


@Component({
  selector: 'app-toppage',
  templateUrl: './toppage.component.html',
  styleUrls: ['./toppage.component.scss'],
})
export class ToppageComponent implements OnInit, OnDestroy {
  themeState$;
  isMobile;
  displaySizeSubscription: Subscription;
  animationIntervalSubscription: Subscription;
  camera;
  scene;
  renderer;
  geometry;
  sphere;
  material;
  mesh;
  plane;
  effect;
  controls;
  start = Date.now();

  constructor(private sharedservice: SharedService, private platform: Platform) {
  }

  ngOnInit() {
   this.displaySizeSubscription = this.sharedservice.displaysizedetect().subscribe((isMobile: boolean) => {
      this.isMobile = isMobile;
    });
    this.themeState$ = this.sharedservice.themesubject;
  }

  ngOnDestroy(): void {
    this.displaySizeSubscription?.unsubscribe();
  }


}
