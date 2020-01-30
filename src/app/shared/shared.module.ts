import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdToHtmlPipe} from './pipe/md-to-html.pipe';
import {PostpreviewComponent} from './modal/postpreview/postpreview.component';
import {IonicModule} from '@ionic/angular';
import {TagInputModule} from 'ngx-chips';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    TagInputModule
  ],
  exports: [MdToHtmlPipe, PostpreviewComponent, TagInputModule],
  declarations: [MdToHtmlPipe, PostpreviewComponent],
  entryComponents: [PostpreviewComponent]
})

export class SharedModule {
}
