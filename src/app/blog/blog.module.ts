import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {BlogPage} from './blog.page';
import {DetaileComponent} from './detaile/detaile.component';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'top',
    component: BlogPage,
  },
  {
    path: 'detail',
    component: DetaileComponent
  },
  {
    path: '**',
    redirectTo: 'top'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [BlogPage, DetaileComponent],
})
export class BlogPageModule {
}
