import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';

@Component({
  selector: 'app-blogsearch',
  templateUrl: './blogsearch.component.html',
  styleUrls: ['./blogsearch.component.scss'],
})
export class BlogsearchComponent implements OnInit {
  themeState$;

  constructor(private shared: SharedService) {
    this.themeState$ = this.shared.themesubject;
  }

  ngOnInit() {
  }

}
