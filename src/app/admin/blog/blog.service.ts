import {Injectable} from '@angular/core';
import {Blog, PostBlogForm, PostPreviewData} from '../../Models/Blog';
import {ModalController} from '@ionic/angular';
import {PostpreviewComponent} from '../../shared/modal/postpreview/postpreview.component';

import {Collection} from 'firebase-firestorm/lib';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private modalController: ModalController) {
  }

  async postBlog(PostData: PostBlogForm) {
    const postData = new Blog();
    postData.public = PostData.public;
    postData.blogMainMd = PostData.mdString;
    postData.title = PostData.title;
    postData.tags = PostData.tags;
    await Collection(Blog).create(postData);
  }

  async getAllBlogData() {
    const querySnapShot = await Collection(Blog).query().where('public', '==', true).get();
    if (!querySnapShot.empty) {
      return querySnapShot.docs.map(blogData => blogData);
    }
  }


  async openBlogPreviewModal(previewData: PostPreviewData) {
    const modal = await this.modalController.create({component: PostpreviewComponent, componentProps: previewData});
    return modal.present();
  }

}
