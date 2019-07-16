import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {TopPage} from './top.page';
import {ToppageComponent} from './toppage/toppage.component';

const routes: Routes = [
  {
    path: '',
    component: ToppageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TopPage, ToppageComponent]
})
export class TopPageModule {
}
