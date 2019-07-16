import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdToHtmlPipe} from './pipe/md-to-html.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [MdToHtmlPipe],
  declarations: [MdToHtmlPipe]
})

export class SharedModule {
}
