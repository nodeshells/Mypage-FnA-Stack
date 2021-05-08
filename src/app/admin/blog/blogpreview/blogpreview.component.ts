import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';
import {BlogService} from '../blog.service';

@Component({
    selector: 'app-blogpreview',
    templateUrl: './blogpreview.component.html',
    styleUrls: ['./blogpreview.component.scss'],
})
export class BlogpreviewComponent implements OnInit {
    themeState$;
    promiseBlogData;

    constructor(private shared: SharedService, private blogService: BlogService) {
        this.themeState$ = this.shared.themesubject;
    }

    ngOnInit() {

    }

}
