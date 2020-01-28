import { Injectable } from '@angular/core';
import {Blogs, PostBlogForm, PostPreviewData} from '../../FirestoreModels/Blogs';
import {ModalController} from '@ionic/angular';
import {PostpreviewComponent} from './modal/postpreview/postpreview.component';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private modalController: ModalController) {
  }

 async postBlog(PostData: PostBlogForm) {
   const postData: Blogs = new Blogs();
   postData.public = PostData.public;
   postData.blogMainMd = PostData.mdString;
   postData.title = PostData.title;
   postData.tags = PostData.tags;
   await postData.save();
  }

  async openBlogPreviewModal(previewData: PostPreviewData) {
   const modal = await this.modalController.create({component: PostpreviewComponent, componentProps: previewData});
   return modal.present();
  }

}
