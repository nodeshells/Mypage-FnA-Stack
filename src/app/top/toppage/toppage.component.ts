import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../shared/shared.service';

@Component({
  selector: 'app-toppage',
  templateUrl: './toppage.component.html',
  styleUrls: ['./toppage.component.scss'],
  providers: []
})
export class ToppageComponent implements OnInit {
  themeState$;
  isMobile;

  constructor(private sharedservice: SharedService) {
    this.sharedservice.displaysizedetect().subscribe((isMobile: boolean) => {
      this.isMobile = isMobile;
    });
    this.themeState$ = this.sharedservice.themesubject;
  }

  ngOnInit() {
  }

}
