import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdToHtmlPipe} from './pipe/md-to-html.pipe';
import {PostpreviewComponent} from '../admin/blog/modal/postpreview/postpreview.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [MdToHtmlPipe],
  declarations: [MdToHtmlPipe, PostpreviewComponent],
  entryComponents: [PostpreviewComponent]
})

export class SharedModule {
}
