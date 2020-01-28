import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';
import {BlogService} from '../blog.service';
import {Blogs, PostBlogForm, PostPreviewData} from '../../../FirestoreModels/Blogs';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss'],
})
export class BlogpostComponent implements OnInit {
  themeState$;
  editForm: FormGroup;

  constructor(private shared: SharedService, private blogService: BlogService, private builder: FormBuilder) {
    this.themeState$ = this.shared.themesubject;
    this.editForm = this.builder.group({
      title: [''],
      tags: [''],
      mdString: [''],
    });
  }

  ngOnInit() {
  }

  async postBlog() {
    const postData: PostBlogForm = {
      title: this.editForm.controls.title.value as string,
      mdString: this.editForm.controls.mdString.value as string,
      public: true,
      tags: ['test', 'test']
    };
   await this.blogService.postBlog(postData);
  }

  async openPreview(){
    const previewData: PostPreviewData = {
      title: this.editForm.controls.title.value as string,
      mdString: this.editForm.controls.mdString.value as string,
      tags: ['test', 'test']
    };
   await this.blogService.openBlogPreviewModal(previewData);
  }
}
