import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedService} from '../../shared/shared.service';
import {Platform} from '@ionic/angular';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-toppage',
  templateUrl: './toppage.component.html',
  styleUrls: ['./toppage.component.scss'],
})
export class ToppageComponent implements OnInit, OnDestroy {
  themeState$;
  isMobile;
  displaySizeSubscription: Subscription;

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
