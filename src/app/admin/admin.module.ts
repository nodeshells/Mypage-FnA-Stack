import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopComponent} from './top/top.component';
import {myRoutes} from './admin-routing.module';
import {RouterModule} from '../../../node_modules/@angular/router';
import {SharedModule} from '../shared/shared.module';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(myRoutes),
    SharedModule,
    IonicModule.forRoot(),
  ],
  declarations: [TopComponent, EditProfileComponent]
})
export class AdminModule {
}
