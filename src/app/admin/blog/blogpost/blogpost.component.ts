import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared.service';
import {BlogService} from '../blog.service';
// import {PostBlogForm, PostPreviewData} from '../../../Models/Blog';
import {FormBuilder, FormGroup} from '@angular/forms';

interface Tag {
    display: string;
    value: string;
}

@Component({
    selector: 'app-blogpost',
    templateUrl: './blogpost.component.html',
    styleUrls: ['./blogpost.component.scss'],
})
export class BlogpostComponent implements OnInit {
    themeState$;
    editForm: FormGroup;
    tagsArray: Tag[];

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
      // const postData: PostBlogForm = {
      //     title: this.editForm.controls.title.value as string,
      //     mdString: this.editForm.controls.mdString.value as string,
      //     public: true,
      //     tags: this.saveTags()
      // };
      // try {
      //     await this.blogService.postBlog(postData);
      //     await this.shared.dispToast('記事の投稿が完了しました');
      //     // ブログ管理画面に戻る
      //     this.shared.redirectToNoquery('/admin/blog/manager');
      // } catch (e) {
      //     await this.shared.dispToast('記事の投稿に失敗しました');
      // }
    }

    async openPreview() {
      // const previewData: PostPreviewData = {
      //     title: this.editForm.controls.title.value as string,
      //     mdString: this.editForm.controls.mdString.value as string,
      //     tags: this.saveTags()
      // };
      // await this.blogService.openBlogPreviewModal(previewData);
    }

    // タグを保存する形に変換する ['ほげ', 'ふが']
    private saveTags() {
        let tags: string[] = [];
        // タグが入力されていたら
        if (this.tagsArray.length > 0) {
            tags = this.tagsArray.map((tag: Tag) => tag.value);
        }
        return tags;
    }

}
