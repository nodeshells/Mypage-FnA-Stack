import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';
import {MypagePage} from './mypage.page';

const routes: Routes = [
  {
    path: '',
    component: MypagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [MypagePage]
})
export class MypagePageModule {
}
