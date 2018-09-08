import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MzButtonModule, MzInputModule } from 'ngx-materialize';

import {

} from '@angular/material';

@NgModule({
  imports: [
    MzButtonModule,
    MzInputModule
  ],
  exports: [
    MzButtonModule,
    MzInputModule
  ]
})
export class MaterializeModule { }
