import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';
import {BlogService} from '../blog.service';
import {Blogs} from '../../../FirestoreModels/Blogs';

@Component({
  selector: 'app-blogpreview',
  templateUrl: './blogpreview.component.html',
  styleUrls: ['./blogpreview.component.scss'],
})
export class BlogpreviewComponent implements OnInit {
  themeState$;
  blogDataPromise: Promise<Blogs[]>;

  constructor(private shared: SharedService, private blogService: BlogService) {
    this.themeState$ = this.shared.themesubject;
    this.blogDataPromise = this.blogService.getAllBlogData();
  }

  ngOnInit() {

  }

}
