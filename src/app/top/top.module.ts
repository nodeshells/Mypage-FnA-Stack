import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {TopPage} from './top.page';
import {ToppageComponent} from './toppage/toppage.component';
import {SharedModule} from '../shared/shared.module';
import {BackgroundThreejsComponent} from './background-threejs/background-threejs.component';

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
    IonicModule.forRoot(),
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [TopPage, ToppageComponent, BackgroundThreejsComponent]
})
export class TopPageModule {
}
