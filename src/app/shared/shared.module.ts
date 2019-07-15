import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedService} from './shared.service';
import {MdToHtmlPipe} from './pipe/md-to-html.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [MdToHtmlPipe],
  declarations: [MdToHtmlPipe],
  providers: [
    SharedService
  ]
})
export class SharedModule {
}
