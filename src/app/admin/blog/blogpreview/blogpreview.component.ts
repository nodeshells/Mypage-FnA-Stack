import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';
import {BlogService} from '../blog.service';
import {Blogs} from '../../../FirestoreModels/Blogs';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-blogpreview',
  templateUrl: './blogpreview.component.html',
  styleUrls: ['./blogpreview.component.scss'],
})
export class BlogpreviewComponent implements OnInit {
  themeState$;
  blogData$: Observable<Blogs[]>;

  constructor(private shared: SharedService, private blogService: BlogService) {
    this.themeState$ = this.shared.themesubject;
    this.blogData$ = this.blogService.getAllBlogData();
  }

  ngOnInit() {

  }

}
