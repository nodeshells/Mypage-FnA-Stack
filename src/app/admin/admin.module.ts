import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopComponent} from './top/top.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
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
import {AddskillComponent} from './skill/addskill/addskill.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {IonicModule} from '@ionic/angular';

const myRoutes: Routes = [
  {
    path: 'top', component: TopComponent
  },
  {
    path: 'profile',
    component: ProfiletopComponent,
    children: [
      {path: 'preview', component: ProfilePreviewComponent},
      {path: 'edit', component: ProfileEditComponent}
    ]
  },
  {
    path: 'skill',
    component: SkilltopComponent,
    children: [
      {path: 'preview', component: SkillPreviewComponent},
      {path: 'edit', component: SkillEditComponent},
      {path: 'addskill', component: AddskillComponent}
    ]
  },
  {
    path: 'blog',
    component: BlogtopComponent,
    children: [
      {path: 'post', component: BlogpostComponent},
      {path: 'manager', component: BlogmanagerComponent},
      {path: 'search', component: BlogsearchComponent},
      {path: 'preview', component: BlogpreviewComponent},
      {path: 'edit', component: BlogeditComponent}
    ]
  },
  {
    path: '**',
    redirectTo: '/admin/top'
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RouterModule.forChild(myRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [TopComponent, ProfileEditComponent, ProfilePreviewComponent, SkillEditComponent,
    SkillPreviewComponent, ProfiletopComponent, SkilltopComponent, BlogtopComponent, BlogeditComponent,
    BlogpreviewComponent, BlogsearchComponent, BlogmanagerComponent, BlogpostComponent, AddskillComponent, EditProfileComponent],
})
export class AdminModule {
}
