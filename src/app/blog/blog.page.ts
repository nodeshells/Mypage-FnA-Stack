import {Component, OnInit} from '@angular/core';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  themeSubject$;

  constructor(private shared: SharedService) {
    this.themeSubject$ = this.shared.themesubject;
  }

  ngOnInit() {
  }

}
