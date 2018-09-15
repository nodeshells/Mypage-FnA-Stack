import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';
import { myRoutes } from './admin-routing.module';
import { RouterModule } from '../../../node_modules/@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(myRoutes),
    SharedModule
  ],
  declarations: [TopComponent]
})
export class AdminModule { }
