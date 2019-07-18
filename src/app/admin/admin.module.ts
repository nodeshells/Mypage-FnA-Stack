import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopComponent} from './top/top.component';
import {myRoutes} from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {ProfileEditComponent} from './profile/edit/edit.component';
import {ProfilePreviewComponent} from './profile/preview/preview.component';
import {SkillEditComponent} from './skill/edit/edit.component';
import {SkillPreviewComponent} from './skill/preview/preview.component';
import {ProfiletopComponent} from './profile/profiletop/profiletop.component';
import {SkilltopComponent} from './skill/skilltop/skilltop.component';
import {BlogtopComponent} from './blog/blogtop/blogtop.component';
import {BlogeditComponent} from './blog/blogedit/blogedit.component';
import {BlogpreviewComponent} from './blog/blogpreview/blogpreview.component';
import {BlogsearchComponent} from './blog/blogsearch/blogsearch.component';
import {BlogmanagerComponent} from './blog/blogmanager/blogmanager.component';
import {BlogpostComponent} from './blog/blogpost/blogpost.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(myRoutes),
    SharedModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [TopComponent, ProfileEditComponent, ProfilePreviewComponent, SkillEditComponent,
    SkillPreviewComponent, ProfiletopComponent, SkilltopComponent, BlogtopComponent, BlogeditComponent,
    BlogpreviewComponent, BlogsearchComponent, BlogmanagerComponent, BlogpostComponent],
})
export class AdminModule {
}
