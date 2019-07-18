import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';

@Component({
  selector: 'app-blogtop',
  templateUrl: './blogtop.component.html',
  styleUrls: ['./blogtop.component.scss'],
})
export class BlogtopComponent implements OnInit {
  themeState$;

  constructor(private shared: SharedService) {
    this.themeState$ = this.shared.themesubject;
  }

  ngOnInit() {
  }

}
