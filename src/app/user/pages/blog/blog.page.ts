import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
  providers: []
})
export class BlogPage implements OnInit {
  themeSubject$;

  constructor(private shared: SharedService) {
    this.themeSubject$ = this.shared.themesubject;
  }

  ngOnInit() {
  }

}
