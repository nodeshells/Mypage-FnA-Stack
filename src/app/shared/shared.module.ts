import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './ng_material_modules/material.module';
import {MaterializeModule} from './materialize_css_modules/materialize.module';
import {SharedService} from './shared.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MaterializeModule
  ],
  exports: [
    MaterialModule,
    MaterializeModule],
  declarations: [],
  providers: [
    SharedService
  ]
})
export class SharedModule {
}
