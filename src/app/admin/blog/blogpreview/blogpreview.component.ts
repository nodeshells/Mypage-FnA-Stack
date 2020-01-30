import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';
import {BlogService} from '../blog.service';
import {Blog} from '../../../Models/Blog';

@Component({
  selector: 'app-blogpreview',
  templateUrl: './blogpreview.component.html',
  styleUrls: ['./blogpreview.component.scss'],
})
export class BlogpreviewComponent implements OnInit {
  themeState$;
  promiseBlogData: Promise<Blog[]>;

  constructor(private shared: SharedService, private blogService: BlogService) {
    this.themeState$ = this.shared.themesubject;
    this.promiseBlogData = this.blogService.getAllBlogData();
  }

  ngOnInit() {

  }

}
