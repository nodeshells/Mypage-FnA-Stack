import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';

@Component({
  selector: 'app-profiletop',
  templateUrl: './profiletop.component.html',
  styleUrls: ['./profiletop.component.scss'],
})
export class ProfiletopComponent implements OnInit {
  themeState$;

  constructor(private shared: SharedService) {
    this.themeState$ = this.shared.themesubject;
  }

  ngOnInit() {
  }

}
