import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss'],
})
export class BlogpostComponent implements OnInit {
  themeState$;

  constructor(private shared: SharedService) {
    this.themeState$ = this.shared.themesubject;
  }

  ngOnInit() {
  }

}
