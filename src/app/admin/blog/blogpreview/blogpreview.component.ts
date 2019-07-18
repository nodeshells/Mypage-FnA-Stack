import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';

@Component({
  selector: 'app-blogpreview',
  templateUrl: './blogpreview.component.html',
  styleUrls: ['./blogpreview.component.scss'],
})
export class BlogpreviewComponent implements OnInit {
  themeState$;

  constructor(private shared: SharedService) {
    this.themeState$ = this.shared.themesubject;
  }

  ngOnInit() {
  }

}
