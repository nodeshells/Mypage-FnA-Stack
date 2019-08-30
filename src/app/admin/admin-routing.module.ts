import {Routes} from '@angular/router';
import {TopComponent} from './top/top.component';
import {ProfileEditComponent} from './profile/edit/edit.component';
import {SkillPreviewComponent} from './skill/preview/preview.component';
import {SkillEditComponent} from './skill/edit/edit.component';
import {ProfiletopComponent} from './profile/profiletop/profiletop.component';
import {SkilltopComponent} from './skill/skilltop/skilltop.component';
import {BlogtopComponent} from './blog/blogtop/blogtop.component';
import {BlogsearchComponent} from './blog/blogsearch/blogsearch.component';
import {BlogpreviewComponent} from './blog/blogpreview/blogpreview.component';
import {BlogeditComponent} from './blog/blogedit/blogedit.component';
import {BlogmanagerComponent} from './blog/blogmanager/blogmanager.component';
import {BlogpostComponent} from './blog/blogpost/blogpost.component';
import {ProfilePreviewComponent} from './profile/preview/preview.component';
import {AddskillComponent} from './skill/addskill/addskill.component';

export const myRoutes: Routes = [
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
    redirectTo: 'top'
  }
];

export class AdminRoutingModule {
}
