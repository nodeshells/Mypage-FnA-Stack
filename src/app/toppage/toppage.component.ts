import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-toppage',
  templateUrl: './toppage.component.html',
  styleUrls: ['./toppage.component.css'],
  providers: [SharedService]
})
export class ToppageComponent implements OnInit {

  isMobile;
  parallaxsize_pc = '400';
  parallaxsize_m = '300';

  constructor(private sharedservice: SharedService) {
    this.sharedservice.displaysizedetect().subscribe((isMobile: boolean) => {
      this.isMobile = isMobile;
    });
  }

  ngOnInit() {
  }

}
